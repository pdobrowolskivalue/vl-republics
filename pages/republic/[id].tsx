import { Container } from '@components/common/Container'
import { Main } from '@components/common/Main'
import { getRepublic } from '@lib/api/hygraph'
import { RepublicData, Republics } from 'types/republic'

type RepublicProps = {
  republic: RepublicData
}

export default function Republic({ republic }: RepublicProps) {
  if (!republic) {
    return (
      <Main>
        <Container>
          <p>Jeszcze nie mamy takiej Republiki</p>
        </Container>
      </Main>
    )
  }

  return (
    <Main>
      <Container>
        Republika
        <code>
          <pre>{JSON.stringify(republic, null, 2)}</pre>
        </code>
      </Container>
    </Main>
  )
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const id = params.id.replace(/-/g, '_')
  const data = await getRepublic(id, process.env.VERCEL_ENV !== 'production')

  return {
    props: {
      republic: data.republic,
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(Republics).map(id => ({ params: { id } })),
    fallback: true,
  }
}
