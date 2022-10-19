import BlockchainBackground from '@assets/images/blockchain-background.webp'
import FrontendBackground from '@assets/images/frontend-background.webp'
import MLBackground from '@assets/images/ml-background.webp'
import SEOBackground from '@assets/images/seo-background.webp'
import { BlockchainBadge, FrontendBadge, MLBadge, SeoBadge } from '@components/badges'
import { BlockchainMotive, FrontendMotive, MLMotive, SeoMotive } from '@components/motives'
import { Republics } from 'types/republic'

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
  [Republics.seo]: {
    title: 'SEO',
    badge: SeoBadge,
    motive: SeoMotive,
    background: SEOBackground,
  },
  [Republics['machine-learning']]: {
    title: 'Machine Learning',
    badge: MLBadge,
    motive: MLMotive,
    background: MLBackground,
  },
}
