export enum Republics {
  blockchain = 'blockchain',
  frontend = 'frontend',
  seo = 'seo',
  'machine-learning' = 'machine-learning',
}

export type RepublicData = {
  leadText: string
  welcomeHeader: string
  welcomeDescription: string
  whoHeader: string
  whoDescription: string
  persons: Person[]
  currentGoals: string
  futureGoals: string
}

type Person = {
  id: string
  title: string
  fullName: string
  description: string
}
