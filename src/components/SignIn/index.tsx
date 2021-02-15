import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useToast,
} from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { auth } from 'src/clients/auth'

export const SignIn: React.FC = () => {
  const toast = useToast()
  const router = useRouter()

  const handleSubmit = async (values, formikBag) => {
    try {
      const { user_info } = await auth.login(values)
      if (user_info.status === 'Active') {
        router.push('/play')
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
    <Box data-testid="sign-in" maxW="sm" width="100%">
      <Box
        background="white"
        width="100%"
        p={8}
        boxShadow="sm"
        borderRadius="md"
      >
        <Box mb={4}>
          <Heading>Login</Heading>
        </Box>
        <Formik
          initialValues={{ server: '', username: '', password: '' }}
          onSubmit={handleSubmit}
        >
          <Form>
            <Stack spacing={4}>
              <Field name="username">
                {({ field, form }) => {
                  return (
                    <FormControl
                      id="username"
                      isInvalid={form.errors.username && form.touched.username}
                    >
                      <FormLabel>Username</FormLabel>
                      <Input placeholder="username" type="text" {...field} />
                    </FormControl>
                  )
                }}
              </Field>
              <Field name="password">
                {({ field, form }) => {
                  return (
                    <FormControl
                      id="password"
                      isInvalid={form.errors.password && form.touched.password}
                    >
                      <FormLabel>Password</FormLabel>
                      <Input placeholder="password" type="text" {...field} />
                    </FormControl>
                  )
                }}
              </Field>
              <Field name="server">
                {({ field, form }) => {
                  return (
                    <FormControl
                      id="server"
                      isInvalid={form.errors.server && form.touched.server}
                    >
                      <FormLabel>Server</FormLabel>
                      <Input
                        placeholder="http://server:port"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                  )
                }}
              </Field>
              <Button type="submit">Login</Button>
            </Stack>
          </Form>
        </Formik>
      </Box>
    </Box>
  )
}
