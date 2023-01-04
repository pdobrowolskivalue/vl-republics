export enum Republics {
  blockchain = 'blockchain',
  frontend = 'frontend',
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
  linksSections: LinksSection[]
}

export type LinksSection = {
  sectionTitle: string
  links: Link[]
}

export type Link = {
  text: string
  label: string
  url: string
}

export type Person = {
  id: string
  title: string
  fullName: string
  description: string
  photo: {
    url?: string
  }
}

export type WelcomeCard = {
  id: string
  title: string
  description: string
  iconUrl: string
}
