import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export default function DatenschutzPage() {
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
            Datenschutzerklärung
          </h1>

          <div className="mt-10 space-y-10 text-base leading-7 text-muted-foreground">
            {/* Verantwortlicher */}
            <section>
              <h2 className="text-xl font-semibold text-foreground">
                1. Verantwortlicher
              </h2>

              <p className="mt-3">
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              </p>

              <p className="mt-3">
                Hauke Werner
                <br />
                Jakobstraße 39B
                <br />
                95447, Bayreuth
                <br />
                Deutschland
              </p>

              <p className="mt-3">
                E-Mail:{' '}
                <a
                  href="mailto:hauke.werner@gmx.net"
                  className="underline underline-offset-4 hover:text-foreground"
                >
                  hauke.werner@gmx.net
                </a>
              </p>
            </section>

            {/* Allgemeines */}
            <section>
              <h2 className="text-xl font-semibold text-foreground">
                2. Allgemeine Hinweise
              </h2>

              <p className="mt-3">
                Beim Besuch dieser Website können technisch erforderliche Daten
                verarbeitet werden. Dazu können insbesondere IP-Adresse,
                Browsertyp, Betriebssystem, aufgerufene Seiten sowie Zeitpunkt
                des Zugriffs gehören.
              </p>

              <p className="mt-3">
                Die Verarbeitung erfolgt, soweit erforderlich, zur sicheren und
                zuverlässigen Bereitstellung der Website auf Grundlage von Art.
                6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt im
                sicheren und funktionsfähigen Betrieb dieser Website.
              </p>
            </section>

            {/* Hosting */}
            <section>
              <h2 className="text-xl font-semibold text-foreground">
                3. Hosting über Vercel
              </h2>

              <p className="mt-3">
                Diese Website wird über Vercel bereitgestellt. Beim Aufruf der
                Website werden technisch notwendige Verbindungsdaten an die
                Infrastruktur von Vercel übertragen, damit die Inhalte
                ausgeliefert und die Sicherheit der Website gewährleistet
                werden können.
              </p>

              <p className="mt-3">
                Anbieter ist Vercel Inc., USA.
              </p>

              <p className="mt-3">
                Weitere Informationen zum Datenschutz bei Vercel finden Sie in
                der{' '}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 hover:text-foreground"
                >
                  Datenschutzerklärung von Vercel
                </a>
                .
              </p>
            </section>

            {/* Vercel Analytics */}
            <section>
              <h2 className="text-xl font-semibold text-foreground">
                4. Vercel Web Analytics
              </h2>

              <p className="mt-3">
                Auf dieser Website wird Vercel Web Analytics eingesetzt, um
                grundlegende Informationen über die Nutzung der Website zu
                erhalten und deren technische und inhaltliche Qualität zu
                verbessern.
              </p>

              <p className="mt-3">
                Nach Angaben von Vercel verwendet Web Analytics keine
                Drittanbieter-Cookies und speichert anonymisierte
                Nutzungsdaten.
              </p>

              <p className="mt-3">
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte
                Interesse liegt in der Analyse und Verbesserung der Website.
              </p>

              <p className="mt-3">
                Weitere Informationen finden Sie in den{' '}
                <a
                  href="https://vercel.com/docs/analytics/privacy-policy"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 hover:text-foreground"
                >
                  Datenschutzhinweisen zu Vercel Web Analytics
                </a>
                .
              </p>
            </section>

            {/* YouTube */}
            <section>
              <h2 className="text-xl font-semibold text-foreground">
                5. Eingebettete YouTube-Videos
              </h2>

              <p className="mt-3">
                Auf der Projektseite sind Videos der Plattform YouTube
                eingebettet. Die Einbindung erfolgt über die Domain
                youtube-nocookie.com im erweiterten Datenschutzmodus.
              </p>

              <p className="mt-3">
                Beim Laden eines eingebetteten Videos wird eine Verbindung zu
                Servern von YouTube beziehungsweise Google hergestellt. Dabei
                können technische Informationen wie die IP-Adresse, Browser-
                und Geräteinformationen sowie Informationen über den
                Seitenaufruf verarbeitet werden.
              </p>

              <p className="mt-3">
                Wenn Sie gleichzeitig bei einem Google- oder YouTube-Konto
                angemeldet sind, können weitere Verarbeitungen durch Google
                erfolgen. Auf Umfang und weitere Verwendung dieser Daten durch
                Google habe ich keinen Einfluss.
              </p>

              <p className="mt-3">
                Weitere Informationen finden Sie in der{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 hover:text-foreground"
                >
                  Datenschutzerklärung von Google
                </a>
                .
              </p>
            </section>

            {/* Kontakt */}
            <section>
              <h2 className="text-xl font-semibold text-foreground">
                6. Kontaktaufnahme
              </h2>

              <p className="mt-3">
                Wenn Sie mich per E-Mail oder über die angegebenen
                Kontaktmöglichkeiten kontaktieren, werden die von Ihnen
                übermittelten Angaben zur Bearbeitung Ihrer Anfrage
                verarbeitet.
              </p>

              <p className="mt-3">
                Rechtsgrundlage ist je nach Inhalt der Anfrage Art. 6 Abs. 1
                lit. b DSGVO oder Art. 6 Abs. 1 lit. f DSGVO.
              </p>
            </section>

            {/* Rechte */}
            <section>
              <h2 className="text-xl font-semibold text-foreground">
                7. Ihre Rechte
              </h2>

              <p className="mt-3">
                Ihnen stehen im Rahmen der gesetzlichen Voraussetzungen
                insbesondere Rechte auf Auskunft, Berichtigung, Löschung,
                Einschränkung der Verarbeitung, Datenübertragbarkeit und
                Widerspruch zu.
              </p>

              <p className="mt-3">
                Darüber hinaus besteht das Recht, sich bei einer zuständigen
                Datenschutzaufsichtsbehörde zu beschweren.
              </p>
            </section>

            {/* Stand */}
            <section>
              <h2 className="text-xl font-semibold text-foreground">
                8. Stand der Datenschutzerklärung
              </h2>

              <p className="mt-3">Stand: August 2026</p>
            </section>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  )
}