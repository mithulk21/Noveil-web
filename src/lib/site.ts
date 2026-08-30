import type { BrandName } from "@/components/icons/brand-icon"

export const SITE_URL = "https://noveilmusic.com"

export const ARTIST = "Noveil"
export const RELEASE_TITLE = "Your Name"
export const TAGLINE = "Do the impossible for that 1 person."

export type StreamingLink = {
  name: string
  href: string
  /** `null` falls back to a generic note glyph — see `listen-links.tsx`. */
  icon: BrandName | null
}

/** Streaming destinations, in the order they appear on the page. */
export const streamingLinks: StreamingLink[] = [
  {
    name: "Spotify",
    href: "https://open.spotify.com/track/4hAMRV5NWQ5gGLAh7ayMVD?si=d91c3ee9cc20486b",
    icon: "spotify",
  },
  {
    name: "Apple Music",
    href: "https://music.apple.com/us/album/your-name-single/6806304681",
    icon: "appleMusic",
  },
  {
    name: "YouTube Music",
    href: "https://music.youtube.com/watch?v=N_q5KHA51qw&si=aDO2ZNHHZ2PL3cFO",
    icon: "youtubeMusic",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/watch?v=N_q5KHA51qw&list=RDN_q5KHA51qw&start_radio=1",
    icon: "youtube",
  },
  {
    name: "Amazon Music",
    href: "https://amazon.com/music/player/albums/B0HGYVNZYB?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_oobICCTiBMUFnnLWeiEQdnX7I",
    icon: null,
  },
  {
    name: "Tidal",
    href: "https://tidal.com/track/556430668/u",
    icon: "tidal",
  },
]

export const socialLinks = [
  {
    name: "Instagram",
    handle: "noveil.music",
    href: "https://www.instagram.com/noveil.music",
    icon: "instagram" as BrandName,
  },
]
