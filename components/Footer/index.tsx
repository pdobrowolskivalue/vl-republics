import 'twin.macro'

import Image from 'next/image'
import Link from 'next/link'

import CreateRepublicBackground from '@assets/images/create-republic-background.webp'
import { Container } from '@components/common/Container'
import { LinkButton } from '@components/common/LinkButton'
import { Title } from '@components/common/TextStyles'

const Footer = () => {
  return (
    <div tw="relative w-full flex items-center justify-center py-20 sm:py-28">
      <Container tw="z-10 mx-5">
        <Title tw="text-white">Stwórz własną Republikę!</Title>
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
        <Image
          src={CreateRepublicBackground}
          alt="Stwórz własną republikę"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
    </div>
  )
}

export default Footer
