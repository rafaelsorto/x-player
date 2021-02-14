import { ChakraProvider } from '@chakra-ui/react'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'

import { AppProps } from 'next/app'
import theme from 'src/styles/theme'

function MyApp({ Component, pageProps }: AppProps): ReactJSXElement {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
