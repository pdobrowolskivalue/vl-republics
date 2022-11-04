import Link from 'next/link'
import tw from 'twin.macro'

import { BlockchainBadge, FrontendBadge, MLBadge, SeoBadge } from '@components/badges'
import RepublicGoals from '@components/big-icons/RepublicGoals'
import { GradientOverlay } from '@components/common/GradientOverlay'
import { LinkButton } from '@components/common/LinkButton'
import { Paragraph, ParagraphSmall, Title, TitleSmall } from '@components/common/TextStyles'
import Footer from '@components/Footer'
import { SeoMotive } from '@components/motives'
import { Background } from '@components/Republic/Background'
import MaterialCard from '@components/Republic/MaterialCard'
import { WelcomeCard } from '@components/Republic/WelcomeCard'
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
  max-w-[1440px] mx-auto pt-20 pb-28
  relative
  z-50
`

const Block = tw.div`
  text-center
`

const renderBadge = ({ republicType }: { republicType: Republics }) => {
  switch (republicType) {
    case Republics.seo:
      return <SeoBadge />
    case Republics.blockchain:
      return <BlockchainBadge />
    case Republics.frontend:
      return <FrontendBadge />
    case Republics['machine-learning']:
      return <MLBadge />
  }
}

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
        <>
          <div tw="absolute p-2 sm:p-4 flex items-center gap-2 md:gap-4 xl:gap-10 grid-cols-2 z-30 rounded-3xl backdrop-blur -translate-x-1/2 flex-col-reverse xl:top-28 md:top-44 top-28 left-1/2 xl:flex-col xl:left-28  xl:max-w-[117px] sm:max-w-[240px] max-w-[120px]">
            <Link href="/">
              <div tw="hidden xl:block text-lg md:text-xl xl:text-sm cursor-pointer before:content-['<'] before:pr-3 before:text-4xl before:align-middle">
                powrót
              </div>
            </Link>
            <div>{renderBadge({ republicType })}</div>
          </div>
          <div tw="xl:hidden absolute top-5 left-5 bg-vlr-dark rounded-3xl p-2 px-3 z-30">
            <Link href="/">
              <div tw="md:text-2xl cursor-pointer before:content-['<'] before:pr-3 before:text-4xl before:align-middle">
                powrót
              </div>
            </Link>
          </div>
        </>
        <ContentColumn tw="z-20">
          <Block tw="max-w-[960px]">
            <SeoMotive />
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
        <ContentColumn tw="pb-28">
          <Block>
            <div tw="text-left max-w-[846px] mx-auto bg-vlr-bg-light rounded-lg px-20 py-10 mt-[-10rem]">
              <Title>{welcomeHeader}</Title>
              <Paragraph>{welcomeDescription}</Paragraph>
            </div>
          </Block>
          <Block>
            <div tw="flex flex-row flex-wrap gap-10 justify-center max-w-[1280px] mt-4 mx-5">
              {welcomeCards.map(card => (
                <WelcomeCard key={card.id} title={card.title} description={card.description} iconUrl={card.iconUrl} />
              ))}
            </div>
          </Block>
        </ContentColumn>
      </PartContainer>

      <PartContainer>
        <ContentColumn>
          <Block tw="max-w-[996px]">
            <Title tw="text-white">{whoHeader}</Title>
            <div tw="text-left text-base my-20">{whoDescription}</div>
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
        <ContentColumn tw="pt-28">
          <div tw="flex gap-40">
            <RepublicGoals />
            <div tw="max-w-[554px]">
              <div tw="mb-20">
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
        <ContentColumn tw="max-w-[1030px] w-[1030px] py-16 z-30 mx-5">
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
