import Link from "next/link"

import { BrandIcon } from "@/components/icons/brand-icon"
import { Wordmark } from "@/components/wordmark"
import { ARTIST, socialLinks } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="px-6 pb-14">
      <div className="mx-auto flex max-w-[1080px] flex-wrap items-center justify-between gap-[18px] border-t border-white/20 pt-[26px]">
        <div className="relative">
          <Wordmark width={120} className="h-[18px] w-auto opacity-90" />
        </div>
        <nav className="flex gap-5 text-[13px]/none text-white/75">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${ARTIST} on ${link.name}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <BrandIcon name={link.icon} className="size-[15px] shrink-0" />
              {link.handle}
            </Link>
          ))}
        </nav>
        <p className="text-xs/none text-white/60">© 2026 {ARTIST}</p>
      </div>
    </footer>
  )
}
