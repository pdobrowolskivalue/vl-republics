import tw from 'twin.macro'

const Container = tw.div`
  pt-[50px] pb-[32px] px-[32px]
  bg-[#FFFFFF] rounded-md shadow-[0 1px 0 #E5E5EB]
  w-[290px] max-w-[290px]
  flex flex-col
  gap-[27px]
`

export const WelcomeCard = ({
  children,
  title,
  description,
}: {
  children: React.ReactNode
  title: string
  description: string
}) => {
  return (
    <Container>
      <div tw="mx-auto">{children}</div>
      <div>
        <div tw="font-medium text-[20px] leading-[36px] text-[#07062A]">{title}</div>
        <div tw="text-[14px] leading-[26px] text-[#373657] text-center">{description}</div>
      </div>
    </Container>
  )
}
