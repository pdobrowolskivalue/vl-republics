import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import tw from 'twin.macro'

import BlockchainBackground from '../assets/images/blockchain-background.webp'
import CreateRepublicBackground from '../assets/images/create-republic-background.webp'
import FrontendBackground from '../assets/images/frontend-background.webp'
import MLBackground from '../assets/images/ml-background.webp'
import SEOBackground from '../assets/images/seo-background.webp'
import { BlockchainBadge, FrontendBadge, MLBadge, SeoBadge } from '../components/badges'
import { Access, Create, Honors, Rocket } from '../components/big-icons'
import { BlockchainMotive, FrontendMotive, SeoMotive } from '../components/motives'
import { MLMotive } from '../components/motives/MLMotive'

const Grid = tw.div`
  flex items-center justify-center w-full flex-col gap-4
  sm:(w-full flex-row flex-wrap)
`

const Card = tw.div`
  p-8 flex items-center justify-center
  border border-solid border-vlr-mild bg-vlr-backdrop max-w-[584px] h-[210px] rounded-2xl

  [> p]:(m-0)

  transition-colors duration-150

  dark:border-vlr-mild
`

const Badge = tw.div`
  m-8
`

const Container = tw.div`
  max-w-[870px] text-center
`

const LinkButton = tw.a`
  border rounded-3xl py-3 px-7 text-center cursor-pointer
`

const Hero = tw.div`
  relative w-full flex items-center justify-center
  border-t border-t-vlr-accent/30
`

const Layers = tw.div`
  h-[520px]
  [> div]:(absolute inset-0 flex items-center justify-center)
`

const GradientOverlay = tw.div`
  bg-gradient-to-b from-transparent via-transparent to-vlr-dark
`

const Footer = tw.div`
  relative w-full flex items-center justify-center h-[500px]
`

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Republiki ValueLogic</title>
        <meta name="description" content="Republiki ValueLogic" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main tw="py-16 flex flex-1 flex-col items-center min-h-screen">
        <Container tw="my-16">
          <div tw="mb-8 flex items-center justify-center">
            <Badge>
              <SeoBadge />
            </Badge>
            <Badge>
              <FrontendBadge />
            </Badge>
            <Badge>
              <BlockchainBadge />
            </Badge>
            <Badge>
              <MLBadge />
            </Badge>
          </div>
          <p tw="mb-8 text-3xl text-center text-vlr-accent">
            Witamy w naszych Republikach! Jesteśmy po dobrej
            <br /> technologicznej stronie mocy. May the Value be with you!
          </p>
          <p tw="mb-16 text-center text-[18px]">
            Ustanowiliśmy własne terytoria technologiczne z Komandorami na czele. Nasze Republiki realizują kwartalne
            celem w tym rozwijając technologie w firmie, upskillując osoby zainteresowane tematyką. Silnie zaznaczają
            naszą obecność w danych obszarze.
          </p>

          <Link href="/about">
            <LinkButton tw="uppercase text-vlr-accent border-vlr-accent text-[14px]">Dowiedz się więcej</LinkButton>
          </Link>
        </Container>

        <Hero>
          <h2 tw="z-50 text-6xl font-weight[600] text-shadow[0 8px 15px rgb(0 0 0)]">Blockchain</h2>
          <Layers>
            <Link href="/republic/blockchain">
              <LinkButton tw="z-40 bottom-14 absolute left-[50%] translate-x-[-50%] py-2">
                Dowiedz się więcej
              </LinkButton>
            </Link>
            <GradientOverlay tw="z-30" />
            <div tw="z-20">
              <BlockchainMotive />
            </div>
            <div tw="z-10">
              <Image src={BlockchainBackground} alt="background" layout="fill" />
            </div>
          </Layers>
        </Hero>

        <Hero>
          <h2 tw="z-50 text-6xl font-weight[600] text-shadow[0 8px 15px rgb(0 0 0)]">Front End</h2>
          <Layers>
            <Link href="/republic/frontend">
              <LinkButton tw="z-40 bottom-14 absolute left-[50%] translate-x-[-50%] py-2">
                Dowiedz się więcej
              </LinkButton>
            </Link>
            <GradientOverlay tw="z-30" />
            <div tw="z-20">
              <FrontendMotive />
            </div>
            <div tw="z-10">
              <Image src={FrontendBackground} alt="background" layout="fill" />
            </div>
          </Layers>
        </Hero>

        <Hero>
          <h2 tw="z-50 text-6xl font-weight[600] text-shadow[0 8px 15px rgb(0 0 0)]">SEO</h2>
          <Layers>
            <Link href="/republic/seo">
              <LinkButton tw="z-40 bottom-14 absolute left-[50%] translate-x-[-50%] py-2">
                Dowiedz się więcej
              </LinkButton>
            </Link>
            <GradientOverlay tw="z-30" />
            <div tw="z-20">
              <SeoMotive />
            </div>
            <div tw="z-10">
              <Image src={SEOBackground} alt="background" layout="fill" />
            </div>
          </Layers>
        </Hero>

        <Hero>
          <h2 tw="z-50 text-6xl font-weight[600] text-shadow[0 8px 15px rgb(0 0 0)]">Machine Learning</h2>
          <Layers>
            <Link href="/republic/machine-learning">
              <LinkButton tw="z-40 bottom-14 absolute left-[50%] translate-x-[-50%] py-2">
                Dowiedz się więcej
              </LinkButton>
            </Link>
            <GradientOverlay tw="z-30" />
            <div tw="z-20">
              <MLMotive />
            </div>
            <div tw="z-10">
              <Image src={MLBackground} alt="background" layout="fill" />
            </div>
          </Layers>
        </Hero>

        <div tw="my-16">
          <h2 tw="text-4xl text-center font-semibold mb-16">Co mogę w ramach republik?</h2>
          <Grid>
            <Card>
              <div tw="w-[260px] mr-12">
                <Rocket />
              </div>
              <p>
                Podróżuj między republikami i próbuj swoich sił na nowych terytoriach! Sięgnij po wiedze wypracowaną w
                ramach Republik.
              </p>
            </Card>

            <Card>
              <div tw="w-[220px] mr-12">
                <Access />
              </div>
              <p>
                Dołączaj do inicjatyw Republik, jeżeli szczególnie czujesz mięte do danej republiki zgłoś akces aby ją
                współtworzyć.
              </p>
            </Card>

            <Card>
              <div tw="w-[180px] mr-12">
                <Create />
              </div>
              <p>Ogłosić własną republikę - jeśli w naszym wszechświecie brakuje ważnego obszaru</p>
            </Card>

            <Card>
              <div tw="w-[140px] mr-12">
                <Honors />
              </div>
              <p>Zostań Komandorem i rozwijaj się w nowym obszarze technologicznym</p>
            </Card>
          </Grid>
        </div>
      </main>

      <Footer>
        <Container tw="z-10">
          <h2 tw="text-4xl font-weight[600]">Stwórz własną Republikę!</h2>
          <p tw="my-12">
            Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
            labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,{' '}
          </p>
          <Link href="/create">
            <LinkButton tw="border-none font-semibold inline-flex items-center justify-center bg-vlr-accent text-black px-5 py-3">
              <span>Stwórz republikę</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" tw="ml-1 w-5 h-5">
                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
              </svg>
            </LinkButton>
          </Link>
        </Container>
        <div tw="z-[-1] absolute inset-0">
          <Image src={CreateRepublicBackground} alt="Stwórz własną republikę" layout="fill" />
        </div>
      </Footer>
    </div>
  )
}

export default Home
