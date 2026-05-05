"use client";

import Link from "next/link";
import { FlairLogo } from "./flair-logo";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-10 py-4 bg-[rgba(8,12,20,0.85)] backdrop-blur-xl border-b border-[var(--border)]">
      <Link href="/" className="flex items-center gap-2 text-white no-underline">
        <FlairLogo size={22} />
        <span className="font-[family-name:var(--font-syne)] font-extrabold text-xl tracking-tight">
          Flair
        </span>
      </Link>

      <ul className="hidden md:flex gap-8 list-none">
        <li>
          <Link
            href="#features"
            className="text-sm text-[var(--muted)] hover:text-white transition-colors"
          >
            Features
          </Link>
        </li>
        <li>
          <Link
            href="/privacy"
            className="text-sm text-[var(--muted)] hover:text-white transition-colors"
          >
            Privacy
          </Link>
        </li>
        <li>
          <Link
            href="#support"
            className="text-sm text-[var(--muted)] hover:text-white transition-colors"
          >
            Support
          </Link>
        </li>
      </ul>

      <Link
        href="#support"
        className="gradient-bg text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-80 transition-opacity"
      >
        Get notified
      </Link>
    </nav>
  );
}
