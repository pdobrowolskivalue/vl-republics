import Head from 'next/head'
import { SyntheticEvent, useRef, useState } from 'react'
import 'twin.macro'

import { Container } from '@components/common/Container'
import { Main } from '@components/common/Main'

export default function CreateRepublic() {
  const nameInputRef = useRef<HTMLInputElement>(null)
  const descriptionInputRef = useRef<HTMLTextAreaElement>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)
  const [createError, setError] = useState<string>('')

  const requestCreateRepublicProposition = async (name: string, description: string) => {
    setSuccess(false)
    setError('')
    setIsLoading(true)
    try {
      const resp = await fetch('/api/republic/create', {
        method: 'POST',
        body: JSON.stringify({
          name,
          description,
        }),
      })
      const data = await resp.json()
      if (data.error) {
        setError(data.message)
      }

      if (data.id && nameInputRef.current && descriptionInputRef.current) {
        nameInputRef.current.value = ''
        descriptionInputRef.current.value = ''
        setSuccess(true)
      }
    } catch (error) {
      setError((error as Error).message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleFormOnSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!nameInputRef.current?.value || !descriptionInputRef.current?.value) {
      return
    }

    requestCreateRepublicProposition(nameInputRef.current.value, descriptionInputRef.current.value)
  }

  return (
    <div>
      <Head>
        <title>Republiki ValueLogic - Stwóż Republikę</title>
        <meta name="description" content="Republiki ValueLogic" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div tw="relative w-full flex items-center justify-center h-[500px]">
        <Container tw="z-10">
          <h2 tw="text-4xl">Stwórz własną Republikę!</h2>
        </Container>
      </div>

      <Main tw=" bg-white text-vlr-dark">
        <Container tw="text-left">
          <p tw="mb-16">
            Quis commodo nulla sunt qui aliqua adipisicing est aliquip duis quis. Aliqua eiusmod dolor officia amet
            eiusmod deserunt dolore eu mollit tempor. Deserunt fugiat velit minim ipsum aliquip laborum nulla Lorem
            fugiat aliquip sit.
          </p>
          {success && (
            <div tw="p-5 mb-6 bg-green-200 border-green-500 rounded-lg">
              Dzięki za zgłoszenie propozycji na nową Republikę 👍
            </div>
          )}
          {createError && (
            <div tw="p-5 mb-6 bg-red-200 border-red-500 rounded-lg">Coś poszło nie tak:{createError}</div>
          )}
          <form onSubmit={handleFormOnSubmit} tw="w-full">
            <div tw="w-full mb-4">
              <input
                ref={nameInputRef}
                name="name"
                tw="border border-gray-200 rounded-lg bg-gray-50 w-full p-5"
                placeholder="Nazwa republiki"
              />
            </div>
            <div tw="w-full mb-8">
              <textarea
                ref={descriptionInputRef}
                name="description"
                tw="border border-gray-200 rounded-lg bg-gray-50 w-full p-5"
                placeholder="Krótki opis"
              />
            </div>
            <div tw="w-full text-right">
              <button
                disabled={isLoading}
                tw="text-gray-800 font-bold text-lg border bg-gray-200 px-20 py-3 rounded-lg"
                type="submit"
              >
                Zgłoś
              </button>
            </div>
          </form>
        </Container>
      </Main>
    </div>
  )
}
