import Link from 'next/link'
import tw, { styled } from 'twin.macro'

import RepublicGoals from '@components/big-icons/RepublicGoals'
import { GradientOverlay } from '@components/common/GradientOverlay'
import { LinkButton } from '@components/common/LinkButton'
import { Paragraph, ParagraphSmall, Title, TitleSmall } from '@components/common/TextStyles'
import Footer from '@components/Footer'
import { Background } from '@components/Republic/Background'
import MaterialCard from '@components/Republic/MaterialCard'
import { WelcomeCard } from '@components/Republic/WelcomeCard'
import { republics } from '@lib/consts/republics'
import { Republics } from '@type/republic'
import { RepublicProps } from 'pages/republic/[id]'

import { WhoIsWhoCard } from './WhoIsWhoCard'

const Container = tw.div`
`

const PartContainer = tw.div`
  flex justify-center
  relative
`

const ContentColumn = tw.div`
  max-w-[1440px] mx-auto mx-5
  pt-14 sm:pt-20 pb-20 sm:pb-28
  relative
  z-50
`

const Block = tw.div`
  text-center
`

const WelcomeCardsContainer = styled('div')<{ cardsAmount: number }>`
  ${tw`flex flex-row flex-wrap gap-10 justify-center mt-4 mx-5`}
  ${({ cardsAmount }) => (cardsAmount === 4 ? tw`max-w-[620px] 2xl:max-w-[1280px] mx-auto` : tw`max-w-[1280px]`)}
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
    files,
  } = republic

  const republicType = republic.republicType.replace(/_/g, '-') as Republics

  return (
    <Container>
      <PartContainer>
        <div tw="absolute z-30 xl:left-28 left-4 xl:top-28 top-4 max-w-[117px] flex flex-col gap-10 bg-vlr-dark p-2 rounded-xl">
          <Link href="/">
            <div tw="text-sm md:text-xl xl:text-sm cursor-pointer before:content-['<'] before:pr-3 before:text-4xl before:align-middle">
              powrót
            </div>
          </Link>
          <div tw="hidden xl:block">{republics[republicType].badge()}</div>
        </div>
        <ContentColumn tw="z-20">
          <Block tw="max-w-[960px] relative">
            <div
              style={{ textShadow: '0 0 30px #000' }}
              tw="absolute md:text-6xl text-4xl font-bold top-1/2 left-1/2 z-40 -translate-x-1/2 -translate-y-1/2"
            >
              {republics[republicType].title}
            </div>
            {republics[republicType].motive()}
          </Block>
          <Block>
            <p tw="font-normal text-4xl leading-[60px] max-w-[846px] mx-auto mt-10 mb-7">{leadText}</p>
            <p tw="font-normal text-2xl leading-9 text-vlr-accent">{leadAuthor}</p>
          </Block>
        </ContentColumn>
        <GradientOverlay tw="z-10" />
        <Background republicType={republicType} />
      </PartContainer>

      <PartContainer tw="bg-vlr-bg-light">
        <ContentColumn>
          <Block>
            <div
              tw="text-left max-w-[846px] mx-auto bg-vlr-bg-light rounded-lg px-12
            sm:px-20 py-6 sm:py-10 mt-[-6rem] sm:mt-[-10rem]"
            >
              <Title>{welcomeHeader}</Title>
              <Paragraph>{welcomeDescription}</Paragraph>
            </div>
          </Block>
          <Block>
            <WelcomeCardsContainer cardsAmount={welcomeCards.length}>
              {welcomeCards.map(card => (
                <WelcomeCard key={card.id} title={card.title} description={card.description} iconUrl={card.iconUrl} />
              ))}
            </WelcomeCardsContainer>
          </Block>
        </ContentColumn>
      </PartContainer>

      <PartContainer>
        <ContentColumn>
          <Block tw="max-w-[996px]">
            <Title tw="text-white">{whoHeader}</Title>
            <div
              tw="text-left text-base
            my-12 sm:my-20"
            >
              {whoDescription}
            </div>
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
          </Block>
        </ContentColumn>
        <Background useOverlay republicType={republicType} />
      </PartContainer>

      <PartContainer tw="bg-vlr-bg-light text-vlr-dark">
        <ContentColumn
          tw="max-w-[1116px] w-[1116px]
        pt-20 sm:pt-28"
        >
          <div
            tw="flex
          flex-col sm:flex-row gap-20 sm:gap-10 md:gap-20 lg:gap-40"
          >
            <div tw="w-full min-w-[200px]">
              <RepublicGoals />
            </div>
            <div tw="max-w-[554px]">
              <div tw="mb-10 lg:mb-20">
                <TitleSmall>Zrealizowane cele</TitleSmall>
                <ParagraphSmall>{reachedGoals}</ParagraphSmall>
              </div>
              <div>
                <TitleSmall>Aktualne cele</TitleSmall>
                <ParagraphSmall>{currentGoals}</ParagraphSmall>
              </div>
            </div>
          </div>
        </ContentColumn>
      </PartContainer>

      <PartContainer>
        <ContentColumn tw="max-w-[1030px] w-[1030px] py-16 z-30">
          <Block tw="">
            <Title tw="text-white mb-14">Materiały</Title>
            <div tw="grid grid-flow-row gap-5">
              {Array.isArray(files) && files.length ? (
                files.map(file => (
                  <MaterialCard
                    key={file.id}
                    title={file.title}
                    author={file.author}
                    fileType={file.type}
                    date={file.date}
                    url={file.url}
                  />
                ))
              ) : (
                <div tw="text-white">Brak danych</div>
              )}
            </div>
          </Block>
          <Block tw="mt-16">
            <LinkButton>Więcej materiałów</LinkButton>
          </Block>
        </ContentColumn>
        <Background useOverlay republicType={republicType} />
      </PartContainer>
      <Footer />
    </Container>
  )
}

export default RepublicLayout
