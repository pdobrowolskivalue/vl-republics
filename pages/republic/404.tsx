import Link from 'next/link'

import { Container } from '@components/common/Container'
import { LinkButton } from '@components/common/ButtonStyle'
import { Main } from '@components/common/Main'
import 'twin.macro'

export default function Republic404() {
  return (
    <Main tw="items-center justify-center">
      <Container>
        <div tw="divide-x divide-vlr-accent flex items-center mb-16">
          <span tw="p-4 text-2xl">Republic 404</span>
          <span tw="p-4">Nie mamy jeszcze takiej Republiki</span>
        </div>
        <div>
          <Link href="/">
            <LinkButton tw="hover:text-black hover:bg-vlr-accent hover:border-vlr-accent transition-all">
              Wróć do strony głównej
            </LinkButton>
          </Link>
        </div>
      </Container>
    </Main>
  )
}
