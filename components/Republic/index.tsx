import tw from 'twin.macro'

import { Paragraph, ParagraphSmall, Title, TitleSmall } from '@components/common/TextStyles'
import { SeoMotive } from '@components/motives'
import { Background } from '@components/Republic/Background'
import { WelcomeCard } from '@components/Republic/WelcomeCard'
import { RepublicStart } from '@components/big-icons/RepublicStart'
import { RepublicWhoIsWho } from '@components/big-icons/RepublicWhoIsWho'
import { RepublicAboutUs } from '@components/big-icons/RepublicAboutUs'
import { RepublicRulesTips } from '@components/big-icons/RepublicRulesTips'
import { WhoIsWhoCard } from '@components/Republic/WhoIsWhoCard'
import RepublicGoals from '@components/big-icons/RepublicGoals'
import MaterialCard from '@components/Republic/MaterialCard'
import { LinkButton } from '@components/common/LinkButton'

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

const RepublicLayout = () => {
  return (
    <Container>
      <PartContainer>
        <Background url="https://i.wpimg.pl/1200x/d.wpimg.pl/1361730298--935151286/kosmos.jpg" />
        <ContentColumn>
          <Block tw="max-w-[960px]">
            <SeoMotive />
          </Block>
          <Block>
            <p tw="font-normal text-4xl leading-[60px]">
              Kim jesteśmy lorem ipsum
              <br />
              dokąd zmierzamy dolor sit amet?
            </p>
            <p tw="font-normal text-2xl leading-9 text-[#33E5FF] mt-[70px]">Paulo Codello</p>
          </Block>
        </ContentColumn>
      </PartContainer>

      <PartContainer tw="bg-[#F8F8FC]">
        <ContentColumn tw="pb-[115px]">
          <Block>
            <div tw="text-left max-w-[846px] mx-auto bg-[#F8F8FC] rounded-lg px-[72px] py-[42px] mt-[-165px]">
              <Title tw="mb-[32px]">Witamy w republice SEO</Title>
              <Paragraph>
                Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
                incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
                vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum
                qui dolorem eum fugiat quo voluptas nulla pariatur?
              </Paragraph>
            </div>
          </Block>
          <Block>
            <div tw="grid grid-cols-4 gap-4 mt-[17px]">
              <WelcomeCard title="Start w SEO" description="Pakiet informacji na dzień dobry">
                <RepublicStart />
              </WelcomeCard>
              <WelcomeCard title="Who is who" description="Ludzie, projekty, wiedza">
                <RepublicWhoIsWho />
              </WelcomeCard>
              <WelcomeCard title="Lorem ipsum" description="O nas, o kulturze">
                <RepublicAboutUs />
              </WelcomeCard>
              <WelcomeCard title="Lorem ipsum" description="Złote zasady, standardy, wskazówki">
                <RepublicRulesTips />
              </WelcomeCard>
            </div>
          </Block>
        </ContentColumn>
      </PartContainer>

      <PartContainer>
        <Background url="https://i.wpimg.pl/1200x/d.wpimg.pl/1361730298--935151286/kosmos.jpg" />
        <ContentColumn>
          <Block tw="max-w-[996px]">
            <Title tw="text-[#fff]">Kto jest kim w Republice SEO?</Title>
            <div tw="text-left text-[16px] leading-[26px] my-[69px]">
              Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
              dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
              incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
            </div>
            <div tw="grid grid-flow-row gap-[20px] w-full">
              <WhoIsWhoCard
                name="Bartosz Kopańczyk"
                role="Komandor"
                description="onsequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit "
              ></WhoIsWhoCard>
              <WhoIsWhoCard
                name="Bartosz Kopańczyk"
                role="Komandor"
                description="onsequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit "
              ></WhoIsWhoCard>
              <WhoIsWhoCard
                name="Bartosz Kopańczyk"
                role="Komandor"
                description="onsequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit "
              ></WhoIsWhoCard>
            </div>
          </Block>
        </ContentColumn>
      </PartContainer>

      <PartContainer tw="bg-[#F8F8FC] text-[#07062A]">
        <ContentColumn tw="pt-[115px]">
          <div tw="flex gap-[166px]">
            <RepublicGoals />
            <div tw="max-w-[554px]">
              <div tw="mb-[72px]">
                <TitleSmall>Zrealizowane cele</TitleSmall>
                <ParagraphSmall>
                  UncompromiseUncompromised quality, expertise, and partnershipd quality,
                  expertise,andpartnershipUncompromised quality, expertise, and partnership
                </ParagraphSmall>
              </div>
              <div>
                <TitleSmall>Aktualne cele na II kwartał 2022</TitleSmall>
                <ParagraphSmall>
                  UncompromiseUncompromised quality, expertise, and partnershipd quality,
                  expertise,andpartnershipUncompromised quality, expertise, and partnershipquality,
                  expertise,andpartnershipUncompromised quality, expertise, and partnership
                </ParagraphSmall>
              </div>
            </div>
          </div>
        </ContentColumn>
      </PartContainer>

      <PartContainer>
        <Background url="https://i.wpimg.pl/1200x/d.wpimg.pl/1361730298--935151286/kosmos.jpg" />
        <ContentColumn>
          <Block tw="max-w-[996px]">
            <Title tw="text-[#fff]">Materiały</Title>
            <div tw="grid grid-flow-row gap-[20px] w-full">
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
          <Title tw="text-[#fff]">Stwórz własną Republikę!</Title>
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
