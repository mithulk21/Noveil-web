"use client"

import { useEffect, useRef, type ReactNode } from "react"

import { cn } from "@/lib/utils"

/**
 * Fades and lifts its children in the first time they enter the viewport, and
 * marks itself `data-revealed` so descendants can hang their own entrance
 * animations off `group-data-[revealed]/reveal:`.
 */
export function Reveal({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const show = () => {
      node.style.opacity = "1"
      node.style.transform = "translateY(0)"
      node.dataset.revealed = "true"
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          show()
          observer.disconnect()
        }
      },
      { rootMargin: "0px 0px -12% 0px" }
    )
    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        "group/reveal translate-y-10 opacity-0 transition-[opacity,transform] duration-1000 ease-[cubic-bezier(.16,1,.3,1)]",
        className
      )}
    >
      {children}
    </div>
  )
}
