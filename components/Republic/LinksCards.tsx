import 'twin.macro'
import Link from 'next/link'

import { BlurCardContainer } from '@components/Republic/BlurCardContainer'

type linksSections = {
  sectionsIndex: string
  linksSections: Section[]
}

type Section = {
  sectionTitle: string
  links: Link[]
}

type Link = {
  text: string
  label: string
  url: string
}

export const LinksCards = ({ sectionsIndex, linksSections }: linksSections) => {
  return (
    <div tw="md:w-1/2 flex flex-col space-y-5">
      {linksSections.map(
        (section, index) =>
          index % 2 === +(sectionsIndex === 'odd') && (
            <BlurCardContainer key={index}>
              <div tw="font-poppins font-semibold text-[20px] leading-[26px] mb-[18px]">{section.sectionTitle}</div>
              <div tw="space-y-4">
                {section.links.map((link, index) => (
                  <div key={index}>
                    <div tw="inline mr-1">{link.text}</div>
                    <a
                      tw="font-semibold text-vlr-accent inline break-words"
                      target="_blank"
                      href={link.url}
                      rel="noreferrer"
                    >
                      {link.label ? link.label : 'link'}
                    </a>
                  </div>
                ))}
              </div>
            </BlurCardContainer>
          )
      )}
    </div>
  )
}
