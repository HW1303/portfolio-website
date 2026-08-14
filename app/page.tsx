import Link from 'next/link'
import Image from 'next/image'
import { Download, Mail, Phone } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ProjectCard } from '@/components/project-card'
import { projects } from '@/lib/projects'

const unterstuetzung = [
  {
    nummer: '01',
    titel: 'Prozesse analysieren & modellieren',
    text: 'Den Ist-Zustand aufnehmen, Schwachstellen erkennen und konkretes Automatisierungspotenzial herausarbeiten.',
    tags: ['Prozessanalyse', 'BPMN'],
  },
  {
    nummer: '02',
    titel: 'Automatisierungen bauen',
    text: 'Wiederkehrende Abläufe technisch umsetzen – von der Datenextraktion und Verarbeitung bis zur Benachrichtigung.',
    tags: ['n8n', 'SQL', 'Python'],
  },
  {
    nummer: '03',
    titel: 'Wirtschaftlich bewerten',
    text: 'Zeitaufwand, Fehlerquellen und Kosten betrachten, damit nachvollziehbar wird, ob sich eine Automatisierung lohnt.',
    tags: ['Zeit', 'Fehler', 'Kosten'],
  },
  {
    nummer: '04',
    titel: 'Im Tagesgeschäft mit anpacken',
    text: 'Auch wiederkehrende Aufgaben und Datenpflege übernehmen, damit das Team bei operativen Tätigkeiten entlastet wird.',
    tags: ['Datenpflege', 'Operative Unterstützung'],
  },
]

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main className="w-full">
        {/* Hero */}
        <section className="section-light">
          <div className="mx-auto w-full max-w-[1400px] px-6 pt-24 pb-36 text-center sm:pt-32 sm:pb-44 lg:px-10">
            <p className="text-sm font-medium tracking-wide text-primary sm:text-base">
              BWL-Student · Universität Bayreuth · Prozessanalyse &amp;
              -automatisierung
            </p>

            <h1 className="mx-auto mt-5 max-w-5xl font-serif text-5xl font-semibold leading-tight tracking-tight text-foreground sm:text-7xl">
              Hauke Werner
            </h1>

            <p className="mx-auto mt-3 max-w-5xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Ich verbinde betriebswirtschaftliches Prozessverständnis mit Daten und technischer Umsetzung.
              Von der Analyse bestehender Abläufe bis zur Digitalisierung und Automatisierung.
              <br />
              Von der Analyse des Prozesses bis zur Umsetzung.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Download className="size-4" aria-hidden="true" />
                Lebenslauf herunterladen
              </a>

              <Link
                href="#projekte"
                className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                Projekte ansehen
              </Link>
            </div>

            <p className="mt-5 text-sm text-muted-foreground">
              Verfügbar ab sofort · 15 Std./Woche im Semester · 30 Std. in der
              vorlesungsfreien Zeit
            </p>
          </div>
        </section>

        {/* Über mich */}
        <section
          aria-labelledby="ueber-mich"
          className="section-alt border-t border-border/60"
        >
          <div className="mx-auto w-full max-w-[1400px] px-10 py-30 lg:px-20">
            <div className="mx-auto max-w-5xl">
              <div className="grid items-center gap-10 md:grid-cols-[220px_1fr] md:gap-16">
                {/* Bild */}
                <figure className="mx-auto w-full max-w-[160px] md:mx-0">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border bg-card">
                    <Image
                      src="/HW.PNG"
                      alt="Porträt von Hauke Werner"
                      fill
                      className="object-cover"
                      sizes="160px"
                      priority
                    />
                  </div>

                  <figcaption className="mt-3 text-center text-sm font-medium text-muted-foreground">
                    Hauke Werner
                  </figcaption>
                </figure>

                {/* Text */}
                <div className="md:self-center">
                  <h2
                    id="ueber-mich"
                    className="font-serif text-3xl font-semibold tracking-tight text-foreground"
                  >
                    Über mich
                  </h2>

                  <div className="mt-6 space-y-5 text-base leading-relaxed text-pretty text-muted-foreground">
                    <p>
                      Ich studiere BWL im zweiten Semester an der Universität
                      Bayreuth und lege meinen Fokus auf Wahlmodule rund um
                      Prozesse und technische Umsetzung. Aktuell suche ich eine
                      Werkstudentenstelle, in der ich von Anfang an berufliche
                      Praxis sammeln kann.
                    </p>

                    <p>
                      Mich interessiert, wie Unternehmen ihre Prozesse
                      organisieren und optimieren. Dafür arbeite ich mit
                      BPMN-Prozessmodellierung, n8n sowie SQL- und
                      Python-Grundlagen.
                    </p>

                    <p>
                      Wichtig ist mir, wirtschaftliches Verständnis mit der
                      technischen Umsetzung zu verbinden. Also wirklich zu
                      verstehen, wo Prozesse relevante Lücken haben, um diese
                      dann gezielt zu lösen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projekte */}
        <section
          aria-labelledby="projekte"
          id="projekte"
          className="section-light border-t border-border/60"
        >
          <div className="mx-auto w-full max-w-[1400px] px-6 py-20 sm:py-24 lg:px-10">
            <h2
              id="projekte-heading"
              className="text-center font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              Projekte
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-pretty text-muted-foreground">
              Eigene Projekte rund um Prozessanalyse und Automatisierung – von
              der Problemstellung über die technische Umsetzung bis zur
              wirtschaftlichen Bewertung.
            </p>

            <div className="mx-auto mt-10 max-w-2xl">
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Wo ich unterstütze */}
        <section
          aria-labelledby="unterstuetzung"
          className="section-alt border-t border-border/60"
        >
          <div className="mx-auto w-full max-w-[1400px] px-6 py-20 sm:py-24 lg:px-10">
            <div className="mx-auto max-w-6xl">
              <div className="mx-auto max-w-2xl text-center">
                <p className="text-sm font-medium tracking-wide text-primary">
                  Meine Arbeitsbereiche
                </p>

                <h2
                  id="unterstuetzung"
                  className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
                >
                  Wo ich unterstütze
                </h2>

                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  An der Schnittstelle zwischen Prozessverständnis, technischer
                  Umsetzung und operativer Entlastung.
                </p>
              </div>

              <ol className="mt-12 grid gap-5 md:grid-cols-2">
                {unterstuetzung.map((punkt) => (
                  <li
                    key={punkt.nummer}
                    className="rounded-xl border border-border bg-card/70 p-6 transition-all duration-200 hover:border-primary/25 hover:bg-card sm:p-7"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
                          Arbeitsbereich
                        </p>

                        <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground">
                          {punkt.titel}
                        </h3>
                      </div>

                      <span
                        className="font-serif text-3xl font-semibold text-primary/40"
                        aria-hidden="true"
                      >
                        {punkt.nummer}
                      </span>
                    </div>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                      {punkt.text}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {punkt.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section
          aria-labelledby="kontakt"
          id="kontakt"
          className="section-light border-t border-border/60"
        >
          <div className="mx-auto w-full max-w-[1400px] px-6 py-20 lg:px-10">
            <h2
              id="kontakt-heading"
              className="text-center font-serif text-3xl font-semibold tracking-tight text-foreground"
            >
              Kontakt
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-pretty text-muted-foreground">
              Sie möchten sich austauschen oder sehen eine passende
              Werkstudentenstelle? Schreiben Sie mir gerne direkt.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <a
                href="mailto:hauke.werner@gmx.net"
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                <Mail className="size-4" aria-hidden="true" />
                E-Mail
              </a>

              <a
                href="https://wa.me/491794178724"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                <Phone className="size-4" aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}