import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import tw from 'twin.macro'

import { BlockchainBadge, FrontendBadge } from '@components/badges'
import CardGrid from '@components/CardGrid'
import { Container } from '@components/common/Container'
import { Main } from '@components/common/Main'
import Footer from '@components/Footer'
import Hero from '@components/Hero'
import { republics } from '@lib/consts/republics'
import { Republics } from '@type/republic'

const Badge = tw.div`
  m-4 w-28
  md:m-6 md:w-32
  lg:m-8 lg:w-36
`

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Republiki ValueLogic</title>
        <meta name="description" content="Republiki ValueLogic" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Container tw="my-16">
          <div tw="mb-8 flex flex-wrap items-center justify-center">
            <Link href={`/republic/${Republics.frontend}`}>
              <Badge tw="cursor-pointer">
                <FrontendBadge />
              </Badge>
            </Link>
            <Link href={`/republic/${Republics.blockchain}`}>
              <Badge tw="cursor-pointer">
                <BlockchainBadge />
              </Badge>
            </Link>
          </div>
          <p tw="mb-8 text-2xl lg:text-3xl text-center text-vlr-accent">
            Witamy w naszych Republikach! Jesteśmy po dobrej technologicznej stronie mocy. May the Value be with you!
          </p>
          <p tw="mb-16 text-center text-[18px]">
            Ustanowiliśmy własne terytoria technologiczne z Komandorami na czele. Nasze Republiki realizują kwartalne
            celem w tym rozwijając technologie w firmie, upskillując osoby zainteresowane tematyką. Silnie zaznaczają
            naszą obecność w danych obszarze.
          </p>
        </Container>

        {Object.entries(republics).map(([k, v]) => {
          return <Hero key={k} id={k} {...v} />
        })}

        <Container tw="my-16" fluid>
          <h2 tw="text-4xl text-center font-semibold mb-16">Co mogę w ramach republik?</h2>
          <CardGrid />
        </Container>
      </Main>

      <Footer />
    </div>
  )
}

export default Home
