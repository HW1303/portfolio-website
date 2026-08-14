import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export default function ImpressumPage() {
  return (
    <>
      <SiteHeader />

      <main className="section-light min-h-[70vh]">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Zurück zur Startseite
          </Link>

          <h1 className="mt-10 font-serif text-4xl font-semibold tracking-tight text-foreground">
            Impressum
          </h1>

          <div className="mt-8 space-y-8 text-base leading-7 text-muted-foreground">
            <section>
              <h2 className="font-semibold text-foreground">
                Angaben gemäß § 18 Abs. 1 MStV
              </h2>

              <p className="mt-3">
                Hauke Werner
                <br />
                Jakobstraße 39B
                <br />
                95447, Bayreuth
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-foreground">Kontakt</h2>

              <p className="mt-3">
                E-Mail:{' '}
                <a
                  href="mailto:hauke.werner@gmx.net"
                  className="underline underline-offset-4 hover:text-foreground"
                >
                  hauke.werner@gmx.net
                </a>
                <br />
                Telefon:{' '}
                <a
                  href="tel:+491794178724"
                  className="underline underline-offset-4 hover:text-foreground"
                >
                  +49 179 4178724
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  )
}