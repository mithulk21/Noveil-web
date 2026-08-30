import Image from "next/image"

import { cn } from "@/lib/utils"

/**
 * The Noveil wordmark with an optional grain layer masked to its own silhouette
 * — the texture that makes the logo read as printed rather than vector.
 */
export function Wordmark({
  className,
  grainClassName,
  grainOpacity,
  priority = false,
  width = 600,
}: {
  className?: string
  grainClassName?: string
  grainOpacity?: number
  priority?: boolean
  width?: number
}) {
  return (
    <>
      <Image
        src="/assets/noveil-wordmark.svg"
        alt="Noveil"
        width={width}
        height={Math.round((width * 127.3) / 423.35)}
        priority={priority}
        className={cn("block w-full", className)}
      />
      {grainClassName !== undefined || grainOpacity !== undefined ? (
        <div
          aria-hidden="true"
          className={cn(
            "nv-noise-fine nv-wordmark-mask absolute inset-0",
            grainClassName
          )}
          style={grainOpacity !== undefined ? { opacity: grainOpacity } : undefined}
        />
      ) : null}
    </>
  )
}
