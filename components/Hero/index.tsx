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
  [> div]:(absolute flex items-center justify-center)
  [> .full-cover]:(inset-0)
`

const GradientOverlay = tw.div`
  bg-gradient-to-b from-transparent via-transparent to-vlr-dark
`

const BadgeContainer = tw.div`
  z-40 w-20 top-14 left-1/2 translate-x-[-50%] lg:left-28 lg:top-1/2 lg:translate-y-[-50%]
  after:(z-[-1] absolute -inset-2 bg-black/10 shadow-lg backdrop-blur-sm clip-path[polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)] rounded-2xl)
`

const Hero = ({ id, title, badge: Badge, motive: Motive, background }: HeroProps) => {
  return (
    <HeroStyled>
      <h2 tw="z-50 text-6xl font-weight[600] text-shadow[0 8px 15px rgb(0 0 0)]">{title}</h2>
      <LayersStyled>
        <BadgeContainer>
          <Badge />
        </BadgeContainer>
        <Link className="full-cover" href={`/republic/${id}`}>
          <LinkButton tw="z-40 bottom-14 absolute left-[50%] translate-x-[-50%] py-2">Dowiedz się więcej</LinkButton>
        </Link>
        <GradientOverlay className="full-cover" tw="z-30" />
        <div className="full-cover" tw="z-20 px-5 md:px-0">
          <Motive />
        </div>
        <div className="full-cover" tw="z-10">
          <Image src={background} alt="background" layout="fill" objectFit="cover" objectPosition="center" />
        </div>
      </LayersStyled>
    </HeroStyled>
  )
}
export default Hero
