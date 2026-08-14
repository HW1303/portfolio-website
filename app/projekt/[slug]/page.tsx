import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle2,
  UserCheck,
} from 'lucide-react'

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { getProject, projects } from '@/lib/projects'
import { ProjectDemoTabs } from '@/components/ui/project-demo-tabs'
import { ProjectModelTabs } from '@/components/ui/project-model-tabs'

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) {
    return {
      title: 'Projekt nicht gefunden',
    }
  }

  return {
    title: 'Automatisierter B2B-Auftragseingang – Case Study',
    description:
      'Case Study zur Analyse und Automatisierung eines manuellen B2B-Auftragseingangs im industriellen Mittelstand.',
  }
}

function SectionTitle({
  number,
  title,
  text,
}: {
  number: string
  title: string
  text?: string
}) {
  return (
    <div className="max-w-3xl 2xl:max-w-4xl">
      <div className="font-mono text-xs font-medium text-primary sm:text-sm 2xl:text-base">
        {number}
      </div>

      <h2 className="mt-2 font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl 2xl:text-5xl">
        {title}
      </h2>

      {text && (
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base 2xl:mt-5 2xl:max-w-3xl 2xl:text-lg 2xl:leading-8">
          {text}
        </p>
      )}
    </div>
  )
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) {
    notFound()
  }

  return (
    <>
      <SiteHeader />

      <main className="w-full overflow-x-hidden">
        {/* HERO */}
        <section className="section-light border-b border-border/60">
          <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20 2xl:max-w-7xl 2xl:px-12 2xl:py-28">
            <Link
              href="/#projekte"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground 2xl:text-base"
            >
              <ArrowLeft className="size-4 shrink-0 2xl:size-5" />
              Projekte
            </Link>

            <div className="mt-8 max-w-4xl sm:mt-10 2xl:mt-12 2xl:max-w-5xl">
              <p className="text-xs font-medium text-primary sm:text-sm 2xl:text-base">
                Fiktive Case Study · Prozessautomatisierung
              </p>

              <h1 className="mt-3 max-w-4xl font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground sm:mt-4 sm:text-4xl lg:text-5xl 2xl:max-w-5xl 2xl:text-6xl">
                Automatisierter B2B-Auftragseingang
              </h1>

              <p className="mt-3 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8 lg:text-xl 2xl:mt-4 2xl:max-w-4xl 2xl:text-2xl 2xl:leading-9">
                PDF-Bestellungen werden automatisch erfasst, passenden
                Angeboten zugeordnet, auf Abweichungen geprüft und je nach
                Ergebnis automatisiert verarbeitet oder zur Klärung übergeben.
              </p>

              <div className="mt-6 flex flex-wrap gap-2 sm:mt-8 2xl:mt-10 2xl:gap-3">
                {[
                  'BPMN',
                  'PostgreSQL',
                  'n8n',
                  'Supabase',
                  'OpenAI',
                  'JavaScript',
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-secondary px-3 py-1.5 text-xs text-secondary-foreground 2xl:px-4 2xl:py-2 2xl:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 01 PROBLEM */}
        <section className="section-alt border-b border-border/60">
          <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20 2xl:max-w-7xl 2xl:px-12 2xl:py-28">
            <SectionTitle
              number="01"
              title="Problem & Ausgangslage"
              text="Kundenbestellungen treffen per E-Mail als PDF ein. Mitarbeiter müssen die Daten erfassen, das passende Angebot finden, Positionen und Konditionen vergleichen und Abweichungen klären."
            />

            <div className="mt-6 max-w-3xl sm:mt-8 2xl:mt-10 2xl:max-w-4xl">
              <p className="text-sm leading-7 text-muted-foreground sm:text-base 2xl:text-lg 2xl:leading-8">
                Das Problem entsteht durch die Masse: Bei hohem Auftragsvolumen
                bindet dieser wiederkehrende Prüfprozess viele Arbeitsstunden,
                verzögert die Bearbeitung und erhöht das Risiko manueller Fehler.
                Gleichzeitig können Abweichungen und unsichere Zuordnungen nicht
                einfach automatisiert übergangen werden.
              </p>
            </div>

            {/* ANNAHMEN */}
            <div className="mt-10 sm:mt-12 2xl:mt-16">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground sm:text-sm sm:tracking-[0.14em] 2xl:text-base">
                Annahmen für das Modellszenario
              </p>

              <div className="mt-6 grid gap-7 md:grid-cols-3 md:gap-6 lg:gap-8 2xl:mt-8 2xl:gap-10">
                <div className="border-l border-border pl-4 sm:pl-5 2xl:pl-6">
                  <div className="font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl 2xl:text-4xl">
                    1.500
                  </div>

                  <div className="mt-1 text-sm leading-5 text-muted-foreground 2xl:mt-2 2xl:text-base">
                    Bestellungen pro Monat
                  </div>

                  <div className="mt-3 text-xs leading-5 text-muted-foreground 2xl:mt-4 2xl:text-sm 2xl:leading-6">
                    Abgeleitet aus Praxisfällen:{' '}
                    <a
                      href="https://www.workist.com/success-stories/bachl"
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-4 hover:text-foreground"
                    >
                      BACHL
                    </a>
                    ,{' '}
                    <a
                      href="https://www.workist.com/success-stories/brennenstuhl"
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-4 hover:text-foreground"
                    >
                      Brennenstuhl
                    </a>{' '}
                    und{' '}
                    <a
                      href="https://www.workist.com/success-stories/wero"
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-4 hover:text-foreground"
                    >
                      Wero
                    </a>
                  </div>
                </div>

                <div className="border-l border-border pl-4 sm:pl-5 2xl:pl-6">
                  <div className="font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl 2xl:text-4xl">
                    12 Min.
                  </div>

                  <div className="mt-1 text-sm leading-5 text-muted-foreground 2xl:mt-2 2xl:text-base">
                    manuelle Bearbeitung pro Bestellung
                  </div>

                  <div className="mt-3 text-xs leading-5 text-muted-foreground 2xl:mt-4 2xl:text-sm 2xl:leading-6">
                    Abgeleitet aus{' '}
                    <a
                      href="https://osuva.uwasa.fi/bitstreams/e29da2a3-3a92-46a5-b961-7b863f1b0c75/download"
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-4 hover:text-foreground"
                    >
                      Forschung
                    </a>{' '}
                    und Praxisfällen von{' '}
                    <a
                      href="https://www.workist.com/success-stories/evg"
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-4 hover:text-foreground"
                    >
                      EVG
                    </a>{' '}
                    und{' '}
                    <a
                      href="https://www.workist.com/success-stories/bachl"
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-4 hover:text-foreground"
                    >
                      BACHL
                    </a>
                  </div>
                </div>

                <div className="border-l border-border pl-4 sm:pl-5 2xl:pl-6">
                  <div className="font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl 2xl:text-4xl">
                    70 %
                  </div>

                  <div className="mt-1 text-sm leading-5 text-muted-foreground 2xl:mt-2 2xl:text-base">
                    Standardfälle im Automatisierungsszenario
                  </div>

                  <div className="mt-3 text-xs leading-5 text-muted-foreground 2xl:mt-4 2xl:text-sm 2xl:leading-6">
                    Abgeleitet aus dokumentierten Ergebnissen von{' '}
                    <a
                      href="https://www.workist.com/success-stories/zentis"
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-4 hover:text-foreground"
                    >
                      Zentis
                    </a>
                    ,{' '}
                    <a
                      href="https://www.apqc.org/what-we-do/benchmarking/open-standards-benchmarking/measures/percentage-sales-orders-requiring-no"
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-4 hover:text-foreground"
                    >
                      APQC
                    </a>{' '}
                    und{' '}
                    <a
                      href="https://www.esker.com/company/customer-success-stories/siemens-healthineers-customer-story/"
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-4 hover:text-foreground"
                    >
                      Siemens Healthineers
                    </a>
                  </div>
                </div>
              </div>

              <p className="mt-7 max-w-4xl text-xs leading-5 text-muted-foreground sm:mt-8 2xl:mt-10 2xl:max-w-5xl 2xl:text-sm 2xl:leading-6">
                Die Werte sind aus Forschung, Benchmarks und veröffentlichten
                Praxisfällen abgeleitete Modellannahmen. Sie wurden nicht
                gemeinsam in einem konkreten Unternehmen gemessen.
              </p>
            </div>
          </div>
        </section>

        {/* 02 LÖSUNG */}
        <section className="section-light border-b border-border/60">
          <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20 2xl:max-w-7xl 2xl:px-12 2xl:py-28">
            <SectionTitle
              number="02"
              title="Lösung & Prozesslogik"
              text="Der Workflow übernimmt die repetitiven Schritte des Auftragseingangs: PDF-Bestellungen werden automatisch erfasst, strukturiert und dem passenden Angebot zugeordnet. Anschließend prüft das System Positionen, Mengen, Preise, Liefertermine und Konditionen regelbasiert."
            />

            <div className="mt-6 max-w-3xl space-y-4 text-sm sm:mt-8 sm:text-base 2xl:mt-10 2xl:max-w-4xl 2xl:space-y-5 2xl:text-lg">
              <p className="leading-7 text-muted-foreground 2xl:leading-8">
                Eindeutige Standardfälle werden automatisch weiterverarbeitet.
                Dadurch kann ein großer Teil der manuellen Routinearbeit
                entfallen.
              </p>

              <p className="leading-7 text-muted-foreground 2xl:leading-8">
                Abweichungen und unsichere Zuordnungen werden dagegen nicht
                automatisch übergangen: Das System dokumentiert den Fall,
                stoppt die Verarbeitung und übergibt ihn gezielt an einen
                Mitarbeiter.
              </p>
            </div>

            <div className="mt-10 sm:mt-12 lg:mt-14 2xl:mt-16">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground sm:text-sm sm:tracking-[0.14em] 2xl:text-base">
                Prozessmodell & Datenmodell
              </p>

              <ProjectModelTabs />

              <p className="mt-4 text-xs leading-5 text-muted-foreground 2xl:mt-5 2xl:text-sm 2xl:leading-6">
                Zusätzlich berücksichtigt: Dubletten, unvollständige
                Bestellungen und Fälle ohne ausreichend sichere
                Angebotszuordnung.
              </p>
            </div>

            <div className="mt-10 sm:mt-12 2xl:mt-16">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground sm:text-sm sm:tracking-[0.14em] 2xl:text-base">
                Drei zentrale Prozesspfade
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3 2xl:mt-8 2xl:gap-6">
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 sm:p-6 2xl:p-8">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-secondary 2xl:size-12">
                    <CheckCircle2 className="size-5 text-foreground 2xl:size-6" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-foreground 2xl:mt-6 2xl:text-xl">
                    Happy Path
                  </h3>

                  <div className="mt-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground 2xl:text-sm">
                      Situation
                    </p>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground 2xl:mt-3 2xl:text-base 2xl:leading-7">
                      Das Angebot ist eindeutig zugeordnet und Bestellung und
                      Angebot stimmen in allen relevanten Punkten überein.
                    </p>
                  </div>

                  <div className="mt-auto pt-6 2xl:pt-8">
                    <div className="border-t border-border pt-5 2xl:pt-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground 2xl:text-sm">
                        Systemreaktion
                      </p>

                      <p className="mt-2 text-sm font-medium leading-6 text-foreground 2xl:mt-3 2xl:text-base 2xl:leading-7">
                        Auftrag und Positionen werden angelegt und die
                        Auftragsbestätigung wird vorbereitet.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 sm:p-6 2xl:p-8">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-secondary 2xl:size-12">
                    <AlertTriangle className="size-5 text-foreground 2xl:size-6" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-foreground 2xl:mt-6 2xl:text-xl">
                    Abweichung erkannt
                  </h3>

                  <div className="mt-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground 2xl:text-sm">
                      Situation
                    </p>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground 2xl:mt-3 2xl:text-base 2xl:leading-7">
                      Bestellung und Angebot unterscheiden sich beispielsweise
                      bei Menge, Preis, Liefertermin oder Konditionen.
                    </p>
                  </div>

                  <div className="mt-auto pt-6 2xl:pt-8">
                    <div className="border-t border-border pt-5 2xl:pt-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground 2xl:text-sm">
                        Systemreaktion
                      </p>

                      <p className="mt-2 text-sm font-medium leading-6 text-foreground 2xl:mt-3 2xl:text-base 2xl:leading-7">
                        Die Abweichung wird dokumentiert und als Klärfall an
                        einen Mitarbeiter übergeben.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 sm:p-6 2xl:p-8">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-secondary 2xl:size-12">
                    <UserCheck className="size-5 text-foreground 2xl:size-6" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-foreground 2xl:mt-6 2xl:text-xl">
                    Keine eindeutige Zuordnung
                  </h3>

                  <div className="mt-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground 2xl:text-sm">
                      Situation
                    </p>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground 2xl:mt-3 2xl:text-base 2xl:leading-7">
                      Die Bestellung enthält keine ausreichend eindeutige
                      Referenz auf ein vorhandenes Angebot.
                    </p>
                  </div>

                  <div className="mt-auto pt-6 2xl:pt-8">
                    <div className="border-t border-border pt-5 2xl:pt-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground 2xl:text-sm">
                        Systemreaktion
                      </p>

                      <p className="mt-2 text-sm font-medium leading-6 text-foreground 2xl:mt-3 2xl:text-base 2xl:leading-7">
                        Mögliche Angebote werden nach festen Kriterien bewertet.
                        Ein ausreichend sicherer Kandidat wird zur menschlichen
                        Prüfung vorgeschlagen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03 DEMO */}
        <section className="section-alt border-b border-border/60">
          <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20 2xl:max-w-7xl 2xl:px-12 2xl:py-28">
            <SectionTitle
              number="03"
              title="Das System in der Praxis"
              text="Drei typische Fälle zeigen, wie das System je nach Bestellsituation unterschiedlich reagiert."
            />

            <ProjectDemoTabs />
          </div>
        </section>

        {/* 04 WIRTSCHAFTLICHES POTENZIAL */}
        <section className="section-light border-b border-border/60">
          <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20 2xl:max-w-7xl 2xl:px-12 2xl:py-28">
            <SectionTitle
              number="04"
              title="Wirtschaftliches Potenzial"
              text="Da der MVP nicht im realen Unternehmensbetrieb getestet wurde, wird kein gemessener ROI ausgewiesen. Stattdessen zeigt das Szenario, welchen manuellen Zeitaufwand eine Automatisierung grundsätzlich adressieren könnte."
            />

            <div className="mt-8 rounded-2xl border border-border bg-card p-5 sm:mt-10 sm:p-7 lg:p-8 2xl:mt-12 2xl:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground sm:text-sm sm:tracking-[0.14em] 2xl:text-base">
                Modellierter manueller Aufwand
              </p>

              <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-5 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center lg:gap-8 2xl:mt-9 2xl:gap-10">
                <div>
                  <p className="font-serif text-2xl font-semibold text-foreground sm:text-3xl 2xl:text-4xl">
                    1.500
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground 2xl:mt-2 2xl:text-base">
                    Bestellungen / Monat
                  </p>
                </div>

                <div className="hidden text-xl text-muted-foreground lg:block 2xl:text-2xl">
                  ×
                </div>

                <div>
                  <p className="font-serif text-2xl font-semibold text-foreground sm:text-3xl 2xl:text-4xl">
                    12 Min.
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground 2xl:mt-2 2xl:text-base">
                    Bearbeitung / Bestellung
                  </p>
                </div>

                <div className="hidden text-xl text-muted-foreground lg:block 2xl:text-2xl">
                  =
                </div>

                <div>
                  <p className="font-serif text-2xl font-semibold text-foreground sm:text-3xl 2xl:text-4xl">
                    300 Std.
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground 2xl:mt-2 2xl:text-base">
                    manueller Aufwand / Monat
                  </p>
                </div>
              </div>

              <p className="mt-6 overflow-x-auto border-t border-border pt-5 font-mono text-xs leading-6 text-muted-foreground sm:text-sm 2xl:mt-8 2xl:pt-6 2xl:text-base">
                1.500 × 12 Min. = 18.000 Min. = 300 Std. / Monat
              </p>
            </div>

            <div className="mt-5 rounded-2xl border border-border bg-card p-5 sm:mt-6 sm:p-7 lg:p-8 2xl:mt-8 2xl:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground sm:text-sm sm:tracking-[0.14em] 2xl:text-base">
                Automatisierungsszenario
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-6 text-muted-foreground 2xl:mt-5 2xl:max-w-4xl 2xl:text-base 2xl:leading-7">
                Veröffentlichte Praxisfälle zeigen, dass bei bereits
                automatisierten Auftragsprozessen Größenordnungen um 70 %
                touchless verarbeiteter Aufträge erreichbar sein können. Dieser
                Wert wird hier ausschließlich als Szenario verwendet.
              </p>

              <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-8 2xl:mt-9 2xl:gap-10">
                <div>
                  <p className="font-serif text-2xl font-semibold text-foreground sm:text-3xl 2xl:text-4xl">
                    300 Std.
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground 2xl:mt-2 2xl:text-base">
                    manueller Aufwand / Monat
                  </p>
                </div>

                <div className="hidden text-xl text-muted-foreground lg:block 2xl:text-2xl">
                  × 70 % =
                </div>

                <div>
                  <p className="font-serif text-3xl font-semibold text-foreground sm:text-4xl 2xl:text-5xl">
                    bis zu 210 Std.
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground 2xl:mt-2 2xl:text-base">
                    theoretisch adressierbare Routinearbeit / Monat
                  </p>
                </div>
              </div>

              <p className="mt-6 overflow-x-auto border-t border-border pt-5 font-mono text-xs leading-6 text-muted-foreground sm:text-sm 2xl:mt-8 2xl:pt-6 2xl:text-base">
                300 Std. × 70 % = 210 Std. / Monat
              </p>
            </div>

            <div className="mt-5 rounded-2xl bg-foreground p-5 text-background sm:mt-6 sm:p-7 lg:p-9 2xl:mt-8 2xl:p-11">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-background/60 sm:text-sm sm:tracking-[0.14em] 2xl:text-base">
                Kernaussage
              </p>

              <div className="mt-5 sm:mt-6 2xl:mt-8">
                <p className="font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl 2xl:text-6xl">
                  bis zu 210 Stunden / Monat
                </p>

                <p className="mt-3 max-w-3xl text-sm leading-6 text-background/70 2xl:mt-4 2xl:max-w-4xl 2xl:text-base 2xl:leading-7">
                  könnten im gewählten Szenario aus der manuellen
                  Standardfallbearbeitung herausgenommen werden.
                </p>
              </div>

              <div className="mt-6 border-t border-background/15 pt-5 sm:mt-7 sm:pt-6 2xl:mt-9 2xl:pt-8">
                <p className="max-w-4xl text-sm leading-6 text-background/70 2xl:max-w-5xl 2xl:text-base 2xl:leading-7">
                  Bei einem modellierten Personalkostensatz von rund{' '}
                  <span className="font-medium text-background">
                    31 € pro Stunde
                  </span>{' '}
                  entspräche diese Arbeitszeit rechnerisch einem Kapazitätswert
                  von bis zu{' '}
                  <span className="font-medium text-background">
                    ca. 6.500 € pro Monat
                  </span>
                  . Dieser Betrag ist keine nachgewiesene Kostenersparnis.
                </p>
              </div>
            </div>

            <div className="mt-5 max-w-4xl text-xs leading-5 text-muted-foreground 2xl:mt-6 2xl:max-w-5xl 2xl:text-sm 2xl:leading-6">
              <p>
                Der Stundensatz dient nur zur monetären Einordnung und wurde aus
                dem{' '}
                <a
                  href="https://web.arbeitsagentur.de/entgeltatlas/beruf/14587"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 hover:text-foreground"
                >
                  Median-Bruttogehalt für Verkaufssachbearbeiter
                </a>{' '}
                zuzüglich modellierter Arbeitgeberanteile abgeleitet.
              </p>

              <p className="mt-2 2xl:mt-3">
                Ob mein MVP im realen Betrieb tatsächlich 70 % der Aufträge ohne
                manuellen Eingriff verarbeiten würde, ist nicht nachgewiesen.
                Dafür wären reale Prozessdaten, ein Produktivbetrieb und eine
                Vorher-Nachher-Messung notwendig. Ebenso sind Implementierungs-,
                Betriebs- und Kontrollaufwände in der Rechnung nicht
                berücksichtigt.
              </p>
            </div>
          </div>
        </section>

        {/* 05 EINORDNUNG */}
        <section className="section-alt border-b border-border/60">
          <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20 2xl:max-w-7xl 2xl:px-12 2xl:py-28">
            <SectionTitle
              number="05"
              title="Einordnung"
              text="Die Case Study zeigt meine Herangehensweise an Prozessanalyse, Automatisierung und wirtschaftliche Bewertung – nicht den Erfolg eines realen Kundenprojekts."
            />

            <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-2 2xl:mt-12 2xl:gap-6">
              <div className="rounded-2xl border border-border bg-card p-5 sm:p-7 2xl:p-9">
                <div className="flex size-10 items-center justify-center rounded-xl bg-secondary 2xl:size-12">
                  <CheckCircle2 className="size-5 text-foreground 2xl:size-6" />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-foreground 2xl:mt-6 2xl:text-xl">
                  Was die Case Study zeigt
                </h3>

                <div className="mt-6 space-y-5 2xl:mt-7 2xl:space-y-6">
                  <div>
                    <p className="text-sm font-medium text-foreground 2xl:text-base">
                      Prozessverständnis
                    </p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground 2xl:mt-2 2xl:text-base 2xl:leading-7">
                      Analyse und Modellierung eines vollständigen
                      B2B-Auftragsprozesses.
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-foreground 2xl:text-base">
                      Entscheidungslogik
                    </p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground 2xl:mt-2 2xl:text-base 2xl:leading-7">
                      Klare Regeln für Standardfälle, Abweichungen und unsichere
                      Entscheidungen.
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-foreground 2xl:text-base">
                      Technische Umsetzung
                    </p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground 2xl:mt-2 2xl:text-base 2xl:leading-7">
                      Umsetzung und Test eines funktionsfähigen
                      Automatisierungs-MVP.
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-foreground 2xl:text-base">
                      Wirtschaftliche Einordnung
                    </p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground 2xl:mt-2 2xl:text-base 2xl:leading-7">
                      Transparentes Szenario auf Basis recherchierter Annahmen,
                      ohne einen real gemessenen ROI zu behaupten.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5 sm:p-7 2xl:p-9">
                <div className="flex size-10 items-center justify-center rounded-xl bg-secondary 2xl:size-12">
                  <AlertTriangle className="size-5 text-foreground 2xl:size-6" />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-foreground 2xl:mt-6 2xl:text-xl">
                  Was die Case Study nicht behauptet
                </h3>

                <div className="mt-6 space-y-5 2xl:mt-7 2xl:space-y-6">
                  <div>
                    <p className="text-sm font-medium text-foreground 2xl:text-base">
                      Kein reales Kundenprojekt
                    </p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground 2xl:mt-2 2xl:text-base 2xl:leading-7">
                      Unternehmen, Prozessdaten und konkrete Ausgangssituation
                      sind modelliert.
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-foreground 2xl:text-base">
                      Kein Produktiveinsatz
                    </p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground 2xl:mt-2 2xl:text-base 2xl:leading-7">
                      Der MVP wurde prototypisch umgesetzt und getestet, aber
                      nicht in einem realen Unternehmen betrieben.
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-foreground 2xl:text-base">
                      Keine gemessene Zeit- oder Kostenersparnis
                    </p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground 2xl:mt-2 2xl:text-base 2xl:leading-7">
                      Das wirtschaftliche Ergebnis ist ein Szenario und kein
                      Vorher-Nachher-Messergebnis.
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-foreground 2xl:text-base">
                      Kein allgemeingültiger ROI
                    </p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground 2xl:mt-2 2xl:text-base 2xl:leading-7">
                      Der tatsächliche Business Case hängt vom konkreten
                      Unternehmen, Prozess und Automatisierungsgrad ab.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 max-w-4xl text-sm leading-6 text-muted-foreground 2xl:mt-7 2xl:max-w-5xl 2xl:text-base 2xl:leading-7">
              <p>
                Dieses Projekt war mein erster vollständiger
                Automatisierungs-Case.
              </p>

              <p>
                Künftige Projekte werde ich direkt an realen Unternehmen und
                tatsächlich validierten Prozessproblemen ausrichten.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}