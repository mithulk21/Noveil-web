import { readFileSync } from "node:fs"
import { join } from "node:path"

import { ImageResponse } from "next/og"

import { ARTIST } from "@/lib/site"

export const alt = ARTIST
export const size = { width: 1200, height: 1200 }
export const contentType = "image/png"

/**
 * The link-preview thumbnail: the wordmark centred on the brand orange. Built
 * from the same SVG the site uses, so it can never drift from the live logo.
 */
export default async function Image() {
  const wordmark = readFileSync(
    join(process.cwd(), "public/assets/noveil-wordmark.svg")
  ).toString("base64")

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ff730f",
          backgroundImage:
            "radial-gradient(circle at 30% 25%, #ff9a2e 0%, #ff730f 55%, #f26708 100%)",
        }}
      >
        <img
          src={`data:image/svg+xml;base64,${wordmark}`}
          width={780}
          height={235}
          alt={ARTIST}
        />
      </div>
    ),
    size
  )
}
