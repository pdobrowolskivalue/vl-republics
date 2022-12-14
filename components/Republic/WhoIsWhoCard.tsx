import Image from 'next/image'
import { styled } from 'twin.macro'

import { Honors } from '@components/big-icons'
import { BlurCardContainer } from '@components/Republic/BlurCardContainer'

import ImageFrame from '../../assets/images/frame.png'

const ImageClipPath = styled.div`
  position: relative;
  height: 81px;
  width: 70px;
  clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
`

export const WhoIsWhoCard = ({
  role,
  name,
  description,
  photo,
}: {
  role: string
  name: string
  description: string
  photo?: string
}) => {
  return (
    <BlurCardContainer tw="flex">
      <div tw="flex flex-col xs:flex-row xs:items-center justify-center gap-10 lg:gap-20">
        <div tw="w-[88px] mx-auto xs:mx-0">
          {photo ? (
            <div tw="top-[-4px] relative">
              <div tw="h-[84px] w-[80px]">
                <Image src={ImageFrame} alt="image frame" />
              </div>
              <div tw="absolute top-[6px] left-[6px]">
                <ImageClipPath>
                  <Image src={photo} layout="fill" objectFit="cover" alt={name} />
                </ImageClipPath>
              </div>
            </div>
          ) : (
            <div tw="w-[80px] mx-auto">
              <Honors />
            </div>
          )}
        </div>
        <div tw="md:w-[200px]">
          <div tw="font-poppins font-medium leading-[21px] text-vlr-accent">{role}</div>
          <div tw="font-poppins font-medium text-[20px] leading-[30px]">{name}</div>
        </div>
      </div>

      <div tw="leading-[24px] my-auto">{description}</div>
    </BlurCardContainer>
  )
}
