'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-transparent bg-transparent'
          : 'border-b border-primary/80 bg-primary'
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-5 py-4 sm:px-6 sm:py-5 lg:px-10">
        <Link
          href="/"
          className={`shrink-0 font-serif text-sm font-semibold tracking-tight transition-colors duration-300 sm:text-base ${
            scrolled
              ? 'text-foreground'
              : 'text-primary-foreground'
          }`}
        >
          Portfolio Website
        </Link>

        <nav
          aria-label="Hauptnavigation"
          className="flex items-center gap-4 text-xs sm:gap-6 sm:text-sm lg:gap-8"
        >
          <Link
            href="/#projekte"
            className={`transition-colors duration-300 ${
              scrolled
                ? 'text-muted-foreground hover:text-foreground'
                : 'text-primary-foreground/80 hover:text-primary-foreground'
            }`}
          >
            Projekte
          </Link>

          <Link
            href="/#kontakt"
            className={`transition-colors duration-300 ${
              scrolled
                ? 'text-muted-foreground hover:text-foreground'
                : 'text-primary-foreground/80 hover:text-primary-foreground'
            }`}
          >
            Kontakt
          </Link>
        </nav>
      </div>
    </header>
  )
}