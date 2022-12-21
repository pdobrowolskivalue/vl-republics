import BlockchainBackground from '@assets/images/blockchain-background.webp'
import FrontendBackground from '@assets/images/frontend-background.webp'
import { BlockchainBadge, FrontendBadge } from '@components/badges'
import { BlockchainMotive, FrontendMotive } from '@components/motives'
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
}
