import type { NextPage } from 'next'
import Head from 'next/head'
import tw from 'twin.macro'

import Hero from '@components/Hero'
import CardGrid from '@components/CardGrid'
import Footer from '@components/Footer'
import { Badge } from '@components/Republic/Badge'
import { Container } from '@components/common/Container'
import { Main } from '@components/common/Main'
import { Title } from '@components/common/TextStyles'
import { republics } from '@lib/consts/republics'
import { whatCanIInRepublic, whatDoesGiveRepublic } from '@lib/consts/cards'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Republiki ValueLogic</title>
        <meta name="description" content="Republiki ValueLogic" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Container>
          <div tw="mb-8 flex flex-wrap items-center justify-center">
            {Object.entries(republics).map(([key, republic]) => {
              return <Badge key={key} path={key} badge={republic.badge} />
            })}
          </div>
          <p tw="font-poppins font-medium text-[28px] leading-[42px] text-vlr-accent mb-8">
            Witamy w naszych Republikach! Jesteśmy po dobrej technologicznej stronie mocy. May the Value be with you!
          </p>
          <p tw="text-[16px] leading-[24px] mb-16 px-1">
            Ustanowiliśmy własne terytoria technologiczne z Komandorami na czele. Nasze Republiki realizują kwartalne
            celem w tym rozwijając technologie w firmie, upskillując osoby zainteresowane tematyką. Silnie zaznaczają
            naszą obecność w danych obszarze.
          </p>
        </Container>

        {Object.entries(republics).map(([k, v]) => {
          return <Hero key={k} id={k} {...v} />
        })}

        <Container tw="mt-16" fluid>
          <Title>{whatCanIInRepublic.title}</Title>
          <CardGrid data={Object.entries(whatCanIInRepublic.cards)} />
          <Title tw="mt-[60px]">{whatDoesGiveRepublic.title}</Title>
          <CardGrid data={Object.entries(whatDoesGiveRepublic.cards)} />
        </Container>
      </Main>

      <Footer />
    </div>
  )
}

export default Home
