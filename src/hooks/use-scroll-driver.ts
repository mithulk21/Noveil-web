"use client"

import { useEffect, useRef } from "react"

/**
 * Runs `onScroll(scrollY)` on scroll and resize. Callers write to DOM refs
 * directly rather than through state, so a scroll never triggers a React
 * render. Scroll events already fire at most once per frame, so no extra
 * rAF coalescing is needed — and skipping it keeps the handler correct in
 * backgrounded tabs, where rAF is suspended.
 */
export function useScrollDriver(onScroll: (scrollY: number) => void) {
  const callback = useRef(onScroll)

  // Kept fresh every render so the listener below can stay mounted for the
  // lifetime of the component.
  useEffect(() => {
    callback.current = onScroll
  })

  useEffect(() => {
    const handler = () => callback.current(window.scrollY)

    window.addEventListener("scroll", handler, { passive: true })
    window.addEventListener("resize", handler)
    handler()

    return () => {
      window.removeEventListener("scroll", handler)
      window.removeEventListener("resize", handler)
    }
  }, [])
}
