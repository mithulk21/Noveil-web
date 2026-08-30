import { GrainBackground } from "@/components/grain-background"
import { Hero } from "@/components/hero"
import { ListenLinks } from "@/components/listen-links"
import { ReleaseArtwork } from "@/components/release-artwork"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import {
  ARTIST,
  RELEASE_TITLE,
  SITE_URL,
  TAGLINE,
  socialLinks,
  streamingLinks,
} from "@/lib/site"

// Tells search engines this page is a music release rather than a generic site,
// which is what earns the rich result with cover art and streaming links.
const structuredData = {
  "@context": "https://schema.org",
  "@type": "MusicRecording",
  name: RELEASE_TITLE,
  description: TAGLINE,
  url: SITE_URL,
  image: `${SITE_URL}/assets/album-art.png`,
  byArtist: {
    "@type": "MusicGroup",
    name: ARTIST,
    url: SITE_URL,
    sameAs: socialLinks.map((link) => link.href),
  },
  offers: streamingLinks.map((link) => ({
    "@type": "Offer",
    category: "stream",
    url: link.href,
    seller: { "@type": "Organization", name: link.name },
  })),
}

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <GrainBackground />
      <SiteHeader />

      <main id="top" className="relative z-10">
        <Hero />
        <ReleaseArtwork />
        <ListenLinks />
        <SiteFooter />
      </main>
    </div>
  )
}
