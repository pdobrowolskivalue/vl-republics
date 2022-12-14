import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import tw from 'twin.macro'

const Grid = tw.div`
  flex items-center justify-center w-full flex-col
  sm:(max-w-[800px] flex-row flex-wrap)
`

const Card = tw.a`
  m-4 p-6 text-left no-underline
  border border-solid border-vlr-mild bg-vlr-backdrop max-w-[300px] rounded-2xl
  hover:(text-vlr-accent border-vlr-accent)
  focus:(text-vlr-accent border-vlr-accent)
  active:(text-vlr-accent border-vlr-accent)

  [> h2]:(m-[0 0 1rem 0] text-2xl font-extrabold)
  [> p]:(m-0 text-[1.25rem] [line-height:1.5])

  transition-colors duration-150

  dark:border-vlr-mild
`

const Home: NextPage = () => {
  return (
    <div tw="px-8">
      <Head>
        <title>ValueLogic - Republiki</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main tw="py-16 flex flex-1 flex-col items-center justify-center min-h-screen">
        <p tw="my-16 text-2xl">
          Get started by editing{' '}
          <code tw="bg-zinc-100 dark:bg-vlr-backdrop border border-vlr-mild rounded text-[1.1rem] p-3 font-mono">
            pages/index.tsx
          </code>
        </p>

        <Grid>
          <Card href="https://nextjs.org/docs">
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </Card>

          <Card href="https://nextjs.org/learn">
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </Card>

          <Card href="https://github.com/vercel/next.js/tree/canary/examples">
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </Card>

          <Card href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <h2>Deploy &rarr;</h2>
            <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </Card>
        </Grid>
      </main>

      <footer tw="flex items-center justify-center flex-1 py-8 border-t border-zinc-200 dark:border-zinc-800">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span tw="h-4 ml-2">
            <Image tw="dark:invert" src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
