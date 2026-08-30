# Noveil

One-page site for the Noveil single, built from the Claude Design handoff
(`Noveil Site.dc.html`) in Next.js 16 (App Router) + Tailwind v4 + shadcn/ui.

## Run

```bash
npm install
npm run dev
```

## How it's put together

| Piece | File |
| --- | --- |
| Page composition | `src/app/page.tsx` |
| Brand tokens, keyframes, grain utilities | `src/app/globals.css` |
| Fonts + metadata | `src/app/layout.tsx` |
| Animated WebGL backdrop | `src/components/grain-background.tsx` |
| Load-in wordmark curtain | `src/components/intro-overlay.tsx` |
| Scroll-in nav | `src/components/site-header.tsx` |
| Hero + dissolve-on-scroll wordmark | `src/components/hero.tsx` |
| Cover art + spinning vinyl | `src/components/release-artwork.tsx` |
| Streaming list | `src/components/listen-links.tsx` |
| Streaming/social URLs | `src/lib/site.ts` |

The palette is a single orange theme — shadcn's tokens are remapped onto it in
`globals.css`, so `Button` and friends inherit the brand rather than fight it.
There is deliberately no dark mode.

## Before launch

- **Streaming URLs are placeholders.** Every entry in `src/lib/site.ts` points at
  `#listen`. Swap in the real release links there.
- **Amazon Music uses a generic note glyph.** simple-icons no longer ships an
  Amazon mark, so `listen-links.tsx` falls back to a lucide icon for that row.
- `metadataBase` in `src/app/layout.tsx` is set to `https://noveil.example` —
  point it at the real domain so Open Graph image URLs resolve.
