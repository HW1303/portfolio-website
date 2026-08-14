'use client'

import { useState } from 'react'
import { Database, PlayCircle, Workflow } from 'lucide-react'

const models = [
  {
    id: 'bpmn',
    label: 'BPMN-Prozessmodell',
    title: 'BPMN-Prozessmodell',
    description:
      'Der vollständige Ablauf vom Eingang der Bestellung über Zuordnung und Prüfung bis zur automatischen Verarbeitung oder manuellen Klärung.',
    icon: Workflow,
    youtubeId: 'EVAQ9KIjXfg',
  },
  {
    id: 'data',
    label: 'Datenmodell',
    title: 'Datenmodell',
    description:
      'Die zentrale Datenstruktur hinter dem Prozess: Kunden, Angebote, Bestellungen, Positionen und Klärfälle.',
    icon: Database,
    youtubeId: 'Dm0u8BHiqqg',
  },
]

export function ProjectModelTabs() {
  const [activeModel, setActiveModel] = useState(models[0])

  const Icon = activeModel.icon

  return (
    <div className="mt-8">
      {/* REITER */}
      <div className="flex flex-wrap gap-2 border-b border-border">
        {models.map((model) => {
          const active = activeModel.id === model.id

          return (
            <button
              key={model.id}
              type="button"
              onClick={() => setActiveModel(model)}
              className={`relative px-4 py-3 text-sm font-medium transition-colors ${
                active
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {model.label}

              {active && (
                <span className="absolute inset-x-0 bottom-[-1px] h-px bg-foreground" />
              )}
            </button>
          )
        })}
      </div>

      {/* VIDEO */}
      <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-background">
        {activeModel.youtubeId ? (
          <div className="aspect-video w-full">
            <iframe
              key={activeModel.youtubeId}
              src={`https://www.youtube-nocookie.com/embed/${activeModel.youtubeId}?rel=0&playsinline=1`}
              title={activeModel.title}
              className="h-full w-full"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="flex aspect-video items-center justify-center bg-muted/20">
            <div className="max-w-md px-6 text-center">
              <div className="mx-auto flex size-14 items-center justify-center rounded-full border border-border bg-background">
                <Icon className="size-6 text-foreground" />
              </div>

              <p className="mt-4 font-medium text-foreground">
                {activeModel.title}
              </p>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {activeModel.description}
              </p>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <PlayCircle className="size-4" />
                Video nicht verfügbar
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}