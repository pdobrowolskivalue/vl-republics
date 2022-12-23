import BlockchainBackground from '@assets/images/blockchain-background.webp'
import FrontendBackground from '@assets/images/frontend-background.webp'
import CreateNewRepublicBackground from '@assets/images/create-new-republic-background.png'
import { BlockchainBadge, CreateNewRepublicBadge, FrontendBadge } from '@components/badges'
import { BlockchainMotive, CreateNewRepublicMotive, FrontendMotive } from '@components/motives'
import { Republics } from '@type/republic'

export const republics = {
  [Republics.blockchain]: {
    title: 'Blockchain',
    badge: BlockchainBadge,
    motive: BlockchainMotive,
    background: BlockchainBackground,
  },
  [Republics.frontend]: {
    title: 'Frontend',
    badge: FrontendBadge,
    motive: FrontendMotive,
    background: FrontendBackground,
  },
  ['create-new-republic']: {
    title: 'Stwórz nową Republikę',
    badge: CreateNewRepublicBadge,
    motive: CreateNewRepublicMotive,
    background: CreateNewRepublicBackground,
  },
}
