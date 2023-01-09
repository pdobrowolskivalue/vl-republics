import tw, { styled } from 'twin.macro'

type ContainerProps = {
  fluid?: boolean
}

export const Container = styled.div(({ fluid = false }: ContainerProps) => [
  tw`text-center px-6 md:px-0`,
  !fluid && tw`lg:w-[870px]`,
])
