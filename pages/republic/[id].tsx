import { getRepublic } from '@lib/hygraph'

export default function Republic({ republic }: { republic: any }) {
  if (!republic) {
    return <p>Jeszcze nie mamy takiej Republiki</p>
  }

  return (
    <main>
      Republika
      <pre>{JSON.stringify(republic, null, 2)}</pre>
    </main>
  )
}

export async function getStaticProps({ params }: { params: any }) {
  const data = await getRepublic(params.id, true)

  return {
    props: {
      republic: data.republic,
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: 'blockchain' } },
      { params: { id: 'frontend' } },
      { params: { id: 'seo' } },
      { params: { id: 'machineLearning' } },
    ],
    fallback: true,
  }
}
