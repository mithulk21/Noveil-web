"use client"

import { useEffect, useState } from "react"

import { Wordmark } from "@/components/wordmark"
import { releaseTagline } from "@/lib/site"

const HOLD_MS = 2300
const FADE_MS = 900

/**
 * The full-screen wordmark curtain that plays once on load, then fades away and
 * unmounts. Anyone who has asked for reduced motion never sees it.
 */
export function IntroOverlay() {
  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const timer = window.setTimeout(
      () => setMounted(false),
      reduced ? 0 : HOLD_MS + FADE_MS
    )
    return () => window.clearTimeout(timer)
  }, [])

  if (!mounted) return null

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[60] flex items-center justify-center bg-linear-[149deg,#ff730f,#fc9b25] [background-size:120%_120%] [animation:nv-gradient_8s_ease_infinite,nv-out_.9s_cubic-bezier(.4,0,.2,1)_2.3s_forwards]"
    >
      <div className="relative w-[min(54vw,540px)] [animation:nv-zoomin_2s_cubic-bezier(.16,1,.3,1)_.1s_both]">
        <Wordmark
          priority
          width={540}
          grainClassName="[animation:nv-grain_1.1s_steps(1,end)_infinite,nv-noise-out_2s_ease_.1s_both]"
        />
      </div>
      <p className="font-ui absolute inset-x-0 bottom-11 text-center text-[11px]/none font-medium tracking-[0.34em] text-white/70 uppercase [animation:nv-fadeup_.8s_ease_1.5s_both]">
        {releaseTagline}
      </p>
    </div>
  )
}
