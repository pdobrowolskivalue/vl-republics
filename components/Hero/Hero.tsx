import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
import tw from 'twin.macro'

import { LinkButton } from '@components/common/LinkButton'

type HeroProps = {
  id: string
  title: string
  badge: React.ElementType
  motive: React.ElementType
  background: StaticImageData
}

const HeroStyled = tw.div`
  relative w-full flex items-center justify-center
  border-t border-t-vlr-accent/30

  [> h2]:(text-center)
`

const LayersStyled = tw.div`
  h-[520px]
  [> div]:(absolute inset-0 flex items-center justify-center)
`

const GradientOverlay = tw.div`
  bg-gradient-to-b from-transparent via-transparent to-vlr-dark
`

const Hero = ({ id, title, badge: Badge, motive: Motive, background }: HeroProps) => {
  return (
    <HeroStyled>
      <h2 tw="z-50 text-6xl font-weight[600] text-shadow[0 8px 15px rgb(0 0 0)]">{title}</h2>
      <LayersStyled>
        <div tw="z-40 w-20 !left-28">
          <Badge />
        </div>
        <Link href={`/republic/${id}`}>
          <LinkButton tw="z-40 bottom-14 absolute left-[50%] translate-x-[-50%] py-2">Dowiedz się więcej</LinkButton>
        </Link>
        <GradientOverlay tw="z-30" />
        <div tw="z-20">
          <Motive />
        </div>
        <div tw="z-10">
          <Image src={background} alt="background" layout="fill" objectFit="cover" objectPosition="center" />
        </div>
      </LayersStyled>
    </HeroStyled>
  )
}
export default Hero
