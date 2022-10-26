export enum Republics {
  blockchain = 'blockchain',
  frontend = 'frontend',
  seo = 'seo',
  'machine-learning' = 'machine-learning',
}

export type RepublicData = {
  leadText: string
  leadAuthor: string // to add
  welcomeHeader: string
  welcomeDescription: string
  welcomeCards: [WelcomeCard] //to add
  whoHeader: string
  whoDescription: string
  persons: [Person]
  reachedGoals: string
  currentGoals: string
  files: [File]
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
  title: string
  author: string
  type: string
  date: string
  url: string
}
