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

      <main className="w-full overflow-x-hidden">
        {/* Hero */}
        <section className="section-light flex min-h-[calc(100svh-56px)] items-center sm:min-h-[calc(100svh-64px)] 2xl:min-h-[calc(100svh-72px)]">
          <div className="mx-auto w-full max-w-[1400px] px-5 py-16 text-center sm:px-6 sm:py-20 lg:px-10 2xl:max-w-[1600px] 2xl:px-12">
            <p className="mx-auto max-w-4xl text-xs font-medium leading-5 tracking-wide text-primary sm:text-sm md:text-base 2xl:text-lg">
              BWL-Student · Universität Bayreuth · Prozessanalyse &amp;
              -automatisierung
            </p>

            <h1 className="mx-auto mt-4 max-w-5xl font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground sm:mt-5 sm:text-5xl md:text-6xl lg:text-7xl 2xl:max-w-6xl 2xl:text-8xl">
              Hauke Werner
            </h1>

            <p className="mx-auto mt-3 max-w-5xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-relaxed md:text-xl 2xl:max-w-6xl 2xl:text-2xl 2xl:leading-relaxed">
              Ich verbinde betriebswirtschaftliches Prozessverständnis mit Daten
              und technischer Umsetzung.
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Von der Analyse bestehender Abläufe bis zur Digitalisierung und
              Automatisierung.
            </p>

            <div className="mx-auto mt-8 flex w-full max-w-sm flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4 2xl:mt-12 2xl:gap-5">
              <a
                href="/cv.pdf"
                download
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto 2xl:px-7 2xl:py-3.5 2xl:text-base"
              >
                <Download
                  className="size-4 shrink-0 2xl:size-5"
                  aria-hidden="true"
                />
                Lebenslauf herunterladen
              </a>

              <Link
                href="#projekte"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary sm:w-auto 2xl:px-7 2xl:py-3.5 2xl:text-base"
              >
                Projekte ansehen
              </Link>
            </div>

            <p className="mx-auto mt-5 max-w-xl text-xs leading-5 text-muted-foreground sm:text-sm 2xl:mt-6 2xl:max-w-2xl 2xl:text-base">
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
          <div className="mx-auto w-full max-w-[1400px] px-5 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-10 lg:py-28 xl:px-20 2xl:max-w-[1600px] 2xl:py-36">
            <div className="mx-auto max-w-5xl 2xl:max-w-6xl">
              <div className="grid items-center gap-10 md:grid-cols-[180px_1fr] md:gap-12 lg:grid-cols-[220px_1fr] lg:gap-16 2xl:grid-cols-[250px_1fr] 2xl:gap-20">
                <figure className="mx-auto w-full max-w-[140px] sm:max-w-[150px] md:mx-0 md:max-w-[160px] 2xl:max-w-[200px]">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border bg-card">
                    <Image
                      src="/HW.PNG"
                      alt="Porträt von Hauke Werner"
                      fill
                      className="object-cover"
                      sizes="(max-width: 767px) 150px, (min-width: 1536px) 200px, 160px"
                      priority
                    />
                  </div>

                  <figcaption className="mt-3 text-center text-sm font-medium text-muted-foreground 2xl:text-base">
                    Hauke Werner
                  </figcaption>
                </figure>

                <div className="text-center md:text-left">
                  <h2
                    id="ueber-mich"
                    className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl 2xl:text-5xl"
                  >
                    Über mich
                  </h2>

                  <div className="mt-6 space-y-5 text-left text-sm leading-7 text-muted-foreground sm:text-base sm:leading-relaxed 2xl:mt-8 2xl:space-y-6 2xl:text-lg 2xl:leading-8">
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
          aria-labelledby="projekte-heading"
          id="projekte"
          className="section-light scroll-mt-20 border-t border-border/60"
        >
          <div className="mx-auto w-full max-w-[1400px] px-5 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-10 2xl:max-w-[1600px] 2xl:py-32">
            <h2
              id="projekte-heading"
              className="text-center font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl 2xl:text-5xl"
            >
              Projekte
            </h2>

            <p className="mx-auto mt-4 max-w-2xl px-1 text-center text-sm leading-7 text-muted-foreground sm:text-base sm:leading-relaxed 2xl:mt-5 2xl:max-w-3xl 2xl:text-lg">
              Eigene Projekte rund um Prozessanalyse und Automatisierung – von
              der Problemstellung über die technische Umsetzung bis zur
              wirtschaftlichen Bewertung.
            </p>

            <div className="mx-auto mt-8 w-full max-w-2xl sm:mt-10 2xl:mt-12 2xl:max-w-3xl">
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
          <div className="mx-auto w-full max-w-[1400px] px-5 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-10 2xl:max-w-[1600px] 2xl:py-32">
            <div className="mx-auto max-w-6xl 2xl:max-w-7xl">
              <div className="mx-auto max-w-2xl text-center 2xl:max-w-3xl">
                <p className="text-xs font-medium tracking-wide text-primary sm:text-sm 2xl:text-base">
                  Meine Arbeitsbereiche
                </p>

                <h2
                  id="unterstuetzung"
                  className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl 2xl:text-5xl"
                >
                  Wo ich unterstütze
                </h2>

                <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-relaxed 2xl:mt-5 2xl:text-lg">
                  An der Schnittstelle zwischen Prozessverständnis, technischer
                  Umsetzung und operativer Entlastung.
                </p>
              </div>

              <ol className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 lg:mt-12 2xl:mt-14 2xl:gap-6">
                {unterstuetzung.map((punkt) => (
                  <li
                    key={punkt.nummer}
                    className="rounded-xl border border-border bg-card/70 p-5 transition-all duration-200 hover:border-primary/25 hover:bg-card sm:p-6 lg:p-7 2xl:p-8"
                  >
                    <div className="flex items-start justify-between gap-4 sm:gap-6">
                      <div className="min-w-0">
                        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-primary sm:text-xs sm:tracking-[0.16em] 2xl:text-sm">
                          Arbeitsbereich
                        </p>

                        <h3 className="mt-3 text-base font-semibold leading-snug text-foreground sm:text-lg 2xl:text-xl">
                          {punkt.titel}
                        </h3>
                      </div>

                      <span
                        className="shrink-0 font-serif text-2xl font-semibold text-primary/40 sm:text-3xl 2xl:text-4xl"
                        aria-hidden="true"
                      >
                        {punkt.nummer}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-muted-foreground sm:leading-7 lg:text-base 2xl:mt-5 2xl:text-lg 2xl:leading-8">
                      {punkt.text}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                      {punkt.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground 2xl:px-4 2xl:py-1.5 2xl:text-sm"
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
          aria-labelledby="kontakt-heading"
          id="kontakt"
          className="section-light scroll-mt-20 border-t border-border/60"
        >
          <div className="mx-auto w-full max-w-[1400px] px-5 py-16 sm:px-6 sm:py-20 lg:px-10 2xl:max-w-[1600px] 2xl:py-28">
            <h2
              id="kontakt-heading"
              className="text-center font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl 2xl:text-5xl"
            >
              Kontakt
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-7 text-muted-foreground sm:text-base 2xl:mt-5 2xl:max-w-3xl 2xl:text-lg">
              Sie möchten sich austauschen oder sehen eine passende
              Werkstudentenstelle? Schreiben Sie mir gerne direkt.
            </p>

            <div className="mx-auto mt-8 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4 2xl:mt-10 2xl:gap-5">
              <a
                href="mailto:hauke.werner@gmx.net"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary sm:w-auto 2xl:px-6 2xl:py-3 2xl:text-base"
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
                className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary sm:w-auto 2xl:px-6 2xl:py-3 2xl:text-base"
              >
                <Phone
                  className="size-4 shrink-0 2xl:size-5"
                  aria-hidden="true"
                />
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