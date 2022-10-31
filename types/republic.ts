export enum Republics {
  blockchain = 'blockchain',
  frontend = 'frontend',
  seo = 'seo',
  'machine-learning' = 'machine-learning',
}

export type RepublicData = {
  republicType: Republics
  leadText: string
  leadAuthor: string
  welcomeHeader: string
  welcomeDescription: string
  welcomeCards: WelcomeCard[]
  whoHeader: string
  whoDescription: string
  persons: Person[]
  reachedGoals: string
  currentGoals: string
  files: File[]
}

export type Person = {
  id: string
  title: string
  fullName: string
  description: string
  photoUrl: string
}

export type WelcomeCard = {
  id: string
  title: string
  description: string
  iconUrl: string
}

export type File = {
  id: string
  title: string
  author: string
  type: string
  date: string
  url: string
}
