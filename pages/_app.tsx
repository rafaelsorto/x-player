import { ChakraProvider } from '@chakra-ui/react'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import { Provider } from 'react-redux'

import { AppProps } from 'next/app'
import theme from 'src/styles/theme'
import { useStore } from '../src/store'

function MyApp({ Component, pageProps }: AppProps): ReactJSXElement {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default MyApp
