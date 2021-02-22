import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import React from 'react'

interface SignInProps {
  onSubmit: (values, formikBag) => void
}

export const SignIn: React.FC<SignInProps> = ({ onSubmit }) => {
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
          onSubmit={onSubmit}
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
              <Field name="rememberMe">
                {({ field }) => {
                  return (
                    <FormControl id="rememberMe">
                      <Checkbox {...field}>Remember me</Checkbox>
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
