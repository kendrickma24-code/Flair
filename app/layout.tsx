import type { Metadata, Viewport } from "next"
import { Inter, Orbitron } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Flair — Add some FLAIR to your travel",
  description: "Share flights with friends. See who's flying your route. Build your travel story — one flight at a time.",
}

export const viewport: Viewport = {
  themeColor: "#080C14",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} bg-background`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
