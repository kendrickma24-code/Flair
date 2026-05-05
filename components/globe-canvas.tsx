"use client";

import { useEffect, useRef } from "react";

export function GlobeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const SIZE = 700;
    canvas.width = SIZE * dpr;
    canvas.height = SIZE * dpr;
    canvas.style.width = SIZE + "px";
    canvas.style.height = SIZE + "px";

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.scale(dpr, dpr);

    const cx = SIZE / 2;
    const cy = SIZE / 2;
    const R = 290;

    function toRad(d: number) {
      return (d * Math.PI) / 180;
    }

    function project(lat: number, lon: number, rot: number) {
      const la = toRad(lat);
      const lo = toRad(lon + rot);
      const x = R * Math.cos(la) * Math.sin(lo);
      const y = -R * Math.sin(la);
      const z = R * Math.cos(la) * Math.cos(lo);
      return { x: cx + x, y: cy + y, z: z };
    }

    // Simplified dot grid for the globe
    const dotLats = [];
    for (let lat = -80; lat <= 80; lat += 10) {
      const lonStep = lat === 0 ? 8 : Math.max(8, Math.round(20 / Math.cos(toRad(lat))));
      for (let lon = -180; lon < 180; lon += lonStep) {
        dotLats.push({ lat, lon });
      }
    }

    let rotation = 0;
    let animationId: number;

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, SIZE, SIZE);

      // Draw dots
      for (const dot of dotLats) {
        const p = project(dot.lat, dot.lon, rotation);
        if (p.z > 0) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(123, 95, 232, 0.4)";
          ctx.fill();
        }
      }

      rotation += 0.15;
      animationId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-[700px] h-[700px] max-w-[90vw] max-h-[90vw]"
    />
  );
}
