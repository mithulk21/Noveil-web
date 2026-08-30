import Link from "next/link"

import { Wordmark } from "@/components/wordmark"
import { socialLinks } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="px-6 pb-14">
      <div className="mx-auto flex max-w-[1080px] flex-wrap items-center justify-between gap-[18px] border-t border-white/20 pt-[26px]">
        <div className="relative">
          <Wordmark width={120} className="h-[18px] w-auto opacity-90" />
        </div>
        <nav className="flex gap-5 text-[13px]/none text-white/75">
          {socialLinks.map((link) => (
            <Link key={link.name} href={link.href} className="transition-colors hover:text-white">
              {link.name}
            </Link>
          ))}
        </nav>
        <p className="text-xs/none text-white/60">© 2026 Noveil</p>
      </div>
    </footer>
  )
}
