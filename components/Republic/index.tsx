import tw from 'twin.macro'
import Link from 'next/link'

import RepublicGoals from '@components/big-icons/RepublicGoals'
import { GradientOverlay } from '@components/common/GradientOverlay'
import { LinkButton } from '@components/common/LinkButton'
import { Paragraph, ParagraphSmall, Title, TitleSmall } from '@components/common/TextStyles'
import Footer from '@components/Footer'
import { SeoMotive } from '@components/motives'
import { Background } from '@components/Republic/Background'
import MaterialCard from '@components/Republic/MaterialCard'
import { WelcomeCard } from '@components/Republic/WelcomeCard'
import { RepublicProps } from 'pages/republic/[id]'
import { BlockchainBadge, FrontendBadge, MLBadge, SeoBadge } from '@components/badges'

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

const renderBadge = ({ republicType }: { republicType: string }) => {
  switch (republicType) {
    case 'seo':
      return <SeoBadge />
    case 'blockchain':
      return <BlockchainBadge />
    case 'frontend':
      return <FrontendBadge />
    case 'machine_learning':
      return <MLBadge />
  }
}

const RepublicLayout = ({ republic }: RepublicProps) => {
  if (!republic) {
    return null
  }

  const republicType = republic.republicType

  return (
    <Container>
      <PartContainer>
        <div tw="absolute z-30 left-28 top-28 max-w-[117px] grid gap-10">
          <Link href="/"> &lt; powrót</Link>
          {renderBadge({ republicType })}
        </div>
        <ContentColumn>
          <Block tw="max-w-[960px]">
            <SeoMotive />
          </Block>
          <Block>
            <p tw="font-normal text-4xl leading-[60px] max-w-[846px] mx-auto mt-20 mb-7">{republic.leadText}</p>
            <p tw="font-normal text-2xl leading-9 text-vlr-accent">{republic.leadAuthor}</p>
          </Block>
        </ContentColumn>
        <GradientOverlay />
        <Background url="bc" />
      </PartContainer>

      <PartContainer tw="bg-vlr-bg-light">
        <ContentColumn tw="pb-28">
          <Block>
            <div tw="text-left max-w-[846px] mx-auto bg-vlr-bg-light rounded-lg px-20 py-10 mt-[-10rem]">
              <Title>{republic.welcomeHeader}</Title>
              <Paragraph>{republic.welcomeDescription}</Paragraph>
            </div>
          </Block>
          <Block>
            <div tw="grid grid-cols-4 gap-4 mt-4">
              {republic.welcomeCards.map(card => (
                <WelcomeCard key={card.id} title={card.title} description={card.description} iconUrl={card.iconUrl} />
              ))}
            </div>
          </Block>
        </ContentColumn>
      </PartContainer>

      <PartContainer>
        <ContentColumn>
          <Block tw="max-w-[996px]">
            <Title tw="text-white">{republic.whoHeader}</Title>
            <div tw="text-left text-base my-20">{republic.whoDescription}</div>
            <div tw="grid grid-flow-row gap-5 w-full">
              {republic.persons.map(person => (
                <WhoIsWhoCard
                  key={person.id}
                  name={person.fullName}
                  role={person.title}
                  description={person.description}
                />
              ))}
            </div>
          </Block>
        </ContentColumn>
        <Background url="se" />
      </PartContainer>

      <PartContainer tw="bg-vlr-bg-light text-vlr-dark">
        <ContentColumn tw="pt-28">
          <div tw="flex gap-40">
            <RepublicGoals />
            <div tw="max-w-[554px]">
              <div tw="mb-20">
                <TitleSmall>Zrealizowane cele</TitleSmall>
                <ParagraphSmall>{republic.reachedGoals}</ParagraphSmall>
              </div>
              <div>
                <TitleSmall>Aktualne cele</TitleSmall>
                <ParagraphSmall>{republic.currentGoals}</ParagraphSmall>
              </div>
            </div>
          </div>
        </ContentColumn>
      </PartContainer>

      <PartContainer>
        <ContentColumn tw="py-16 z-30">
          <Block tw="max-w-[996px]">
            <Title tw="text-white mb-14">Materiały</Title>
            <div tw="grid grid-flow-row gap-5 w-full">
              {/*TODO map materials*/}
              <MaterialCard
                title="Czym sa republiki?"
                author="Bartosz Kopańczyk"
                fileType="Google doc"
                date="12.01.2022"
                url="/link"
              />
              <MaterialCard
                title="O nowej roli i możliwościach rozwoju w VL"
                author="Kamil Przybyło"
                fileType="Video file"
                date="03.02.2022"
                url="/link"
              />
              <MaterialCard
                title="Zasady tworzenia republik"
                author="Bartosz Kopańczyk"
                fileType="Google slides"
                date="05.10.2022"
                url="/link"
              />
            </div>
          </Block>
          <Block tw="mt-16">
            <LinkButton>Więcej materiałów</LinkButton>
          </Block>
        </ContentColumn>
        <Background url="se" />
      </PartContainer>
      <Footer />
    </Container>
  )
}

export default RepublicLayout
