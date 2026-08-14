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
    <div className="mt-6 sm:mt-8 2xl:mt-10">
      {/* REITER */}
      <div className="grid grid-cols-2 gap-2 rounded-xl border border-border bg-card/60 p-1.5 sm:gap-3 sm:p-2">
        {models.map((model) => {
          const active = activeModel.id === model.id
          const ModelIcon = model.icon

          return (
            <button
              key={model.id}
              type="button"
              onClick={() => setActiveModel(model)}
              className={`flex min-w-0 items-center justify-center gap-2 rounded-lg border px-3 py-3 text-center text-xs font-medium leading-5 transition-all duration-200 sm:px-5 sm:text-sm 2xl:px-6 2xl:py-4 2xl:text-base ${
                active
                  ? 'border-primary/40 bg-primary text-primary-foreground shadow-sm'
                  : 'border-transparent bg-background/70 text-muted-foreground hover:border-border hover:bg-background hover:text-foreground'
              }`}
            >
              <ModelIcon
                className={`size-4 shrink-0 2xl:size-5 ${
                  active
                    ? 'text-primary-foreground'
                    : 'text-muted-foreground'
                }`}
                aria-hidden="true"
              />

              <span>{model.label}</span>
            </button>
          )
        })}
      </div>

      {/* VIDEO */}
      <div className="mt-5 overflow-hidden rounded-xl border border-border bg-background sm:mt-6 sm:rounded-2xl 2xl:mt-8">
        {activeModel.youtubeId ? (
          <div className="aspect-video w-full bg-black">
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
            <div className="max-w-md px-4 text-center sm:px-6 2xl:max-w-xl 2xl:px-8">
              <div className="mx-auto flex size-12 items-center justify-center rounded-full border border-border bg-background sm:size-14 2xl:size-16">
                <Icon className="size-5 text-foreground sm:size-6 2xl:size-7" />
              </div>

              <p className="mt-4 text-sm font-medium text-foreground sm:text-base 2xl:mt-5 2xl:text-lg">
                {activeModel.title}
              </p>

              <p className="mt-2 text-xs leading-5 text-muted-foreground sm:text-sm sm:leading-6 2xl:mt-3 2xl:text-base 2xl:leading-7">
                {activeModel.description}
              </p>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground 2xl:mt-5 2xl:text-sm">
                <PlayCircle className="size-4 shrink-0 2xl:size-5" />
                Video nicht verfügbar
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}