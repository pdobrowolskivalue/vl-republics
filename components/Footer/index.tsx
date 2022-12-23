import 'twin.macro'

import Link from 'next/link'

import { Container } from '@components/common/Container'
import { LinkButton } from '@components/common/LinkButton'

const Footer = () => {
  return (
    <div id="create-new-republic" tw="relative w-full flex items-center justify-center py-16">
      <Container tw="z-10 mx-5">
        <h2 tw="text-4xl text-center font-semibold">Stwórz własną Republikę!</h2>
        <p tw="my-8">
          Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
          ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
          labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,{' '}
        </p>
        <Link href="/create">
          <LinkButton tw="border-none inline-flex items-center justify-center bg-vlr-accent text-black px-5 py-3">
            Napisz do nas
          </LinkButton>
        </Link>
      </Container>
    </div>
  )
}

export default Footer
