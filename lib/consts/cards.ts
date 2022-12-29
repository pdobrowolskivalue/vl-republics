import { Access, Create, Honors, Rocket, Knowledge, Challenges, Events, Integration } from '@components/big-icons'
import { Cards } from '@type/cards'

export const whatCanIInRepublic = {
  title: 'Co mogę w ramach republik?',
  cards: {
    [Cards.travel]: {
      icon: Rocket,
      description:
        'Podróżuj między republikami i próbuj swoich sił na nowych terytoriach! Sięgnij po wiedze wypracowaną w ramach Republik.',
    },
    [Cards.access]: {
      icon: Access,
      description:
        'Dołączaj do inicjatyw Republik, jeżeli szczególnie czujesz mięte do danej republiki zgłoś akces aby ją współtworzyć.',
    },
    [Cards.create]: {
      icon: Create,
      description: 'Ogłosić własną republikę - jeśli w naszym wszechświecie brakuje ważnego obszaru',
    },
    [Cards.honors]: {
      icon: Honors,
      description: 'Zostań Komandorem i rozwijaj się w nowym obszarze technologicznym',
    },
  },
}

export const whatDoesGiveRepublic = {
  title: 'Co dają republiki ValueDzikom?',
  cards: {
    [Cards.knowledge]: {
      icon: Knowledge,
      description:
        'Mają rozwiać wiedzę w danym obszarze technologicznym, szerzyć ją zarówno wewnątrz firmy, jak i na zewnątrz.',
    },
    [Cards.challenges]: {
      icon: Challenges,
      description: 'Przynosić cross technologiczne wyzwania',
    },
    [Cards.events]: {
      icon: Events,
      description:
        'Mogą być punktem wyjścia do organizacji hackathonów, wyzwań programistycznych, wykładów tematycznych.',
    },
    [Cards.integration]: {
      icon: Integration,
      description: 'Integrować, zachęcać innych do udziału w firmowych inicjatywach, tworzyć unikatową wartość firmy.',
    },
  },
}
