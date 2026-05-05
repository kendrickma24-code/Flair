import Link from "next/link";
import { FlairLogo } from "./flair-logo";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-6 px-10 flex items-center justify-between flex-wrap gap-4 max-md:flex-col max-md:items-start">
      <Link href="/" className="flex items-center gap-2 text-white no-underline text-base">
        <FlairLogo size={18} id="g3" />
        <span className="font-[family-name:var(--font-syne)] font-extrabold">
          Flair
        </span>
      </Link>

      <p className="text-xs text-[var(--muted-dim)]">
        © 2026 Flair. All rights reserved.
      </p>

      <nav>
        <ul className="flex gap-6 list-none">
          <li>
            <Link
              href="/privacy"
              className="text-xs text-[var(--muted)] hover:text-white transition-colors"
            >
              Privacy
            </Link>
          </li>
          <li>
            <Link
              href="#support"
              className="text-xs text-[var(--muted)] hover:text-white transition-colors"
            >
              Support
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
