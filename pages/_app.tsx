import { ChakraProvider } from '@chakra-ui/react'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'

import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps): ReactJSXElement {
  return (
    <ChakraProvider resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
