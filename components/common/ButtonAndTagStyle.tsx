import tw from 'twin.macro'

const ButtonAndTagStyle = `
  inline-block
  border border-solid border-vlr-accent rounded-3xl
  bg-vlr-accent cursor-pointer
  py-3 px-7
  font-poppins font-semibold leading-[21px] text-vlr-dark uppercase
`

const TagStyle = `
 bg-transparent
 text-vlr-accent
`

export const LinkButton = tw.a`
  ${ButtonAndTagStyle}
`

export const CustomButton = tw.button`
  ${ButtonAndTagStyle}
`

export const NewsLinkButton = tw.a`
  ${ButtonAndTagStyle}
  ${TagStyle}
  py-[10px] px-[21px]
  no-underline
`

export const Tag = tw.div`
  ${ButtonAndTagStyle}
  ${TagStyle}
  py-0 px-[10px]
  leading-[26px]
`
