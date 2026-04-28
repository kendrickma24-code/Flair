import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Globe } from "@/components/globe"
import { OrbitingPlane } from "@/components/orbiting-plane"
import { PhoneMockupFeed, PhoneMockupDiscover } from "@/components/phone-mockup"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-8 pt-32 pb-16 relative overflow-hidden">
        {/* Background glows */}
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-[radial-gradient(ellipse,rgba(123,95,232,0.14)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[500px] bg-[radial-gradient(ellipse,rgba(224,64,160,0.07)_0%,transparent_60%)] pointer-events-none" />

        {/* Globe with orbiting plane */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-[700px] h-[700px]">
            <Globe />
            <OrbitingPlane />
          </div>
        </div>

        {/* Badge */}
        <div className="relative z-10 animate-fadeUp inline-flex items-center gap-2 bg-primary/10 text-[#B09DF7] text-xs font-medium px-4 py-1.5 rounded-full border border-primary/20 mb-8 tracking-wider uppercase">
          <div className="w-1.5 h-1.5 rounded-full bg-[#B09DF7] animate-pulse-dot" />
          Coming soon to the App Store
        </div>

        {/* Headline */}
        <h1 className="relative z-10 animate-fadeUp-1 font-display font-extrabold text-[clamp(3rem,9vw,6.5rem)] leading-none tracking-tighter mb-6">
          Add some <span className="grad-text">FLAIR</span>
          <br />
          to your travel.
        </h1>

        {/* Subheadline */}
        <p className="relative z-10 animate-fadeUp-2 text-[clamp(0.95rem,2vw,1.125rem)] text-muted max-w-[460px] mx-auto mb-10 font-light leading-relaxed">
          Share flights with friends. See who&apos;s flying your route. Build your travel story — one flight at a time.
        </p>

        {/* CTAs */}
        <div className="relative z-10 animate-fadeUp-3 flex gap-3 justify-center flex-wrap">
          <Link
            href="#features"
            className="inline-flex items-center gap-1.5 grad-bg text-foreground text-sm font-medium px-7 py-3 rounded-full hover:opacity-80 hover:-translate-y-0.5 transition-all"
          >
            See how it works →
          </Link>
          <Link
            href="#support"
            className="inline-flex items-center gap-1.5 bg-transparent text-muted text-sm px-7 py-3 rounded-full border border-border-mid hover:text-foreground hover:border-white/30 hover:-translate-y-0.5 transition-all"
          >
            Get notified
          </Link>
        </div>
      </section>

      {/* Phone Mockups */}
      <div className="flex justify-center items-start gap-5 px-8 pb-24 relative z-10 animate-fadeUp-4">
        <PhoneMockupFeed />
        <PhoneMockupDiscover />
      </div>

      {/* Features Section */}
      <section className="py-22 px-8 max-w-[1060px] mx-auto" id="features">
        <div className="text-xs font-semibold text-[#B09DF7] tracking-widest uppercase mb-3">
          How it works
        </div>
        <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold tracking-tight leading-tight mb-12 max-w-[520px]">
          Travel is more fun when it&apos;s shared.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border rounded-2xl overflow-hidden">
          <FeatureCard
            icon="✈️"
            title="Post your flights"
            description="Log upcoming and past trips to your feed. Your friends see where you're headed — and can jump on the same flight."
          />
          <FeatureCard
            icon="🌐"
            title="Discover routes"
            description="See trending routes and popular destinations in real time. Find out who in your network is flying your way."
          />
          <FeatureCard
            icon="🗺️"
            title="Build your globe"
            description="Every flight you take maps to your personal globe — a living record of every country and city you've touched down in."
          />
        </div>
      </section>

      {/* Divider */}
      <hr className="border-t border-border max-w-[1060px] mx-auto" />

      {/* Support Section */}
      <section className="py-20 px-8 max-w-[680px] mx-auto" id="support">
        <div className="text-xs font-semibold text-[#B09DF7] tracking-widest uppercase mb-3">
          Support
        </div>
        <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-extrabold tracking-tight leading-tight mb-0">
          Need help?
        </h2>
        <div className="bg-card border border-border rounded-2xl p-10 mt-8">
          <p className="text-sm text-muted mb-6 leading-relaxed">
            We read every message. Whether it&apos;s a bug, a feature idea, or a question about your account — we&apos;d love to hear from you.
          </p>
          <a
            href="mailto:support@flairapp.com"
            className="inline-flex items-center gap-2 grad-bg text-foreground font-medium text-sm px-6 py-3 rounded-full hover:opacity-80 transition-opacity"
          >
            ✉ support@flairapp.com
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string
  title: string
  description: string
}) {
  return (
    <div className="bg-card p-8 hover:bg-card-secondary transition-colors">
      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-base mb-5">
        {icon}
      </div>
      <h3 className="font-display text-base font-bold text-foreground mb-2">
        {title}
      </h3>
      <p className="text-sm text-muted leading-relaxed">{description}</p>
    </div>
  )
}
