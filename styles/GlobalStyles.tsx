import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle({
  body: {
    ...tw`
      antialiased
      font-inter text-sm text-white
      bg-vlr-dark
    `,
  },
  input: {
    '-webkit-text-fill-color': 'white',
    '-webkit-box-shadow': '0 0 0px 1000px hsl(242, 75%, 9%) inset',
  },
})

const GlobalStyles = () => {
  return (
    <>
      <BaseStyles />
      <CustomStyles />
    </>
  )
}

export default GlobalStyles
