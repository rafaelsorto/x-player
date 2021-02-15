import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  CloseButton,
} from '@chakra-ui/react'
import React from 'react'

interface ErrorMessageProps {
  title?: string
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  children,
  title,
}) => {
  return (
    <Alert status="error">
      <AlertIcon />
      {title && <AlertTitle mr={2}>{title}</AlertTitle>}
      <AlertDescription>{children}</AlertDescription>
      <CloseButton position="absolute" right="8px" top="8px" />
    </Alert>
  )
}
