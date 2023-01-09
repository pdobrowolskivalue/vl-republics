import Link from 'next/link'
import tw, { styled } from 'twin.macro'

import RepublicGoals from '@components/big-icons/RepublicGoals'
import { Paragraph, Title } from '@components/common/TextStyles'
import Footer from '@components/Footer'
import { Background, ERepublicBackground } from '@components/Republic/Background'
import { WelcomeCard } from '@components/Republic/WelcomeCard'
import { republics } from '@lib/consts/republics'
import { Republics } from '@type/republic'
import { RepublicProps } from 'pages/republic/[id]'

import { LinksCards } from './LinksCards'
import { WhoIsWhoCard } from './WhoIsWhoCard'

const PartContainer = tw.div`
  flex justify-center
  relative
`

const ContentColumn = tw.div`
  max-w-[1100px] w-full mx-auto mx-5
  pt-14 sm:pt-20 pb-20 sm:pb-[120px]
  relative
  z-50
`

const WelcomeCardsContainer = styled('div')<{ cardsAmount: number }>`
  ${tw`flex flex-row flex-wrap gap-3 justify-center`}
  ${({ cardsAmount }) => (cardsAmount === 4 ? tw`max-w-[620px] xl:max-w-[1100px] mx-auto` : tw`max-w-[1100px]`)}
`

const RepublicLayout = ({ republic }: RepublicProps) => {
  const {
    leadText,
    leadAuthor,
    welcomeHeader,
    welcomeDescription,
    welcomeCards,
    whoHeader,
    whoDescription,
    persons,
    reachedGoals,
    currentGoals,
    linksSections,
  } = republic

  const republicType = republic.republicType.replace(/_/g, '-') as Republics

  return (
    <div>
      <PartContainer>
        <div tw="z-30 absolute left-6 xl:left-24 h-full">
          <Link href="/">
            <div tw="font-poppins absolute top-6 xl:top-11 cursor-pointer before:content-['<'] before:pr-3 before:text-4xl before:align-middle">
              powrót
            </div>
          </Link>
          <div tw="w-24 h-full">{republics[republicType].badge()}</div>
        </div>
        <ContentColumn tw="z-20 pb-0 text-center">
          <div tw="max-w-[960px] relative mx-auto">{republics[republicType].motive()}</div>
          <div>
            <p tw="font-poppins font-medium text-[24px] leading-[36px] mt-7 mb-4">{leadText}</p>
            <p tw="font-poppins  text-[16px] leading-[24px] mb-9">{leadAuthor}</p>
          </div>
        </ContentColumn>
        <Background useOverlay={true} type={ERepublicBackground.welcome} />
      </PartContainer>

      <PartContainer tw="bg-vlr-bg-light">
        <ContentColumn>
          <Title tw="text-vlr-dark">{welcomeHeader}</Title>
          <Paragraph tw="mb-20 xs:columns-2 gap-4">{welcomeDescription}</Paragraph>
          <WelcomeCardsContainer cardsAmount={welcomeCards.length}>
            {welcomeCards.map(card => (
              <WelcomeCard key={card.id} title={card.title} description={card.description} iconUrl={card.iconUrl} />
            ))}
          </WelcomeCardsContainer>
        </ContentColumn>
      </PartContainer>

      <PartContainer>
        <ContentColumn>
          <Title>{whoHeader}</Title>
          <Paragraph tw="text-white my-12 sm:my-16">{whoDescription}</Paragraph>
          <div tw="grid grid-flow-row gap-5 w-full">
            {persons.map(person => (
              <WhoIsWhoCard
                key={person.id}
                name={person.fullName}
                role={person.title}
                description={person.description}
                photo={person.photo?.url}
              />
            ))}
          </div>
        </ContentColumn>
        <Background useOverlay type={ERepublicBackground['who-is-who']} />
      </PartContainer>

      <PartContainer tw="bg-vlr-bg-light text-vlr-dark">
        <ContentColumn>
          <div tw="flex flex-col lg:flex-row gap-20 lg:gap-40">
            <div tw="w-full max-w-[400px] lg:min-w-[400px] m-auto">
              <RepublicGoals />
            </div>
            <div tw="">
              <div tw="mb-10 lg:mb-16">
                <Title tw="mb-10">Zrealizowane cele</Title>
                <div tw="leading-[30px] text-vlr-dark">{reachedGoals}</div>
              </div>
              <div>
                <Title tw="mb-10">Aktualne cele</Title>
                <div tw="leading-[30px] text-vlr-dark">{currentGoals}</div>
              </div>
            </div>
          </div>
        </ContentColumn>
      </PartContainer>

      {Array.isArray(linksSections) && linksSections.length ? (
        <PartContainer>
          <ContentColumn>
            <Title tw="text-white">Materiały</Title>
            <div tw="flex flex-col md:flex-row space-x-0 md:space-x-5 space-y-5 md:space-y-0">
              <LinksCards sectionsIndex={'even'} linksSections={linksSections} />
              <LinksCards sectionsIndex={'odd'} linksSections={linksSections} />
            </div>
          </ContentColumn>
          <Background useOverlay type={ERepublicBackground.materials} />
        </PartContainer>
      ) : (
        ''
      )}

      <Footer />
    </div>
  )
}

export default RepublicLayout
