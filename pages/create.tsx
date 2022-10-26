import Head from 'next/head'
import Image from 'next/image'
import 'twin.macro'

import { Container } from '@components/common/Container'
import { Main } from '@components/common/Main'

import CreateRepublicBackground from '../assets/images/create-republic-background.webp'

export default function CreateRepublic() {
  return (
    <div>
      <Head>
        <title>Republiki ValueLogic - Stwóż Republikę</title>
        <meta name="description" content="Republiki ValueLogic" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div tw="relative w-full flex items-center justify-center h-[500px]">
        <Container tw="z-10">
          <h2 tw="text-4xl font-weight[600]">Stwórz własną Republikę!</h2>
        </Container>
        <Image
          src={CreateRepublicBackground}
          alt="Stwórz własną republikę"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      <Main tw=" bg-white text-vlr-dark">
        <Container tw="text-left">
          <p tw="mb-16">
            Quis commodo nulla sunt qui aliqua adipisicing est aliquip duis quis. Aliqua eiusmod dolor officia amet
            eiusmod deserunt dolore eu mollit tempor. Deserunt fugiat velit minim ipsum aliquip laborum nulla Lorem
            fugiat aliquip sit.
          </p>
          <form tw="w-full">
            <div tw="w-full mb-4">
              <input tw="border border-gray-200 rounded-lg bg-gray-50 w-full p-5" placeholder="Nazwa republiki" />
            </div>
            <div tw="w-full mb-8">
              <textarea tw="border border-gray-200 rounded-lg bg-gray-50 w-full p-5" placeholder="Krótki opis" />
            </div>
            <div tw="w-full text-right">
              <button tw="text-gray-800 font-bold text-lg border bg-gray-200 px-20 py-3 rounded-lg" type="submit">
                Zgłoś
              </button>
            </div>
          </form>
        </Container>
      </Main>
    </div>
  )
}
