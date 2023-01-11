import { useRef, useState } from 'react'
import tw from 'twin.macro'

import { Container } from '@components/common/Container'
import { CustomButton, LinkButton } from '@components/common/ButtonAndTagStyle'
import { Paragraph, Title } from '@components/common/TextStyles'

import { FormField } from './FormField'

const Footer = () => {
  const createNewRepublicForm = useRef<null | HTMLDivElement>(null)

  const initialState = { name: '', email: '', republicName: '', description: '' }

  const [isFormOpen, setIsFormOpen] = useState(false)
  const [inputs, setInputs] = useState(initialState)

  const handleChange = (event: any) => {
    const { name, value } = event.target
    setInputs(values => ({ ...values, [name]: value }))
  }

  const delay = (ms: any) => new Promise(resolve => setTimeout(resolve, ms))

  const openProposeNewRepublicForm = async () => {
    setIsFormOpen(!isFormOpen)
    await delay(1)
    createNewRepublicForm.current?.scrollIntoView({ behavior: 'smooth' })
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
          <Title tw="mb-10">Stwórz własną Republikę!</Title>
          <Paragraph tw="text-white my-8">
            Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
            labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,{' '}
          </Paragraph>
          <LinkButton onClick={openProposeNewRepublicForm}>Napisz do nas</LinkButton>
        </Container>
      </div>
      <div ref={createNewRepublicForm} css={isFormOpen ? tw`block` : tw`hidden`}>
        <form
          onSubmit={e => {
            proposeNewRepublic(e)
          }}
          tw="pt-10 pb-20 px-5 bg-black flex flex-col items-center bg-[rgba(255, 255, 255, 0.05)]"
        >
          <div tw="max-w-[1100px] w-full h-full">
            <div tw="w-full flex flex-col md:flex-row gap-5">
              <div tw="w-full flex flex-col gap-5">
                <FormField name="name" label="Imię" value={inputs.name} handleChange={handleChange} />
                <FormField name="email" label="Adres e-mail" value={inputs.email} handleChange={handleChange} />
              </div>
              <div tw="w-full flex flex-col gap-5">
                <FormField
                  name="republicName"
                  label="Nazwa republiki"
                  value={inputs.republicName}
                  handleChange={handleChange}
                />
                <FormField
                  textarea={true}
                  name="description"
                  label="Krótki opis"
                  value={inputs.description}
                  handleChange={handleChange}
                />
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
