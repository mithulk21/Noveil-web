import type { BrandName } from "@/components/icons/brand-icon"

export type StreamingLink = {
  name: string
  href: string
  icon: BrandName | null
}

/**
 * Streaming destinations, in the order the design lists them. `href` is a
 * placeholder until the real release URLs exist — swap them in here and nothing
 * else needs to change.
 */
export const streamingLinks: StreamingLink[] = [
  { name: "Spotify", href: "#listen", icon: "spotify" },
  { name: "Apple Music", href: "#listen", icon: "appleMusic" },
  { name: "YouTube Music", href: "#listen", icon: "youtubeMusic" },
  { name: "Amazon Music", href: "#listen", icon: null },
  { name: "Tidal", href: "#listen", icon: "tidal" },
  { name: "SoundCloud", href: "#listen", icon: "soundcloud" },
  { name: "Deezer", href: "#listen", icon: "deezer" },
  { name: "Bandcamp", href: "#listen", icon: "bandcamp" },
]

export const socialLinks = [
  { name: "Instagram", href: "#top" },
]

export const releaseTagline = "New single · 2026"
