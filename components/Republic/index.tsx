import tw from 'twin.macro'

import { Paragraph, ParagraphSmall, Title, TitleSmall } from '@components/common/TextStyles'
import { SeoMotive } from '@components/motives'
import { Background } from '@components/Republic/Background'
import { WelcomeCard } from '@components/Republic/WelcomeCard'
import RepublicGoals from '@components/big-icons/RepublicGoals'
import MaterialCard from '@components/Republic/MaterialCard'
import { LinkButton } from '@components/common/LinkButton'

import { RepublicProps } from '../../pages/republic/[id]'

const Container = tw.div`
`

const PartContainer = tw.div`
  flex justify-center
  relative
`

const ContentColumn = tw.div`
  max-w-[1440px] mx-auto pt-[85px] pb-[115px]
`

const Block = tw.div`
  text-center
`

const RepublicLayout = ({
  republic: {
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
  },
}: RepublicProps) => {
  return (
    <Container>
      <PartContainer>
        <Background url="https://i.wpimg.pl/1200x/d.wpimg.pl/1361730298--935151286/kosmos.jpg" />
        <ContentColumn>
          <Block tw="max-w-[960px]">
            <SeoMotive />
          </Block>
          <Block>
            <p tw="font-normal text-4xl leading-[60px] max-w-[846px] mx-auto mt-20 mb-7">{leadText}</p>
            <p tw="font-normal text-2xl leading-9 text-vlr-accent">{leadAuthor}</p>
          </Block>
        </ContentColumn>
      </PartContainer>

      <PartContainer tw="bg-vlr-bg-light">
        <ContentColumn tw="pb-[115px]">
          <Block>
            <div tw="text-left max-w-[846px] mx-auto bg-vlr-bg-light rounded-lg px-[72px] py-[42px] mt-[-165px]">
              <Title tw="mb-[32px]">{welcomeHeader}</Title>
              <Paragraph>{welcomeDescription}</Paragraph>
            </div>
          </Block>
          <Block>
            <div tw="grid grid-cols-4 gap-4 mt-[17px]">
              {welcomeCards.map(card => (
                <WelcomeCard key={card.id} title={card.title} description={card.description} iconUrl={card.iconUrl} />
              ))}
            </div>
          </Block>
        </ContentColumn>
      </PartContainer>

      <PartContainer>
        <Background url="https://i.wpimg.pl/1200x/d.wpimg.pl/1361730298--935151286/kosmos.jpg" />
        <ContentColumn>
          <Block tw="max-w-[996px]">
            <Title tw="text-vlr-text-light">{whoHeader}</Title>
            <div tw="text-left text-[16px] leading-[26px] my-[69px]">{whoDescription}</div>
            <div tw="grid grid-flow-row gap-[20px] w-full">
              {persons.map(person => (
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
      </PartContainer>

      <PartContainer tw="bg-vlr-bg-light text-vlr-text-dark">
        <ContentColumn tw="pt-[115px]">
          <div tw="flex gap-[166px]">
            <RepublicGoals />
            <div tw="max-w-[554px]">
              <div tw="mb-[72px]">
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
        <Background url="https://i.wpimg.pl/1200x/d.wpimg.pl/1361730298--935151286/kosmos.jpg" />
        <ContentColumn>
          <Block tw="max-w-[996px]">
            <Title tw="text-vlr-text-light">Materiały</Title>
            <div tw="grid grid-flow-row gap-[20px] w-full">
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
      </PartContainer>

      <PartContainer>
        <Background url="https://i.wpimg.pl/1200x/d.wpimg.pl/1361730298--935151286/kosmos.jpg" />
        <ContentColumn>
          <Title tw="text-vlr-text-light">Stwórz własną Republikę!</Title>
          <Block tw="max-w-[996px]">
            Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
            labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
          </Block>
          <Block tw="mt-16">
            <LinkButton>Stwórz republikę</LinkButton>
          </Block>
        </ContentColumn>
      </PartContainer>
    </Container>
  )
}

export default RepublicLayout
