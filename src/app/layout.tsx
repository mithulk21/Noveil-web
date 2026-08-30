import type { Metadata, Viewport } from "next"
import { Archivo, DM_Sans, Inter } from "next/font/google"

import { ARTIST, RELEASE_TITLE, SITE_URL, TAGLINE } from "@/lib/site"
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

const TITLE = `${ARTIST} — ${RELEASE_TITLE}`
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s — ${ARTIST}`,
  },
  description: TAGLINE,
  applicationName: ARTIST,
  keywords: [
    ARTIST,
    `${ARTIST} music`,
    `${ARTIST} ${RELEASE_TITLE}`,
    RELEASE_TITLE,
    "new single",
    "listen",
    "streaming",
  ],
  authors: [{ name: ARTIST, url: SITE_URL }],
  creator: ARTIST,
  publisher: ARTIST,
  alternates: { canonical: "/" },
  openGraph: {
    type: "music.song",
    siteName: ARTIST,
    url: SITE_URL,
    title: TITLE,
    description: TAGLINE,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: TAGLINE,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
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
