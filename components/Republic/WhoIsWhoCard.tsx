import Image from 'next/image'
import { styled } from 'twin.macro'

import { Honors } from '@components/big-icons'

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
    <div tw="flex py-6 px-[60px] items-center text-left border-solid border-[1px] border-vlr-accent/20 rounded-lg backdrop-blur-sm">
      <div tw="mr-20 w-[88px] h-[88px] text-center">
        {photo ? (
          <div tw="relative">
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
          <div tw="w-[80px]">
            <Honors />
          </div>
        )}
      </div>
      <div tw="mr-20 max-w-[205px] w-[205px]">
        <div tw="text-sm">{role}</div>
        <div tw="text-[22px] leading-[33px] font-medium">{name}</div>
      </div>
      <div tw="max-w-[390px]">{description}</div>
    </div>
  )
}
