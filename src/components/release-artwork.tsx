"use client"

import Image from "next/image"
import { useRef } from "react"

import { Reveal } from "@/components/reveal"
import { useScrollDriver } from "@/hooks/use-scroll-driver"

/**
 * The cover, with a spinning record sliding out from behind it. The vinyl eases
 * further out of its sleeve as the section rises up the viewport.
 */
export function ReleaseArtwork() {
  const vinylRef = useRef<HTMLDivElement>(null)

  useScrollDriver((y) => {
    const vinyl = vinylRef.current
    if (!vinyl) return
    vinyl.style.marginRight = `${Math.min(0, (window.innerHeight - y) * -0.06)}px`
  })

  return (
    <section id="release" className="scroll-mt-25 px-6 pt-5 pb-[70px]">
      <Reveal className="mx-auto max-w-[520px]">
        <div className="relative">
          <div
            ref={vinylRef}
            aria-hidden="true"
            className="absolute top-[9%] -right-[14%] aspect-square w-[76%] rounded-full bg-[repeating-radial-gradient(circle_at_50%_50%,#1b3a8f_0_2px,#16307a_2px_4px)] shadow-[0_30px_60px_-20px_rgba(0,0,0,.65)] [animation:nv-spin_14s_linear_infinite]"
          >
            <div className="absolute inset-[38%] rounded-full bg-[#f5f1ec]" />
            <div className="absolute inset-[47.5%] rounded-full bg-[#16307a]" />
          </div>
          <Image
            src="/assets/album-art.png"
            alt="Noveil album art"
            width={1400}
            height={1400}
            sizes="(max-width: 568px) 100vw, 520px"
            className="relative block w-full shadow-[0_50px_100px_-35px_rgba(0,0,0,.8)]"
          />
        </div>
      </Reveal>
    </section>
  )
}
