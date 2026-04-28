"use client"

import { useEffect, useRef } from "react"

export function OrbitingPlane() {
  const planeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let angle = 0
    const radius = 320 // Orbit radius around the globe
    const centerX = 350 // Globe center X (half of 700px globe)
    const centerY = 350 // Globe center Y
    const tilt = 0.3 // Tilt of the orbit plane
    const speed = 0.008 // Rotation speed

    function animate() {
      if (!planeRef.current) return

      angle += speed

      // 3D orbit calculation
      const x = Math.cos(angle) * radius
      const z = Math.sin(angle) * radius
      const y = Math.sin(angle) * radius * tilt

      // Calculate scale based on z position (closer = bigger)
      const scale = 0.8 + (z / radius) * 0.4
      const opacity = z > -radius * 0.3 ? 1 : 0.3

      // Calculate rotation to face direction of travel
      const rotationAngle = -angle * (180 / Math.PI) - 90

      planeRef.current.style.transform = `
        translate(${centerX + x}px, ${centerY + y}px)
        scale(${scale})
        rotate(${rotationAngle}deg)
      `
      planeRef.current.style.opacity = String(opacity)
      planeRef.current.style.zIndex = z > 0 ? "20" : "5"

      requestAnimationFrame(animate)
    }

    const frameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameId)
  }, [])

  return (
    <div
      ref={planeRef}
      className="absolute pointer-events-none"
      style={{
        filter: "drop-shadow(0 0 12px rgba(123,95,232,0.8))",
        willChange: "transform, opacity",
      }}
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="plane-gradient" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#7B5FE8" />
            <stop offset="100%" stopColor="#E040A0" />
          </linearGradient>
        </defs>
        {/* Realistic airplane silhouette */}
        <g transform="translate(24, 24) rotate(0) translate(-24, -24)">
          {/* Fuselage */}
          <path
            d="M4 24C4 24 8 22.5 14 22.5L38 22C42 22 44 23 44 24C44 25 42 26 38 26L14 25.5C8 25.5 4 24 4 24Z"
            fill="url(#plane-gradient)"
          />
          {/* Main wings */}
          <path
            d="M18 24L16 14L20 13L24 22L28 13L32 14L30 24L32 34L28 35L24 26L20 35L16 34L18 24Z"
            fill="url(#plane-gradient)"
          />
          {/* Tail fin */}
          <path
            d="M8 24L6 18L10 17L12 24L10 31L6 30L8 24Z"
            fill="url(#plane-gradient)"
          />
          {/* Cockpit window */}
          <ellipse cx="40" cy="24" rx="2" ry="1.5" fill="rgba(255,255,255,0.6)" />
          {/* Engine glow */}
          <circle cx="6" cy="24" r="2" fill="rgba(224,64,160,0.6)" />
        </g>
      </svg>
    </div>
  )
}
