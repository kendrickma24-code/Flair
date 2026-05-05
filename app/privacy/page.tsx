import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FlairLogo } from "@/components/flair-logo";

export const metadata: Metadata = {
  title: "Privacy Policy — Flair",
  description: "Privacy policy for Flair - how we handle your data.",
};

const sections = [
  {
    id: "collect",
    number: "01",
    title: "What we collect",
    content: (
      <>
        <p>Flair collects only the information necessary to provide our service:</p>
        <ul>
          <li>Account information (name, email, username)</li>
          <li>Flight details you choose to post publicly or to friends</li>
          <li>Device information for app functionality and crash reporting</li>
        </ul>
      </>
    ),
  },
  {
    id: "use",
    number: "02",
    title: "How we use your data",
    content: (
      <p>
        Your data is used solely to power Flair — showing your flights to friends,
        building your globe, and surfacing relevant routes. We do not sell your
        personal data to third parties or advertisers.
      </p>
    ),
  },
  {
    id: "sharing",
    number: "03",
    title: "Data sharing",
    content: (
      <p>
        Flight posts are visible to your followers within Flair. You control your
        own visibility at all times. We do not share data with brokers or ad
        networks.
      </p>
    ),
  },
  {
    id: "retention",
    number: "04",
    title: "Data retention",
    content: (
      <p>
        We retain your data for as long as your account is active. You may delete
        your account at any time, which removes all personal data within 30 days.
      </p>
    ),
  },
  {
    id: "rights",
    number: "05",
    title: "Your rights",
    content: (
      <p>
        You have the right to access, correct, or delete your personal information.
        Reach out to us at any time and we&apos;ll respond promptly.
      </p>
    ),
  },
  {
    id: "contact",
    number: "06",
    title: "Contact",
    content: (
      <>
        <p>Questions about this policy or your data? We&apos;re happy to help.</p>
        <div className="bg-[var(--background-card)] border border-[var(--border)] rounded-2xl p-7 flex items-center justify-between gap-6 flex-wrap mt-2 max-sm:flex-col max-sm:items-start">
          <p className="text-sm text-[var(--muted)] leading-relaxed m-0">
            Reach our privacy team directly — we read every message.
          </p>
          <a
            href="mailto:privacy@flairapp.com"
            className="gradient-bg inline-flex items-center gap-2 text-white font-medium text-sm px-5 py-2.5 rounded-full hover:opacity-80 transition-opacity whitespace-nowrap shrink-0"
          >
            {"✉"} privacy@flairapp.com
          </a>
        </div>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      {/* Background glow */}
      <div className="fixed top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse,rgba(123,95,232,0.07)_0%,transparent_60%)] pointer-events-none z-0" />

      <main className="flex-1 pt-24 relative z-10 min-h-screen">
        {/* Hero */}
        <div className="max-w-[680px] mx-auto px-8 pt-14 pb-10 animate-fade-up">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-[var(--muted)] hover:text-white mb-8 transition-colors group"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              className="group-hover:-translate-x-0.5 transition-transform"
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

          <div className="text-xs font-semibold text-[var(--accent-purple-light)] tracking-widest uppercase mb-3">
            Legal
          </div>
          <h1 className="font-[family-name:var(--font-syne)] text-[clamp(2rem,5vw,3rem)] font-extrabold tracking-tight leading-tight mb-3">
            Privacy Policy
          </h1>
          <p className="text-xs text-[var(--muted-dim)]">Last updated: April 2026</p>
        </div>

        <hr className="border-t border-[var(--border)] max-w-[680px] mx-auto" />

        {/* Content */}
        <div className="max-w-[680px] mx-auto px-8 pt-10 pb-20 animate-fade-up [animation-delay:0.08s]">
          {/* Table of contents */}
          <nav className="bg-[var(--background-card)] border border-[var(--border)] rounded-2xl p-6 mb-12">
            <div className="text-xs font-semibold text-[var(--muted-dim)] tracking-widest uppercase mb-4">
              On this page
            </div>
            <ol className="flex flex-col gap-2 list-none">
              {sections.map((section, i) => (
                <li key={section.id} className="flex items-baseline gap-2.5">
                  <span className="text-[10px] font-semibold text-[var(--muted-dim)] tabular-nums w-6 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <a
                    href={`#${section.id}`}
                    className="text-sm text-[var(--muted)] hover:text-[var(--accent-purple-light)] transition-colors"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Sections */}
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="mb-12 scroll-mt-20 [&_p]:text-sm [&_p]:text-[var(--muted)] [&_p]:leading-relaxed [&_p]:mb-3 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:mb-3 [&_li]:text-sm [&_li]:text-[var(--muted)] [&_li]:leading-relaxed [&_li]:flex [&_li]:items-start [&_li]:gap-2.5 [&_li]:before:content-[''] [&_li]:before:w-1.5 [&_li]:before:h-1.5 [&_li]:before:rounded-full [&_li]:before:bg-[var(--accent-purple)] [&_li]:before:shrink-0 [&_li]:before:mt-2"
            >
              <h2 className="font-[family-name:var(--font-syne)] text-lg font-bold text-white mb-4 flex items-center gap-2.5">
                <span className="text-[10px] font-bold text-[var(--accent-purple)] bg-[rgba(123,95,232,0.1)] border border-[rgba(123,95,232,0.2)] rounded px-1.5 py-0.5 tabular-nums shrink-0">
                  {section.number}
                </span>
                {section.title}
              </h2>
              {section.content}
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
