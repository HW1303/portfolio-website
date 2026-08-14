import { Mail, Phone } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-primary/80 bg-primary">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-2 px-6 py-8 text-sm text-primary-foreground/80 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <p>© {new Date().getFullYear()} Hauke Werner</p>

        <div className="flex items-center gap-5">
          <a
            href="mailto:hauke.werner@gmx.net"
            className="inline-flex items-center gap-2 transition-colors hover:text-primary-foreground"
          >
            <Mail className="size-4" aria-hidden="true" />
            E-Mail
          </a>

          <a
            href="https://wa.me/491794178724"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-primary-foreground"
          >
            <Phone className="size-4" aria-hidden="true" />
            +49 179 4178724
          </a>
        </div>
      </div>
    </footer>
  )
}