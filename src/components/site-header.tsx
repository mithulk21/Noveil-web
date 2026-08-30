"use client"

import { useRef } from "react"

import { Wordmark } from "@/components/wordmark"
import { useScrollDriver } from "@/hooks/use-scroll-driver"
import { Button } from "@/components/ui/button"

/** Slides in once the hero has been scrolled past. */
export function SiteHeader() {
  const ref = useRef<HTMLElement>(null)

  useScrollDriver((y) => {
    const node = ref.current
    if (!node) return
    const visible = y > window.innerHeight * 0.55
    node.style.opacity = visible ? "1" : "0"
    node.style.transform = visible ? "translateY(0)" : "translateY(-100%)"
    node.inert = !visible
  })

  return (
    <header
      ref={ref}
      className="fixed inset-x-0 top-0 z-40 -translate-y-full opacity-0 transition-[opacity,transform] duration-500 ease-[cubic-bezier(.16,1,.3,1)]"
    >
      <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-4 px-[26px] py-[22px]">
        <a href="#top" className="relative flex items-center" aria-label="Noveil — back to top">
          <Wordmark width={120} className="h-[19px] w-auto" />
        </a>
        <Button
          asChild
          variant="ghost"
          className="font-ui h-auto gap-2.5 px-0.5 py-2 text-[13px]/none font-medium tracking-[0.06em] uppercase transition-opacity hover:bg-transparent hover:opacity-70"
        >
          <a href="#listen">
            <PlayGlyph className="size-[13px]" />
            Listen
          </a>
        </Button>
      </div>
    </header>
  )
}

export function PlayGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M8 5l11 7-11 7z" />
    </svg>
  )
}
