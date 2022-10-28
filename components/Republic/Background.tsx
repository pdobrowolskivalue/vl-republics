import Image from 'next/image'
import tw from 'twin.macro'

import { Republics } from '@type/republic'

import BlockchainBackground from '../../assets/images/blockchain-background.webp'
import FrontendBackground from '../../assets/images/frontend-background.webp'
import MlBackground from '../../assets/images/ml-background.webp'
import SeoBackground from '../../assets/images/seo-background.webp'

const republicBackground = {
  [Republics.blockchain]: BlockchainBackground,
  [Republics.seo]: SeoBackground,
  [Republics.frontend]: FrontendBackground,
  [Republics['machine-learning']]: MlBackground,
}

const ColorOverlay = tw.div`absolute inset-0 bg-vlr-dark/40 z-10`

export const Background = ({ republicType, useOverlay = false }: { republicType: Republics; useOverlay?: boolean }) => {
  return (
    <div>
      {useOverlay && <ColorOverlay />}
      <Image
        src={republicBackground[republicType]}
        alt="background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </div>
  )
}
