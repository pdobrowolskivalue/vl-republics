import tw from 'twin.macro'

export const SmallLinkButton = tw.a`
  border rounded-3xl py-0.5 px-3 text-center cursor-pointer text-xs font-semibold
`

export const ButtonStyle = `
  border border-vlr-accent rounded-3xl
  py-3 px-7
  bg-vlr-accent cursor-pointer
  text-vlr-dark uppercase font-semibold text-center text-xs sm:text-sm
  inline-block
`

export const LinkButton = tw.a`${ButtonStyle}`

export const CustomButton = tw.button`${ButtonStyle}`
