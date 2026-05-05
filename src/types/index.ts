export type ProjectType = 'work' | 'personal' | 'film'
export type ProjectCat = 'fullstack' | 'product' | 'design' | 'film'

export interface Project {
  id: string
  title: string
  blurb: string
  img: string
  role: string
  year: string
  tags: string[]
  cat: ProjectCat
  type: ProjectType
  live: boolean
  hasCase?: boolean
  repoUrl?: string
  liveUrl?: string
  youtubeUrl?: string
}

export interface Testimonial {
  img: string
  quote: string
  author: string
  role: string
  companyUrl?: string
}

export interface TimelineEntry {
  year: string
  title: string
  org: string
  tag?: string
}
