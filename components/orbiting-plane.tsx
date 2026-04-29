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
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="plane-gradient" x1="0" y1="28" x2="56" y2="28" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#E040A0" />
            <stop offset="100%" stopColor="#7B5FE8" />
          </linearGradient>
          <linearGradient id="window-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#A0E0FF" />
            <stop offset="100%" stopColor="#60B0E0" />
          </linearGradient>
        </defs>
        {/* Commercial airliner shape */}
        <g>
          {/* Fuselage - long cylindrical body */}
          <path
            d="M8 28C8 28 10 25 16 25L48 26C52 26.5 54 27.5 54 28C54 28.5 52 29.5 48 30L16 31C10 31 8 28 8 28Z"
            fill="url(#plane-gradient)"
          />
          {/* Nose cone */}
          <path
            d="M48 26C52 26.5 56 27.5 56 28C56 28.5 52 29.5 48 30L48 26Z"
            fill="#9070E8"
          />
          {/* Main wings - swept back */}
          <path
            d="M24 28L18 8L22 7L28 25L34 7L38 8L32 28L38 48L34 49L28 31L22 49L18 48L24 28Z"
            fill="url(#plane-gradient)"
          />
          {/* Horizontal stabilizer (tail wings) */}
          <path
            d="M12 28L10 20L13 19L15 27L15 29L13 37L10 36L12 28Z"
            fill="url(#plane-gradient)"
          />
          {/* Vertical tail fin */}
          <path
            d="M10 28L8 16L12 15L14 26L14 28L10 28Z"
            fill="url(#plane-gradient)"
          />
          {/* Cockpit windows */}
          <ellipse cx="50" cy="27.5" rx="2.5" ry="1" fill="url(#window-gradient)" />
          {/* Cabin windows */}
          <circle cx="44" cy="27" r="0.8" fill="rgba(160,224,255,0.7)" />
          <circle cx="41" cy="27" r="0.8" fill="rgba(160,224,255,0.7)" />
          <circle cx="38" cy="27" r="0.8" fill="rgba(160,224,255,0.7)" />
          <circle cx="35" cy="27" r="0.8" fill="rgba(160,224,255,0.7)" />
          {/* Engine pods under wings */}
          <ellipse cx="25" cy="30" rx="3" ry="1.5" fill="#6050C8" />
          <ellipse cx="31" cy="30" rx="3" ry="1.5" fill="#6050C8" />
          {/* Engine glow/exhaust */}
          <circle cx="22" cy="30" r="1" fill="rgba(224,64,160,0.8)" />
          <circle cx="34" cy="30" r="1" fill="rgba(224,64,160,0.8)" />
        </g>
      </svg>
    </div>
  )
}
