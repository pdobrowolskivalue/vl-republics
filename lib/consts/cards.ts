import { Access, Create, Honors, Rocket } from '@components/big-icons'
import { Cards } from '@type/cards'

export const gridCards = {
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
}
