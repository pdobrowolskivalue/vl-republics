import 'twin.macro'
import Image from 'next/image'

import renderFileTypeIcon from '@components/Republic/renderFileTypeIcon'
import { SmallLinkButton } from '@components/common/LinkButton'

function MaterialCard({
  title,
  author,
  fileType,
  date,
  url,
}: {
  title: string
  author: string
  fileType: string
  date: string
  url: string
}) {
  return (
    <div tw="flex h-20 px-10 items-center text-left border-solid border-[1px] border-vlr-accent/20 rounded-lg backdrop-blur-sm">
      <div tw="text-base font-medium max-w-[406px] w-[406px]">{title}</div>
      <div tw="text-xs text-vlr-accent max-w-[155px] w-[155px]">{author}</div>
      <div tw="max-w-[33px] w-[33px]">
        <Image src={renderFileTypeIcon({ fileType })} width="20px" height="20px" alt="Icon of ${fileType}" />
      </div>
      <div tw="text-sm text-white/40 max-w-[147px] w-[147px]">{fileType}</div>
      <div tw="text-sm max-w-[125px] w-[125px]">{date}</div>
      <SmallLinkButton href={url}>DOWNLOAD</SmallLinkButton>
    </div>
  )
}

export default MaterialCard
