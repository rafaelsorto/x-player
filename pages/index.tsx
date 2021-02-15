import { Flex, useToast } from '@chakra-ui/react'
import Head from 'next/head'
import { SignIn } from 'src/components/SignIn'
import { auth } from 'src/clients/auth'
import Cookies from 'js-cookie'
import { useRouter } from 'next/dist/client/router'

export const Home: React.FC = (): JSX.Element => {
  const toast = useToast()
  const router = useRouter()
  const handleSubmit = async (values, formikBag) => {
    try {
      const { user_info } = await auth.login(values)
      if (user_info.status === 'Active') {
        Cookies.set(
          'x-player-account',
          JSON.stringify({ ...user_info, server: values.server })
        )
        router.push('/live')
      } else {
        toast({
          position: 'top',
          title: 'Account Expired',
          description: `Your account expired on ${new Date(
            user_info.exp_date * 1000
          ).toLocaleDateString()}`,
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      }
    } catch (error) {
      toast({
        position: 'top',
        title: 'Failed to Login',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
      formikBag.setSubmitting(false)
    }
  }

  return (
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
        <SignIn onSubmit={handleSubmit} />
      </Flex>
    </>
  )
}

export default Home
