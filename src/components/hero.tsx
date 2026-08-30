"use client"

import Link from "next/link"
import { useRef } from "react"

import { Button } from "@/components/ui/button"
import { PlayGlyph } from "@/components/site-header"
import { Wordmark } from "@/components/wordmark"
import { useScrollDriver } from "@/hooks/use-scroll-driver"

/**
 * Full-height wordmark that dissolves as you scroll: it drifts up, shrinks,
 * blurs and gains grain, so leaving the hero feels like the print degrading.
 */
export function Hero() {
  const titleRef = useRef<HTMLDivElement>(null)
  const grainRef = useRef<HTMLDivElement>(null)

  useScrollDriver((y) => {
    const title = titleRef.current
    const grain = grainRef.current
    if (!title) return

    // At rest, hand control back to the CSS entrance animation.
    if (y < 2) {
      title.style.removeProperty("transform")
      title.style.removeProperty("opacity")
      title.style.removeProperty("filter")
      grain?.style.removeProperty("opacity")
      return
    }

    const p = Math.min(1, Math.max(0, y / (window.innerHeight * 0.85)))
    title.style.transform = `translateY(${-y * 0.34}px) scale(${1 - p * 0.08})`
    title.style.opacity = String(1 - p * 0.92)
    title.style.filter = `blur(${(p * 16).toFixed(2)}px) contrast(${(1 + p * 1.1).toFixed(2)})`
    if (grain) grain.style.opacity = String(0.35 + p * 0.65)
  })

  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-30 pb-[90px] text-center">
      <div
        ref={titleRef}
        className="relative w-[min(64vw,600px)] [animation:nv-grainy-in_1.7s_cubic-bezier(.16,1,.3,1)_2.75s_both] [will-change:transform,filter,opacity]"
      >
        <Wordmark priority width={600} />
        <div
          ref={grainRef}
          aria-hidden="true"
          className="nv-noise-fine nv-wordmark-mask absolute inset-0 opacity-35 [animation:nv-grain_1.1s_steps(1,end)_infinite]"
        />
      </div>

      <div className="mt-11 [animation:nv-fadeup_1s_cubic-bezier(.16,1,.3,1)_3.15s_both]">
        <Button
          asChild
          variant="ghost"
          className="font-ui h-auto gap-2.5 border border-white/0 px-[30px] py-[17px] text-sm/none font-medium tracking-[0.06em] uppercase transition-[background-color,color,border-color] duration-250 hover:border-white hover:bg-white hover:text-[#ff730f]"
        >
          <Link href="#listen">
            <PlayGlyph className="size-[15px]" />
            Listen now
          </Link>
        </Button>
      </div>
    </section>
  )
}
