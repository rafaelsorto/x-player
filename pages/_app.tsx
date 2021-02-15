import { ChakraProvider } from '@chakra-ui/react'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'

import { AppProps } from 'next/app'
import theme from 'src/styles/theme'

function MyApp({ Component, pageProps }: AppProps): ReactJSXElement {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
      <style jsx global>
        {`
          html,
          body,
          body > div:first-child,
          div#__next,
          div#__next > div {
            background: #eef1f1;
            height: 100%;
          }
        `}
      </style>
    </ChakraProvider>
  )
}

export default MyApp
