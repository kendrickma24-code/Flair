"use client"

import { useEffect, useRef } from "react"

interface GeoFeature {
  polygons: number[][][][]
}

export function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const SIZE = 700
    canvas.width = SIZE * dpr
    canvas.height = SIZE * dpr
    canvas.style.width = SIZE + "px"
    canvas.style.height = SIZE + "px"
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.scale(dpr, dpr)
    const cx = SIZE / 2
    const cy = SIZE / 2
    const R = 290

    function toRad(d: number) {
      return (d * Math.PI) / 180
    }

    function project(lat: number, lon: number, rot: number) {
      const la = toRad(lat)
      const lo = toRad(lon + rot)
      const x = R * Math.cos(la) * Math.sin(lo)
      const y = -R * Math.sin(la)
      const z = R * Math.cos(la) * Math.cos(lo)
      return { x: cx + x, y: cy + y, z: z }
    }

    const routes = [
      { a: [47.4, -122.3], b: [34.0, -118.2] },
      { a: [21.3, -157.8], b: [47.4, -122.3] },
      { a: [39.9, -82.9], b: [39.7, -104.9] },
      { a: [51.5, -0.1], b: [48.9, 2.3] },
      { a: [35.7, 139.8], b: [1.4, 103.9] },
      { a: [25.2, 55.4], b: [51.5, -0.1] },
    ]

    let rot = 0
    const routeProgress = routes.map(() => Math.random())
    let geoData: GeoFeature[] | null = null
    let animationId: number

    // Minimal TopoJSON to GeoJSON converter
    function topojsonFeature(
      topology: {
        arcs: number[][][]
        transform?: { scale: number[]; translate: number[] }
        objects: { countries: { geometries: { type: string; arcs: number[][] | number[][][] }[] } }
      },
      obj: { geometries: { type: string; arcs: number[][] | number[][][] }[] }
    ): GeoFeature[] {
      const arcs = topology.arcs
      const transform = topology.transform
      const scale = transform ? transform.scale : [1, 1]
      const translate = transform ? transform.translate : [0, 0]

      function decodeArc(arcIndex: number): number[][] {
        const arc = arcs[arcIndex < 0 ? ~arcIndex : arcIndex]
        const coords: number[][] = []
        let x = 0
        let y = 0
        for (let i = 0; i < arc.length; i++) {
          x += arc[i][0]
          y += arc[i][1]
          coords.push([x * scale[0] + translate[0], y * scale[1] + translate[1]])
        }
        if (arcIndex < 0) coords.reverse()
        return coords
      }

      function decodeRing(ring: number[]): number[][] {
        let coords: number[][] = []
        for (let i = 0; i < ring.length; i++) {
          const arcCoords = decodeArc(ring[i])
          if (i > 0) arcCoords.splice(0, 1)
          coords = coords.concat(arcCoords)
        }
        return coords
      }

      const features: GeoFeature[] = []
      const geometries = obj.geometries
      for (let i = 0; i < geometries.length; i++) {
        const geom = geometries[i]
        const polygons: number[][][][] = []
        if (geom.type === "Polygon") {
          const rings: number[][][] = []
          for (let j = 0; j < geom.arcs.length; j++) {
            rings.push(decodeRing(geom.arcs[j] as number[]))
          }
          polygons.push(rings)
        } else if (geom.type === "MultiPolygon") {
          for (let k = 0; k < geom.arcs.length; k++) {
            const rings2: number[][][] = []
            const multiArcs = geom.arcs[k] as number[][]
            for (let l = 0; l < multiArcs.length; l++) {
              rings2.push(decodeRing(multiArcs[l]))
            }
            polygons.push(rings2)
          }
        }
        if (polygons.length > 0) {
          features.push({ polygons: polygons })
        }
      }
      return features
    }

    function drawGlobe(rotation: number) {
      if (!ctx) return
      ctx.clearRect(0, 0, SIZE, SIZE)
      ctx.beginPath()
      ctx.arc(cx, cy, R, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(10,16,30,1)"
      ctx.fill()

      // Draw latitude lines
      for (let lat = -80; lat <= 80; lat += 20) {
        ctx.beginPath()
        let first = true
        for (let lon = -180; lon <= 180; lon += 3) {
          const p = project(lat, lon, rotation)
          if (p.z < 0) {
            first = true
            continue
          }
          if (first) {
            ctx.moveTo(p.x, p.y)
            first = false
          } else {
            ctx.lineTo(p.x, p.y)
          }
        }
        ctx.strokeStyle = "rgba(74,158,248,0.07)"
        ctx.lineWidth = 0.5
        ctx.stroke()
      }

      // Draw longitude lines
      for (let lo2 = -180; lo2 < 180; lo2 += 30) {
        ctx.beginPath()
        let first2 = true
        for (let la2 = -90; la2 <= 90; la2 += 3) {
          const p2 = project(la2, lo2, rotation)
          if (p2.z < 0) {
            first2 = true
            continue
          }
          if (first2) {
            ctx.moveTo(p2.x, p2.y)
            first2 = false
          } else {
            ctx.lineTo(p2.x, p2.y)
          }
        }
        ctx.strokeStyle = "rgba(74,158,248,0.07)"
        ctx.lineWidth = 0.5
        ctx.stroke()
      }

      // Draw countries from GeoJSON
      if (geoData) {
        for (let fi = 0; fi < geoData.length; fi++) {
          const feature = geoData[fi]
          for (let pi = 0; pi < feature.polygons.length; pi++) {
            const polygon = feature.polygons[pi]
            const ring = polygon[0]
            ctx.beginPath()
            let cf = true
            let lastVisible = false
            for (let ci = 0; ci < ring.length; ci++) {
              const coord = ring[ci]
              const lon3 = coord[0]
              const lat3 = coord[1]
              const pp = project(lat3, lon3, rotation)
              const visible = pp.z > 0
              if (!visible) {
                cf = true
                lastVisible = false
                continue
              }
              if (cf || !lastVisible) {
                ctx.moveTo(pp.x, pp.y)
                cf = false
              } else {
                ctx.lineTo(pp.x, pp.y)
              }
              lastVisible = visible
            }
            ctx.fillStyle = "rgba(90,130,220,0.25)"
            ctx.fill()
            ctx.strokeStyle = "rgba(120,170,255,0.35)"
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      // Draw flight routes
      for (let ri = 0; ri < routes.length; ri++) {
        const route = routes[ri]
        const la = route.a[0]
        const lo = route.a[1]
        const lb = route.b[0]
        const lb2 = route.b[1]
        ctx.beginPath()
        let rf = true
        for (let s = 0; s <= 80; s++) {
          const frac = s / 80
          const rp = project(la + (lb - la) * frac, lo + (lb2 - lo) * frac, rotation)
          if (rp.z < 0) {
            rf = true
            continue
          }
          if (rf) {
            ctx.moveTo(rp.x, rp.y)
            rf = false
          } else {
            ctx.lineTo(rp.x, rp.y)
          }
        }
        ctx.strokeStyle = "rgba(123,95,232,0.3)"
        ctx.lineWidth = 1
        ctx.setLineDash([4, 6])
        ctx.stroke()
        ctx.setLineDash([])
        const t = routeProgress[ri]
        const hp = project(la + (lb - la) * t, lo + (lb2 - lo) * t, rotation)
        if (hp.z > 0) {
          ctx.beginPath()
          ctx.arc(hp.x, hp.y, 3.5, 0, Math.PI * 2)
          ctx.fillStyle = "#E040A0"
          ctx.fill()
          ctx.beginPath()
          ctx.arc(hp.x, hp.y, 7, 0, Math.PI * 2)
          ctx.fillStyle = "rgba(224,64,160,0.18)"
          ctx.fill()
        }
        routeProgress[ri] = (routeProgress[ri] + 0.0008) % 1
      }

      // Edge fade effect
      const eg = ctx.createRadialGradient(cx, cy, R * 0.65, cx, cy, R)
      eg.addColorStop(0, "transparent")
      eg.addColorStop(1, "rgba(8,12,20,0.9)")
      ctx.beginPath()
      ctx.arc(cx, cy, R, 0, Math.PI * 2)
      ctx.fillStyle = eg
      ctx.fill()
      ctx.beginPath()
      ctx.arc(cx, cy, R, 0, Math.PI * 2)
      ctx.strokeStyle = "rgba(123,95,232,0.22)"
      ctx.lineWidth = 1
      ctx.stroke()
    }

    function animate() {
      rot -= 0.1
      drawGlobe(rot)
      animationId = requestAnimationFrame(animate)
    }

    // Load accurate world GeoJSON from Natural Earth
    fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
      .then((res) => res.json())
      .then((topology) => {
        geoData = topojsonFeature(topology, topology.objects.countries)
        animate()
      })
      .catch(() => {
        animate()
      })

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      width={700}
      height={700}
      className="absolute inset-0 w-[700px] h-[700px] opacity-30"
    />
  )
}
