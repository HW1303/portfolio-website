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
    <div className="max-w-3xl">
      <div className="font-mono text-sm font-medium text-primary">
        {number}
      </div>

      <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>

      {text && (
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
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

      <main>
        {/* HERO */}
        <section className="section-light border-b border-border/60">
          <div className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
            <Link
              href="/#projekte"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              Projekte
            </Link>

            <div className="mt-10 max-w-4xl">
              <p className="text-sm font-medium text-primary">
                Fiktive Case Study · Prozessautomatisierung
              </p>

              <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-3xl lg:text-5xl">
                Automatisierter B2B-Auftragseingang
              </h1>

              <p className="mt-1 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
                PDF-Bestellungen werden automatisch erfasst, passenden
                Angeboten zugeordnet, auf Abweichungen geprüft und je nach
                Ergebnis automatisiert verarbeitet oder zur Klärung übergeben.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
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
                    className="rounded-full bg-secondary px-3 py-1.5 text-xs text-secondary-foreground"
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
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
            <SectionTitle
              number="01"
              title="Problem & Ausgangslage"
              text="Kundenbestellungen treffen per E-Mail als PDF ein. Mitarbeiter müssen die Daten erfassen, das passende Angebot finden, Positionen und Konditionen vergleichen und Abweichungen klären."
            />

            <div className="mt-8 max-w-3xl">
              <p className="leading-7 text-muted-foreground">
                Das Problem entsteht durch die Masse: Bei hohem Auftragsvolumen
                bindet dieser wiederkehrende Prüfprozess viele Arbeitsstunden,
                verzögert die Bearbeitung und erhöht das Risiko manueller Fehler.
                Gleichzeitig können Abweichungen und unsichere Zuordnungen nicht
                einfach automatisiert übergangen werden.
              </p>
            </div>

            {/* ANNAHMEN */}
            <div className="mt-12">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Annahmen für das Modellszenario
              </p>

              <div className="mt-6 grid gap-8 sm:grid-cols-3">
                {/* Bestellungen */}
                <div className="border-l border-border pl-5">
                  <div className="font-serif text-3xl font-semibold tracking-tight text-foreground">
                    1.500
                  </div>

                  <div className="mt-1 text-sm leading-5 text-muted-foreground">
                    Bestellungen pro Monat
                  </div>

                  <div className="mt-3 text-xs leading-5 text-muted-foreground">
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

                {/* Bearbeitungszeit */}
                <div className="border-l border-border pl-5">
                  <div className="font-serif text-3xl font-semibold tracking-tight text-foreground">
                    12 Min.
                  </div>

                  <div className="mt-1 text-sm leading-5 text-muted-foreground">
                    manuelle Bearbeitung pro Bestellung
                  </div>

                  <div className="mt-3 text-xs leading-5 text-muted-foreground">
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

                {/* Automatisierung */}
                <div className="border-l border-border pl-5">
                  <div className="font-serif text-3xl font-semibold tracking-tight text-foreground">
                    70 %
                  </div>

                  <div className="mt-1 text-sm leading-5 text-muted-foreground">
                    Standardfälle im Automatisierungsszenario
                  </div>

                  <div className="mt-3 text-xs leading-5 text-muted-foreground">
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

              <p className="mt-8 max-w-4xl text-xs leading-5 text-muted-foreground">
                Die Werte sind aus Forschung, Benchmarks und veröffentlichten
                Praxisfällen abgeleitete Modellannahmen. Sie wurden nicht
                gemeinsam in einem konkreten Unternehmen gemessen.
              </p>
            </div>
          </div>
        </section>

        {/* 02 SOLUTION & PROCESS LOGIC */}
        <section className="section-light border-b border-border/60">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
            <SectionTitle
              number="02"
              title="Lösung & Prozesslogik"
              text="Der Workflow übernimmt die repetitiven Schritte des Auftragseingangs: PDF-Bestellungen werden automatisch erfasst, strukturiert und dem passenden Angebot zugeordnet. Anschließend prüft das System Positionen, Mengen, Preise, Liefertermine und Konditionen regelbasiert."
            />

            <div className="mt-8 max-w-3xl space-y-4">
              <p className="leading-7 text-muted-foreground">
                Eindeutige Standardfälle werden automatisch weiterverarbeitet.
                Dadurch kann ein großer Teil der manuellen Routinearbeit
                entfallen.
              </p>

              <p className="leading-7 text-muted-foreground">
                Abweichungen und unsichere Zuordnungen werden dagegen nicht
                automatisch übergangen: Das System dokumentiert den Fall,
                stoppt die Verarbeitung und übergibt ihn gezielt an einen
                Mitarbeiter.
              </p>
            </div>

            {/* PROZESSMODELL & DATENMODELL */}
            <div className="mt-14">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Prozessmodell & Datenmodell
              </p>

              <ProjectModelTabs />

              <p className="mt-4 text-xs leading-5 text-muted-foreground">
                Zusätzlich berücksichtigt: Dubletten, unvollständige
                Bestellungen und Fälle ohne ausreichend sichere
                Angebotszuordnung.
              </p>
            </div>

            {/* ZENTRALE PROZESSPFADE */}
            <div className="mt-12">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Drei zentrale Prozesspfade
              </p>

              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {/* HAPPY PATH */}
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-secondary">
                    <CheckCircle2 className="size-5 text-foreground" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-foreground">
                    Happy Path
                  </h3>

                  <div className="mt-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                      Situation
                    </p>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Das Angebot ist eindeutig zugeordnet und Bestellung und
                      Angebot stimmen in allen relevanten Punkten überein.
                    </p>
                  </div>

                  <div className="mt-auto pt-6">
                    <div className="border-t border-border pt-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                        Systemreaktion
                      </p>

                      <p className="mt-2 text-sm font-medium leading-6 text-foreground">
                        Auftrag und Positionen werden angelegt und die
                        Auftragsbestätigung wird vorbereitet.
                      </p>
                    </div>
                  </div>
                </div>

                {/* ABWEICHUNG */}
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-secondary">
                    <AlertTriangle className="size-5 text-foreground" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-foreground">
                    Abweichung erkannt
                  </h3>

                  <div className="mt-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                      Situation
                    </p>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Bestellung und Angebot unterscheiden sich beispielsweise
                      bei Menge, Preis, Liefertermin oder Konditionen.
                    </p>
                  </div>

                  <div className="mt-auto pt-6">
                    <div className="border-t border-border pt-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                        Systemreaktion
                      </p>

                      <p className="mt-2 text-sm font-medium leading-6 text-foreground">
                        Die Abweichung wird dokumentiert und als Klärfall an
                        einen Mitarbeiter übergeben.
                      </p>
                    </div>
                  </div>
                </div>

                {/* FUZZY */}
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-secondary">
                    <UserCheck className="size-5 text-foreground" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-foreground">
                    Keine eindeutige Zuordnung
                  </h3>

                  <div className="mt-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                      Situation
                    </p>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Die Bestellung enthält keine ausreichend eindeutige
                      Referenz auf ein vorhandenes Angebot.
                    </p>
                  </div>

                  <div className="mt-auto pt-6">
                    <div className="border-t border-border pt-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                        Systemreaktion
                      </p>

                      <p className="mt-2 text-sm font-medium leading-6 text-foreground">
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
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
            <SectionTitle
              number="03"
              title="Das System in der Praxis"
              text="Drei typische Fälle zeigen, wie das System je nach Bestellsituation unterschiedlich reagiert."
            />

            <ProjectDemoTabs />
          </div>
        </section>

        {/* 04 ECONOMIC POTENTIAL */}
        <section className="section-light border-b border-border/60">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
            <SectionTitle
              number="04"
              title="Wirtschaftliches Potenzial"
              text="Da der MVP nicht im realen Unternehmensbetrieb getestet wurde, wird kein gemessener ROI ausgewiesen. Stattdessen zeigt das Szenario, welchen manuellen Zeitaufwand eine Automatisierung grundsätzlich adressieren könnte."
            />

            {/* IST-AUFWAND */}
            <div className="mt-10 rounded-2xl border border-border bg-card p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Modellierter manueller Aufwand
              </p>

              <div className="mt-7 grid gap-8 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
                <div>
                  <p className="font-serif text-3xl font-semibold text-foreground">
                    1.500
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Bestellungen / Monat
                  </p>
                </div>

                <div className="hidden text-xl text-muted-foreground md:block">
                  ×
                </div>

                <div>
                  <p className="font-serif text-3xl font-semibold text-foreground">
                    12 Min.
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Bearbeitung / Bestellung
                  </p>
                </div>

                <div className="hidden text-xl text-muted-foreground md:block">
                  =
                </div>

                <div>
                  <p className="font-serif text-3xl font-semibold text-foreground">
                    300 Std.
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    manueller Aufwand / Monat
                  </p>
                </div>
              </div>

              <p className="mt-6 border-t border-border pt-5 font-mono text-sm text-muted-foreground">
                1.500 × 12 Min. = 18.000 Min. = 300 Std. / Monat
              </p>
            </div>

            {/* SZENARIO */}
            <div className="mt-6 rounded-2xl border border-border bg-card p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Automatisierungsszenario
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-6 text-muted-foreground">
                Veröffentlichte Praxisfälle zeigen, dass bei bereits
                automatisierten Auftragsprozessen Größenordnungen um 70 %
                touchless verarbeiteter Aufträge erreichbar sein können. Dieser
                Wert wird hier ausschließlich als Szenario verwendet.
              </p>

              <div className="mt-7 grid gap-8 md:grid-cols-[1fr_auto_1fr] md:items-center">
                <div>
                  <p className="font-serif text-3xl font-semibold text-foreground">
                    300 Std.
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    manueller Aufwand / Monat
                  </p>
                </div>

                <div className="hidden text-xl text-muted-foreground md:block">
                  × 70 % =
                </div>

                <div>
                  <p className="font-serif text-4xl font-semibold text-foreground">
                    bis zu 210 Std.
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    theoretisch adressierbare Routinearbeit / Monat
                  </p>
                </div>
              </div>

              <p className="mt-6 border-t border-border pt-5 font-mono text-sm text-muted-foreground">
                300 Std. × 70 % = 210 Std. / Monat
              </p>
            </div>

            {/* ERGEBNIS */}
            <div className="mt-6 rounded-2xl bg-foreground p-7 text-background sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-background/60">
                Kernaussage
              </p>

              <div className="mt-6">
                <p className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
                  bis zu 210 Stunden / Monat
                </p>

                <p className="mt-3 max-w-3xl text-sm leading-6 text-background/70">
                  könnten im gewählten Szenario aus der manuellen
                  Standardfallbearbeitung herausgenommen werden.
                </p>
              </div>

              <div className="mt-7 border-t border-background/15 pt-6">
                <p className="max-w-4xl text-sm leading-6 text-background/70">
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

            {/* EINORDNUNG */}
            <div className="mt-5 max-w-4xl text-xs leading-5 text-muted-foreground">
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

              <p className="mt-2">
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
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
            <SectionTitle
              number="05"
              title="Einordnung"
              text="Die Case Study zeigt meine Herangehensweise an Prozessanalyse, Automatisierung und wirtschaftliche Bewertung – nicht den Erfolg eines realen Kundenprojekts."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {/* WAS DIE CASE STUDY ZEIGT */}
              <div className="rounded-2xl border border-border bg-card p-7">
                <div className="flex size-10 items-center justify-center rounded-xl bg-secondary">
                  <CheckCircle2 className="size-5 text-foreground" />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  Was die Case Study zeigt
                </h3>

                <div className="mt-6 space-y-5">
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Prozessverständnis
                    </p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      Analyse und Modellierung eines vollständigen
                      B2B-Auftragsprozesses.
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Entscheidungslogik
                    </p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      Klare Regeln für Standardfälle, Abweichungen und unsichere
                      Entscheidungen.
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Technische Umsetzung
                    </p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      Umsetzung und Test eines funktionsfähigen
                      Automatisierungs-MVP.
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Wirtschaftliche Einordnung
                    </p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      Transparentes Szenario auf Basis recherchierter Annahmen,
                      ohne einen real gemessenen ROI zu behaupten.
                    </p>
                  </div>
                </div>
              </div>

              {/* WAS DIE CASE STUDY NICHT ZEIGT */}
              <div className="rounded-2xl border border-border bg-card p-7">
                <div className="flex size-10 items-center justify-center rounded-xl bg-secondary">
                  <AlertTriangle className="size-5 text-foreground" />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  Was die Case Study nicht behauptet
                </h3>

                <div className="mt-6 space-y-5">
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Kein reales Kundenprojekt
                    </p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      Unternehmen, Prozessdaten und konkrete Ausgangssituation
                      sind modelliert.
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Kein Produktiveinsatz
                    </p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      Der MVP wurde prototypisch umgesetzt und getestet, aber
                      nicht in einem realen Unternehmen betrieben.
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Keine gemessene Zeit- oder Kostenersparnis
                    </p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      Das wirtschaftliche Ergebnis ist ein Szenario und kein
                      Vorher-Nachher-Messergebnis.
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Kein allgemeingültiger ROI
                    </p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      Der tatsächliche Business Case hängt vom konkreten
                      Unternehmen, Prozess und Automatisierungsgrad ab.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-5 max-w-4xl text-sm leading-6 text-muted-foreground">
              Dieses Projekt war mein erster vollständiger
              Automatisierungs-Case.
            </p>

            <p className="mt-0 max-w-4xl text-sm leading-6 text-muted-foreground">
              Künftige Projekte werde ich direkt an realen Unternehmen und
              tatsächlich validierten Prozessproblemen ausrichten.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}