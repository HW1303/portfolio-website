export type Project = {
  slug: string
  title: string
  teaser: string
  tags: string[]
}

export const projects: Project[] = [
  {
    slug: 'n8n-bestell-angebotsabgleich',

    title: 'Automatisierter B2B-Auftragseingang',

    teaser:
      'Vom PDF-Anhang zum geprüften Auftrag: Ich habe einen manuellen B2B-Auftragseingang analysiert, modelliert und als MVP automatisiert – inklusive Abweichungsprüfung und Human-in-the-Loop.',

    tags: [
      'Prozessautomatisierung',
      'BPMN',
      'n8n',
      'PostgreSQL',
      'OpenAI',
    ],
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}