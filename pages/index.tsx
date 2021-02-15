import { Flex } from '@chakra-ui/react'
import Head from 'next/head'
import { SignIn } from 'src/components/SignIn'

export const Home: React.FC = (): JSX.Element => (
  <>
    <Head>
      <title>X-Player :: Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Flex
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100%"
    >
      <SignIn />
    </Flex>

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
  </>
)

export default Home
