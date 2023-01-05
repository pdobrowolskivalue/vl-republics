import tw from 'twin.macro'

export const ButtonStyle = `
  inline-block
  border border-vlr-accent rounded-3xl
  bg-vlr-accent cursor-pointer
  py-3 px-7
  font-poppins font-semibold leading-[21px] text-vlr-dark uppercase
`

export const LinkButton = tw.a`${ButtonStyle}`

export const CustomButton = tw.button`${ButtonStyle}`
