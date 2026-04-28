import Link from "next/link"
import { StarLogo } from "./star-logo"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 bg-background/85 backdrop-blur-xl border-b border-border">
      <Link href="/" className="flex items-center gap-2 font-display font-extrabold text-xl text-foreground tracking-tight">
        <StarLogo size={22} />
        Flair
      </Link>
      <ul className="hidden md:flex items-center gap-8">
        <li>
          <Link href="/#features" className="text-sm text-muted hover:text-foreground transition-colors">
            Features
          </Link>
        </li>
        <li>
          <Link href="/privacy" className="text-sm text-muted hover:text-foreground transition-colors">
            Privacy
          </Link>
        </li>
        <li>
          <Link href="/#support" className="text-sm text-muted hover:text-foreground transition-colors">
            Support
          </Link>
        </li>
      </ul>
      <Link
        href="/#support"
        className="grad-bg text-foreground text-sm font-medium px-5 py-2 rounded-full hover:opacity-80 transition-opacity"
      >
        Get notified
      </Link>
    </nav>
  )
}
