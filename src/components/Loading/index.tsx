import { Spinner, Text } from '@chakra-ui/react'
import React from 'react'

interface LoadingProps {
  message?: string
}

export const Loading: React.FC<LoadingProps> = ({ message }) => {
  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
        position: 'absolute',
        width: '100%',
      }}
    >
      <Spinner />
      {message && <Text>{message}</Text>}
    </div>
  )
}
