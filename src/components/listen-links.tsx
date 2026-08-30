import Link from "next/link"
import { Music } from "lucide-react"

import { BrandIcon } from "@/components/icons/brand-icon"
import { Reveal } from "@/components/reveal"
import { Rule } from "@/components/rule"
import { Button } from "@/components/ui/button"
import { streamingLinks } from "@/lib/site"

// The frame traces itself: left-to-right across the top, down the right edge,
// back along the bottom, then up the left — one continuous stroke.
const FRAME = [
  { axis: "x", origin: "left", delay: 0, duration: 450, className: "inset-x-0 top-0" },
  { axis: "y", origin: "top", delay: 420, duration: 550, className: "inset-y-0 right-0" },
  { axis: "x", origin: "right", delay: 940, duration: 450, className: "inset-x-0 bottom-0" },
  { axis: "y", origin: "bottom", delay: 1360, duration: 550, className: "inset-y-0 left-0" },
] as const

const DIVIDER_START = 500
const DIVIDER_STAGGER = 70

/**
 * One bordered stack of streaming destinations. Every rule is drawn on rather
 * than simply faded in, so the list assembles itself as you reach it. Each row
 * inverts to white on hover, the only "filled" state anywhere on the page.
 */
export function ListenLinks() {
  return (
    <section id="listen" className="scroll-mt-25 px-6 pb-30">
      <Reveal className="mx-auto max-w-[520px]">
        <h2 className="font-heading mb-[22px] text-center text-[clamp(28px,3.4vw,40px)]/none font-extrabold tracking-[-0.02em]">
          Listen on
        </h2>

        <div className="relative flex flex-col">
          {FRAME.map((line) => (
            <Rule key={line.className} {...line} />
          ))}

          {streamingLinks.map((link, index) => (
            <div key={link.name} className="relative">
              {index > 0 ? (
                <Rule
                  axis="x"
                  origin="left"
                  delay={DIVIDER_START + index * DIVIDER_STAGGER}
                  duration={500}
                  className="inset-x-0 top-0"
                />
              ) : null}
              <Button
                asChild
                variant="ghost"
                className="h-auto w-full justify-center gap-3 px-6 py-5 transition-colors duration-250 hover:bg-white hover:text-[#ff730f]"
              >
                <Link href={link.href}>
                  {link.icon ? (
                    <BrandIcon name={link.icon} className="size-[22px] shrink-0" />
                  ) : (
                    <Music className="size-[22px] shrink-0" strokeWidth={1.75} />
                  )}
                  <span className="font-ui text-[17px]/none font-medium tracking-[0.02em]">
                    {link.name}
                  </span>
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
