import { GrainBackground } from "@/components/grain-background"
import { Hero } from "@/components/hero"
import { IntroOverlay } from "@/components/intro-overlay"
import { ListenLinks } from "@/components/listen-links"
import { ReleaseArtwork } from "@/components/release-artwork"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <GrainBackground />
      <IntroOverlay />
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
