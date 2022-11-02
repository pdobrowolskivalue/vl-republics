import Image from 'next/image'
import 'twin.macro'

import { SmallLinkButton } from '@components/common/LinkButton'
import { fileData } from '@lib/consts/fileData'
import GoogleDocIcon from '@assets/images/file-type-icons/google-doc.png'

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
  const dateType = new Date(date)
  const dateFormatted = dateType.toLocaleDateString('pl-PL', { day: '2-digit', month: '2-digit', year: 'numeric' })

  return (
    <div tw="flex gap-4 flex-col min-h-[80px] py-7 px-10 border-solid border-[1px] border-vlr-accent/20 rounded-lg backdrop-blur-sm md:flex-row md:gap-8">
      <div tw="flex flex-col text-left md:flex-grow lg:flex-row lg:gap-8">
        <div tw="text-base font-medium md:flex-grow">{title}</div>
        <div tw="my-auto text-xs text-vlr-accent md:min-w-[130px]">{author}</div>
      </div>
      <div tw="flex items-center gap-8">
        <div tw="flex-grow min-w-[150px] flex flex-col text-left md:flex-row md:gap-8 md:justify-center">
          <div tw="flex text-left md:justify-center">
            <div tw="flex my-auto justify-center min-w-[18px]">
              <Image
                src={fileData[fileType] ? fileData[fileType].image : GoogleDocIcon}
                width="14px"
                height="18px"
                alt="file type"
              />
            </div>
            <div tw="my-auto text-left ml-3 text-xs md:text-sm md:min-w-[95px]">
              {fileData[fileType] ? fileData[fileType].name : 'Other type'}
            </div>
          </div>
          <div tw="text-xs text-white/40 md:min-w-[75px] md:text-sm">{dateFormatted}</div>
        </div>
        <SmallLinkButton href={url}>DOWNLOAD</SmallLinkButton>
      </div>
    </div>
  )
}

export default MaterialCard
