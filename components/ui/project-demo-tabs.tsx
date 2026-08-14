'use client'

import { useState } from 'react'

const demos = [
  {
    id: 'intro',
    label: 'Einführung',
    title: 'Einführung',
    description:
      'Kurze Einführung in den Aufbau der Demo und die gezeigten Prozessfälle.',
    videoUrl: '/videos/Einführung.mp4',
  },
  {
    id: 'happy',
    label: 'Happy-Path',
    title: 'Happy-Path',
    description:
      'Bestellung und Angebot stimmen überein. Der Auftrag wird automatisch verarbeitet.',
    videoUrl: '/videos/Happy.mp4',
  },
  {
    id: 'deviation',
    label: 'Direkte Abweichung',
    title: 'Direkte Abweichung',
    description:
      'Das Angebot ist eindeutig zugeordnet, aber relevante Bestelldaten weichen ab. Das System erstellt einen Klärfall.',
    videoUrl: '/videos/Abweichung.mp4',
  },
  {
    id: 'fuzzy',
    label: 'Fuzzy-Matching',
    title: 'Fuzzy-Zuordnung',
    description:
      'Eine eindeutige Angebotsreferenz fehlt. Das System bewertet mögliche Kandidaten und übergibt den besten Treffer zur Prüfung.',
    videoUrl: '/videos/Fuzzy.mp4',
  },
]

export function ProjectDemoTabs() {
  const [activeDemo, setActiveDemo] = useState(demos[0])

  return (
    <div className="mt-10">
      {/* REITER */}
      <div className="flex flex-wrap gap-2 border-b border-border">
        {demos.map((demo) => {
          const active = activeDemo.id === demo.id

          return (
            <button
              key={demo.id}
              type="button"
              onClick={() => setActiveDemo(demo)}
              className={`relative px-4 py-3 text-sm font-medium transition-colors ${
                active
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {demo.label}

              {active && (
                <span className="absolute inset-x-0 bottom-[-1px] h-px bg-foreground" />
              )}
            </button>
          )
        })}
      </div>

      {/* VIDEO */}
      <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-background">
        <div className="aspect-video bg-black">
          <video
            key={activeDemo.videoUrl}
            src={activeDemo.videoUrl}
            title={activeDemo.title}
            controls
            preload="metadata"
            className="h-full w-full"
          />
        </div>
      </div>

      {/* KURZE BESCHREIBUNG */}
      <div className="mt-4">
        <p className="text-sm font-medium text-foreground">
          {activeDemo.title}
        </p>

        <p className="mt-1 max-w-3xl text-sm leading-6 text-muted-foreground">
          {activeDemo.description}
        </p>
      </div>
    </div>
  )
}