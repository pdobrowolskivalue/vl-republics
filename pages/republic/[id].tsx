import { getRepublic } from '@lib/api/hygraph'
import { RepublicData, Republics } from '@type/republic'
import RepublicLayout from '@components/Republic'

export type RepublicProps = {
  republic: RepublicData
}

export default function Republic({ republic }: RepublicProps) {
  return <RepublicLayout republic={republic}></RepublicLayout>
}

export async function getStaticProps({ params }: { params: { id: Republics } }) {
  if (!Republics[params.id]) {
    return {
      redirect: {
        destination: '/republic/404',
        permanent: false,
      },
    }
  }

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
