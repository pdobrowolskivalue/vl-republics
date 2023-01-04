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
    <div tw="w-1/2 flex flex-col space-y-5">
      {linksSections.map(
        (section, index) =>
          index % 2 === +(sectionsIndex === 'odd') && (
            <BlurCardContainer key={index}>
              <div tw="font-semibold text-xl mb-[18px]">{section.sectionTitle}</div>
              <div tw="space-y-4">
                {section.links.map((link, index) => (
                  <div key={index} tw="text-sm">
                    <div tw="inline mr-1">{link.text}</div>
                    <a
                      tw="inline font-semibold text-vlr-accent break-words"
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
