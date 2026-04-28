import type { Metadata, Viewport } from "next"
import { Inter, Syne } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["700", "800"],
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
    <html lang="en" className={`${inter.variable} ${syne.variable} bg-background`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
