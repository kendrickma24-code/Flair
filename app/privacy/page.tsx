import Link from "next/link"
import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy — Flair",
  description: "Privacy policy for Flair - the travel and flight sharing app.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Background glow */}
      <div className="fixed top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse,rgba(123,95,232,0.07)_0%,transparent_60%)] pointer-events-none z-0" />

      <main className="flex-1 pt-24 relative z-10">
        {/* Hero strip */}
        <div className="max-w-[680px] mx-auto px-8 pt-14 pb-10 animate-fadeUp">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-foreground transition-colors mb-8 group"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform group-hover:-translate-x-0.5"
            >
              <path
                d="M10 3L5 8L10 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Flair
          </Link>
          <div className="text-xs font-semibold text-[#B09DF7] tracking-widest uppercase mb-3">
            Legal
          </div>
          <h1 className="font-display text-[clamp(2rem,5vw,3rem)] font-extrabold tracking-tighter leading-tight mb-3">
            Privacy Policy
          </h1>
          <p className="text-xs text-muted-foreground">Last updated: April 2026</p>
        </div>

        {/* Divider */}
        <hr className="border-t border-border max-w-[680px] mx-auto" />

        {/* Prose content */}
        <div className="max-w-[680px] mx-auto px-8 py-10 pb-20 animate-fadeUp" style={{ animationDelay: "0.08s" }}>
          {/* Table of contents */}
          <nav className="bg-card border border-border rounded-2xl p-6 px-7 mb-12" aria-label="Table of contents">
            <div className="text-[11px] font-semibold text-muted-foreground tracking-widest uppercase mb-4">
              On this page
            </div>
            <ol className="flex flex-col gap-2 list-none">
              {[
                { href: "#collect", label: "What we collect" },
                { href: "#use", label: "How we use your data" },
                { href: "#sharing", label: "Data sharing" },
                { href: "#retention", label: "Data retention" },
                { href: "#rights", label: "Your rights" },
                { href: "#contact", label: "Contact" },
              ].map((item, i) => (
                <li key={item.href} className="flex items-baseline gap-2.5">
                  <span className="text-[10px] font-semibold text-muted-foreground tabular-nums w-6 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Link href={item.href} className="text-sm text-muted hover:text-[#B09DF7] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>

          {/* Sections */}
          <Section id="collect" num="01" title="What we collect">
            <p>Flair collects only the information necessary to provide our service:</p>
            <ul>
              <li>Account information (name, email, username)</li>
              <li>Flight details you choose to post publicly or to friends</li>
              <li>Device information for app functionality and crash reporting</li>
            </ul>
          </Section>

          <Section id="use" num="02" title="How we use your data">
            <p>
              Your data is used solely to power Flair — showing your flights to friends, building your globe, and surfacing relevant routes. We do not sell your personal data to third parties or advertisers.
            </p>
          </Section>

          <Section id="sharing" num="03" title="Data sharing">
            <p>
              Flight posts are visible to your followers within Flair. You control your own visibility at all times. We do not share data with brokers or ad networks.
            </p>
          </Section>

          <Section id="retention" num="04" title="Data retention">
            <p>
              We retain your data for as long as your account is active. You may delete your account at any time, which removes all personal data within 30 days.
            </p>
          </Section>

          <Section id="rights" num="05" title="Your rights">
            <p>
              You have the right to access, correct, or delete your personal information. Reach out to us at any time and we&apos;ll respond promptly.
            </p>
          </Section>

          <Section id="contact" num="06" title="Contact">
            <p>Questions about this policy or your data? We&apos;re happy to help.</p>
            <div className="bg-card border border-border rounded-2xl p-7 flex items-center justify-between gap-6 flex-wrap mt-2">
              <p className="text-sm text-muted leading-relaxed m-0">
                Reach our privacy team directly — we read every message.
              </p>
              <a
                href="mailto:privacy@flairapp.com"
                className="inline-flex items-center gap-2 grad-bg text-foreground font-medium text-sm px-5 py-2.5 rounded-full hover:opacity-80 transition-opacity whitespace-nowrap shrink-0"
              >
                ✉ privacy@flairapp.com
              </a>
            </div>
          </Section>
        </div>
      </main>

      <Footer />
    </div>
  )
}

function Section({
  id,
  num,
  title,
  children,
}: {
  id: string
  num: string
  title: string
  children: React.ReactNode
}) {
  return (
    <div id={id} className="mb-12 scroll-mt-20">
      <h2 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-2.5">
        <span className="text-[10px] font-bold text-primary bg-primary/10 border border-primary/20 rounded px-2 py-0.5 tabular-nums shrink-0">
          {num}
        </span>
        {title}
      </h2>
      <div className="text-sm text-muted leading-relaxed space-y-3 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-0 [&_li]:flex [&_li]:items-start [&_li]:gap-2.5 [&_li]:before:content-[''] [&_li]:before:w-1.5 [&_li]:before:h-1.5 [&_li]:before:rounded-full [&_li]:before:bg-primary [&_li]:before:shrink-0 [&_li]:before:mt-2">
        {children}
      </div>
    </div>
  )
}
