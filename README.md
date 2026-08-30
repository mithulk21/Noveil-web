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
| Scroll-in nav | `src/components/site-header.tsx` |
| Hero + dissolve-on-scroll wordmark | `src/components/hero.tsx` |
| Cover art + spinning vinyl | `src/components/release-artwork.tsx` |
| Streaming list | `src/components/listen-links.tsx` |
| Streaming/social URLs, title, tagline | `src/lib/site.ts` |
| SEO metadata | `src/app/layout.tsx`, `src/app/robots.ts`, `src/app/sitemap.ts` |
| Link-preview thumbnail | `src/app/opengraph-image.tsx` (generated, 1200×1200) |
| `/listen` shortlink | `src/app/listen/page.tsx` |

The palette is a single orange theme — shadcn's tokens are remapped onto it in
`globals.css`, so `Button` and friends inherit the brand rather than fight it.
There is deliberately no dark mode.

Everything editable — release title, tagline, streaming URLs, socials, and the
canonical domain — lives in `src/lib/site.ts`; metadata and structured data are
derived from it.

## Before launch

- **Amazon Music uses a generic note glyph.** simple-icons no longer ships an
  Amazon mark, so `listen-links.tsx` falls back to a lucide icon for that row.
  Drop a real SVG into `src/components/icons/brand-icon.tsx` to replace it.
- The release title is set to **Your Name**, inferred from the Apple Music URL
  slug. Correct `RELEASE_TITLE` in `src/lib/site.ts` if that's wrong.
- `SITE_URL` is `https://noveilmusic.com`. Open Graph images, the canonical
  link, `robots.txt`, and `sitemap.xml` all resolve against it.

## Deploy

Vercel, from the GitHub repo, serving `noveilmusic.com`. No environment
variables and no build configuration are needed — Vercel detects Next.js and
runs `npm ci && npm run build`.

If the domain ever changes, update `SITE_URL` in `src/lib/site.ts`; the
canonical link, Open Graph URLs, `robots.txt` and `sitemap.xml` all derive
from it.
