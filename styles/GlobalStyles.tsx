import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle({
  body: {
    ...tw`
      antialiased
      dark:(text-white bg-black)
    `,
  },
})

const GlobalStyles = () => {
  return (
    <>
      <CustomStyles />
      <BaseStyles />
    </>
  )
}

export default GlobalStyles
