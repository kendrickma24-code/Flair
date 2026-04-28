import Link from "next/link"
import { StarLogo } from "./star-logo"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 md:px-10 py-6 flex items-center justify-between flex-wrap gap-4">
      <Link
        href="/"
        className="flex items-center gap-2 font-display font-extrabold text-base text-foreground"
      >
        <StarLogo size={18} id="footer-star" />
        Flair
      </Link>
      <p className="text-xs text-muted-foreground">
        © 2026 Flair. All rights reserved.
      </p>
      <nav>
        <ul className="flex gap-6">
          <li>
            <Link href="/privacy" className="text-xs text-muted hover:text-foreground transition-colors">
              Privacy
            </Link>
          </li>
          <li>
            <Link href="#support" className="text-xs text-muted hover:text-foreground transition-colors">
              Support
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  )
}
