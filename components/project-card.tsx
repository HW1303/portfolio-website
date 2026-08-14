import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Project } from '@/lib/projects'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projekt/${project.slug}`}
      className="group block rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50"
    >
      <article className="flex h-full flex-col">
        <h3 className="font-serif text-lg font-semibold leading-snug text-card-foreground text-balance">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
          {project.teaser}
        </p>
        {project.tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Eingesetzte Werkzeuge">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
          Projekt ansehen
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </article>
    </Link>
  )
}
