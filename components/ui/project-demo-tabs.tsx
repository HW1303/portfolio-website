'use client'

import { useState } from 'react'

const demos = [
  {
    id: 'intro',
    label: 'Einführung',
    title: 'Einführung',
    description:
      'Kurze Einführung in den Aufbau der Demo und die gezeigten Prozessfälle.',
    youtubeId: 'iifxYo8YmQQ',
  },
  {
    id: 'happy',
    label: 'Happy-Path',
    title: 'Happy-Path',
    description:
      'Bestellung und Angebot stimmen überein. Der Auftrag wird automatisch verarbeitet.',
    youtubeId: 'pPkU5scNYPM',
  },
  {
    id: 'deviation',
    label: 'Direkte Abweichung',
    title: 'Direkte Abweichung',
    description:
      'Das Angebot ist eindeutig zugeordnet, aber relevante Bestelldaten weichen ab. Das System erstellt einen Klärfall.',
    youtubeId: 'Fn9SpTvSC4c',
  },
  {
    id: 'fuzzy',
    label: 'Fuzzy-Matching',
    title: 'Fuzzy-Zuordnung',
    description:
      'Eine eindeutige Angebotsreferenz fehlt. Das System bewertet mögliche Kandidaten und übergibt den besten Treffer zur Prüfung.',
    youtubeId: 'YndSIXF7xkI',
  },
]

export function ProjectDemoTabs() {
  const [activeDemo, setActiveDemo] = useState(demos[0])

  return (
    <div className="mt-8 sm:mt-10 2xl:mt-12">
      <div className="grid grid-cols-2 gap-1 border-b border-border sm:flex sm:gap-1 2xl:gap-2">
        {demos.map((demo) => {
          const active = activeDemo.id === demo.id

          return (
            <button
              key={demo.id}
              type="button"
              onClick={() => setActiveDemo(demo)}
              className={`relative min-w-0 px-2 py-3 text-center text-xs font-medium leading-5 transition-colors sm:px-4 sm:text-sm 2xl:px-5 2xl:py-4 2xl:text-base ${
                active
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {demo.label}

              {active && (
                <span className="absolute inset-x-1 bottom-[-1px] h-px bg-foreground sm:inset-x-0" />
              )}
            </button>
          )
        })}
      </div>

      <div className="mt-5 overflow-hidden rounded-xl border border-border bg-background sm:mt-6 sm:rounded-2xl 2xl:mt-8">
        <div className="aspect-video w-full bg-black">
          <iframe
            key={activeDemo.youtubeId}
            src={`https://www.youtube-nocookie.com/embed/${activeDemo.youtubeId}?rel=0&playsinline=1`}
            title={activeDemo.title}
            className="h-full w-full"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>

      <div className="mt-4 2xl:mt-6">
        <p className="text-sm font-medium text-foreground sm:text-base 2xl:text-lg">
          {activeDemo.title}
        </p>

        <p className="mt-1 max-w-3xl text-sm leading-6 text-muted-foreground 2xl:mt-2 2xl:max-w-4xl 2xl:text-base 2xl:leading-7">
          {activeDemo.description}
        </p>
      </div>
    </div>
  )
}