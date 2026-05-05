"use client";

import Link from "next/link";
import { GlobeCanvas } from "./globe-canvas";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-8 pt-32 pb-16 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-[radial-gradient(ellipse,rgba(123,95,232,0.14)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[500px] bg-[radial-gradient(ellipse,rgba(224,64,160,0.07)_0%,transparent_60%)] pointer-events-none" />

      {/* Globe */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-30">
        <GlobeCanvas />
      </div>

      {/* Animated plane */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <svg
          className="absolute w-8 h-8 opacity-0 drop-shadow-[0_0_6px_rgba(123,95,232,0.7)] animate-plane-fly"
          viewBox="0 0 32 32"
          fill="none"
        >
          <defs>
            <linearGradient
              id="pg"
              x1="0"
              y1="0"
              x2="32"
              y2="32"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#7B5FE8" />
              <stop offset="100%" stopColor="#E040A0" />
            </linearGradient>
          </defs>
          <path
            d="M2 16 L26 6 L28 10 L18 14 L22 26 L18 24 L14 18 L8 20 L9 24 L5 22 Z"
            fill="url(#pg)"
          />
        </svg>
      </div>

      {/* Badge */}
      <div className="animate-fade-up inline-flex items-center gap-2 bg-[rgba(123,95,232,0.1)] text-[var(--accent-purple-light)] text-xs font-medium px-4 py-1.5 rounded-full border border-[rgba(123,95,232,0.22)] mb-8 relative z-10 tracking-wide uppercase">
        <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-purple-light)] animate-pulse-dot" />
        Coming soon to the App Store
      </div>

      {/* Title */}
      <h1 className="animate-fade-up font-[family-name:var(--font-syne)] text-[clamp(3rem,9vw,6.5rem)] font-extrabold leading-none tracking-tighter mb-6 relative z-10 [animation-delay:0.1s]">
        Add some <span className="gradient-text">FLAIR</span>
        <br />
        to your travel.
      </h1>

      {/* Subtitle */}
      <p className="animate-fade-up text-[clamp(0.95rem,2vw,1.125rem)] text-[var(--muted)] max-w-[460px] mx-auto mb-10 font-light leading-relaxed relative z-10 [animation-delay:0.2s]">
        Share flights with friends. See who&apos;s flying your route. Build your
        travel story — one flight at a time.
      </p>

      {/* CTAs */}
      <div className="animate-fade-up flex gap-3 justify-center flex-wrap relative z-10 [animation-delay:0.3s]">
        <Link
          href="#features"
          className="gradient-bg inline-flex items-center gap-1.5 text-white text-sm font-medium px-7 py-3 rounded-full hover:opacity-80 hover:-translate-y-0.5 transition-all"
        >
          {"See how it works →"}
        </Link>
        <Link
          href="#support"
          className="inline-flex items-center gap-1.5 bg-transparent text-[var(--muted)] text-sm px-7 py-3 rounded-full border border-[var(--border-mid)] hover:text-white hover:border-[rgba(255,255,255,0.3)] hover:-translate-y-0.5 transition-all"
        >
          Get notified
        </Link>
      </div>
    </section>
  );
}
