import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
import tw from 'twin.macro'

import { LinkButton } from '@components/common/ButtonAndTagStyle'

type HeroProps = {
  id: string
  title: string
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

const Hero = ({ id, title, motive: Motive, background }: HeroProps) => {
  return (
    <HeroStyled>
      <h1
        css={[
          tw`font-poppins font-semibold text-[64px] leading-[96px] z-50 [text-shadow:0 8px 15px rgb(0 0 0)]`,
          id === 'create-new-republic' ? tw`text-[42px] leading-[63px]` : tw`text-[64px] leading-[96px]`,
        ]}
      >
        {title}
      </h1>
      <LayersStyled>
        <Link className="full-cover" href={id === 'create-new-republic' ? '#create-new-republic' : `/republic/${id}`}>
          <LinkButton tw="z-40 bottom-[74px] absolute left-[50%] translate-x-[-50%]">
            {id === 'create-new-republic' ? 'Zaproponuj republikę' : 'Dowiedz się więcej'}
          </LinkButton>
        </Link>
        <GradientOverlay className="full-cover" tw="z-30" />
        <div className="full-cover" tw="z-20 px-5 md:px-0 max-w-[815px] mx-auto">
          <Motive />
        </div>
        <div className="full-cover" tw="z-10 opacity-50">
          <Image src={background} alt="background" layout="fill" objectFit="cover" objectPosition="center" />
        </div>
      </LayersStyled>
    </HeroStyled>
  )
}
export default Hero
