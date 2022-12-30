import { useState } from 'react'
import tw from 'twin.macro'

import { Container } from '@components/common/Container'
import { CustomButton, LinkButton } from '@components/common/LinkButton'

const Footer = () => {
  const initialState = { name: '', email: '', republicName: '', description: '' }

  const [isFormOpen, setIsFormOpen] = useState(false)
  const [inputs, setInputs] = useState(initialState)

  const handleChange = (event: any) => {
    const { name, value } = event.target
    setInputs(values => ({ ...values, [name]: value }))
  }

  const openProposeNewRepublicForm = () => {
    setIsFormOpen(!isFormOpen)
  }

  const proposeNewRepublic = (event: any) => {
    event.preventDefault()

    return fetch('/api/republic/create', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    }).then(res => {
      res.status === 200 && setInputs(initialState)
    })
  }

  return (
    <div>
      <div id="create-new-republic" tw="relative w-full flex items-center justify-center py-16">
        <Container tw="z-10 mx-5">
          <h2 tw="text-4xl text-center font-semibold">Stwórz własną Republikę!</h2>
          <p tw="my-8">
            Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
            labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,{' '}
          </p>
          <LinkButton onClick={openProposeNewRepublicForm}>Napisz do nas</LinkButton>
        </Container>
      </div>
      <div css={isFormOpen ? tw`block` : tw`hidden`}>
        <form
          onSubmit={e => {
            proposeNewRepublic(e)
          }}
          tw="pt-10 pb-20 px-5 bg-black flex flex-col items-center bg-[rgba(255, 255, 255, 0.05)]"
        >
          <div tw="max-w-[1100px] w-full h-full">
            <div tw="w-full flex flex-col md:flex-row gap-5">
              <div tw="w-full flex flex-col gap-5">
                <div tw="w-full">
                  <label htmlFor="name" tw="inline-block mb-3">
                    Imię
                  </label>
                  <input
                    name="name"
                    value={inputs.name}
                    onChange={handleChange}
                    tw="w-full border border-vlr-accent/50 rounded bg-vlr-dark p-4"
                  />
                </div>
                <div tw="w-full">
                  <label htmlFor="email" tw="inline-block mb-3">
                    Adres e-mail
                  </label>
                  <input
                    name="email"
                    value={inputs.email}
                    onChange={handleChange}
                    tw="w-full border border-vlr-accent/50 rounded bg-vlr-dark p-4"
                  />
                </div>
              </div>
              <div tw="w-full flex flex-col gap-5">
                <div tw="w-full">
                  <label htmlFor="republicName" tw="inline-block mb-3">
                    Nazwa republiki
                  </label>
                  <input
                    name="republicName"
                    value={inputs.republicName}
                    onChange={handleChange}
                    tw="w-full border border-vlr-accent/50 rounded bg-vlr-dark p-4"
                  />
                </div>
                <div tw="w-full">
                  <label htmlFor="description" tw="inline-block mb-3">
                    Krótki opis
                  </label>
                  <textarea
                    name="description"
                    value={inputs.description}
                    onChange={handleChange}
                    rows={6}
                    tw="w-full border border-vlr-accent/50 rounded bg-vlr-dark p-4 overflow-hidden resize-none"
                  />
                </div>
              </div>
            </div>
            <CustomButton type="submit" tw="float-right mt-4">
              Wyślij
            </CustomButton>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Footer
