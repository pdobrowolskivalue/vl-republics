import Image from 'next/image'
import tw from 'twin.macro'

import Welcome from '../../assets/images/republic-welcome-background.png'
import Materials from '../../assets/images/republic-materials-background.png'
import WhoIsWho from '../../assets/images/republic-who-is-who-background.png'

export enum ERepublicBackground {
  welcome,
  materials,
  'who-is-who',
}

const republicBackground = {
  [ERepublicBackground.welcome]: Welcome,
  [ERepublicBackground.materials]: Materials,
  [ERepublicBackground['who-is-who']]: WhoIsWho,
}

const ColorOverlay = tw.div`absolute inset-0 bg-vlr-dark/40 z-10`

export const Background = ({ type, useOverlay = false }: { type: ERepublicBackground; useOverlay?: boolean }) => {
  return (
    <div>
      {useOverlay && <ColorOverlay />}
      <Image src={republicBackground[type]} alt="background" layout="fill" objectFit="cover" objectPosition="center" />
    </div>
  )
}
