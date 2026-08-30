import type { Metadata, Viewport } from "next"
import { Archivo, DM_Sans, Inter } from "next/font/google"

import "./globals.css"

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
})

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["800"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://noveil.example"),
  title: "Noveil — New single, 2026",
  description:
    "Noveil. New single out now. Listen on Spotify, Apple Music, YouTube Music, Tidal and more.",
  openGraph: {
    title: "Noveil — New single, 2026",
    description: "Noveil. New single out now.",
    images: ["/assets/album-art.png"],
    type: "music.song",
  },
}

export const viewport: Viewport = {
  themeColor: "#ff730f",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${inter.variable} ${archivo.variable} h-full`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  )
}
