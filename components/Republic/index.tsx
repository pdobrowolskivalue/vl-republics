import Link from 'next/link'
import Image from 'next/image'
import tw, { styled } from 'twin.macro'

import RepublicGoals from '@components/big-icons/RepublicGoals'
import Footer from '@components/Footer'
import { Background, ERepublicBackground } from '@components/Republic/Background'
import { WelcomeCard } from '@components/Republic/WelcomeCard'
import { Paragraph, Title } from '@components/common/TextStyles'
import { NewsLinkButton, Tag } from '@components/common/ButtonAndTagStyle'
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
    informations,
    linksSections,
  } = republic

  const republicType = republic.republicType.replace(/_/g, '-') as Republics
  const firstInformation = informations.slice().reverse()[0]
  const informationsExceptFirst = informations.slice().reverse().slice(1)

  return (
    <div>
      <PartContainer>
        <div tw="z-30 absolute left-4 xl:left-24 h-full w-28">
          <Link href="/">
            <div tw="font-poppins absolute top-6 xl:top-11 cursor-pointer before:content-['<'] before:pr-3 before:text-4xl before:align-middle">
              powrót
            </div>
          </Link>
          <div tw="w-24 h-full w-full">{republics[republicType].badge()}</div>
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
            {welcomeCards.reverse().map(card => (
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

      {firstInformation ? (
        <PartContainer>
          <ContentColumn>
            <Title>{republics[republicType].title} News</Title>
            <div tw="flex flex-col md:flex-row gap-11 md:h-[372px]">
              <div tw="flex-auto basis-[51.1%]">
                <div tw="relative pt-[64.29%] md:pt-0 md:h-full">
                  <div tw="absolute inset-0">
                    <Image
                      src="https://www.ers.ga.gov/sites/main/files/main-images/camera_lense_0.jpeg"
                      alt="news image"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    ></Image>
                  </div>
                </div>
              </div>
              <div tw="flex-auto basis-[48.9%]">
                <div tw="flex items-center">
                  <Tag>{firstInformation.tag}</Tag>
                  <div tw="font-medium leading-[26px] ml-4">Kategoria:</div>
                  <div tw="font-medium leading-[26px] ml-1 text-vlr-accent">{firstInformation.category}</div>
                </div>
                <div tw="font-poppins font-medium text-[22px] leading-[33px] my-[30px] line-clamp-2">
                  {firstInformation.title}
                </div>
                <Paragraph tw="text-white leading-[24px] line-clamp-6">{firstInformation.description}</Paragraph>
                <NewsLinkButton tw="mt-[30px]" href={firstInformation.url} target="_blank">
                  Czytaj więcej
                </NewsLinkButton>
              </div>
            </div>

            {informationsExceptFirst ? (
              <div tw="mt-[30px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {informationsExceptFirst.map((information, index) => (
                  <div key={index}>
                    <div tw="relative pt-[64.29%]">
                      <div tw="absolute inset-0">
                        <Image
                          src="https://www.ers.ga.gov/sites/main/files/main-images/camera_lense_0.jpeg"
                          alt="news image"
                          layout="fill"
                          objectFit="cover"
                          objectPosition="center"
                        ></Image>
                      </div>
                    </div>
                    <div tw="flex items-center my-5">
                      <Tag>{information.tag}</Tag>
                      <div tw="font-medium text-[12px] leading-[26px] ml-4">Kategoria:</div>
                      <div tw="font-medium text-[12px] leading-[26px] ml-1 text-vlr-accent">{information.category}</div>
                    </div>
                    <div>{information.title}</div>
                    <NewsLinkButton tw="mt-[30px]" href={information.url} target="_blank">
                      Zobacz
                    </NewsLinkButton>
                  </div>
                ))}
              </div>
            ) : (
              ''
            )}
          </ContentColumn>
        </PartContainer>
      ) : (
        ''
      )}

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
