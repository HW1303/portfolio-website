import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-primary/80 bg-primary sm:mt-20 lg:mt-24 2xl:mt-28">
      <div className="flex w-full flex-col gap-5 px-5 py-7 text-sm text-primary-foreground/80 sm:px-6 sm:py-8 md:flex-row md:items-center md:justify-between lg:px-10 2xl:px-12 2xl:py-10 2xl:text-base">
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 md:justify-start 2xl:gap-x-7">
          <p className="w-full text-center md:w-auto md:text-left">
            © {new Date().getFullYear()} Hauke Werner
          </p>

          <Link
            href="/impressum"
            className="transition-colors hover:text-primary-foreground"
          >
            Impressum
          </Link>

          <Link
            href="/datenschutz"
            className="transition-colors hover:text-primary-foreground"
          >
            Datenschutz
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 md:justify-end 2xl:gap-x-7">
          <a
            href="mailto:hauke.werner@gmx.net"
            className="inline-flex items-center gap-2 transition-colors hover:text-primary-foreground"
          >
            <Mail
              className="size-4 shrink-0 2xl:size-5"
              aria-hidden="true"
            />
            E-Mail
          </a>

          <a
            href="https://wa.me/491794178724"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-primary-foreground"
          >
            <Phone
              className="size-4 shrink-0 2xl:size-5"
              aria-hidden="true"
            />
            +49 179 4178724
          </a>
        </div>
      </div>
    </footer>
  )
}