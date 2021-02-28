import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import Cookies from 'js-cookie'
import { useDispatch } from 'src/store/hooks'
import { play, setIdle } from 'src/store/features/player'

interface ItemProps {
  item: Stream
}

export const Item: React.FC<ItemProps> = ({
  item: { container_extension, name, stream_id, stream_type },
}) => {
  const [{ server, username, password }] = useState(
    Cookies.getJSON('x-player-account')
  )
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(setIdle())
    dispatch(
      play(
        `${server}/${stream_type}/${username}/${password}/${stream_id}.${container_extension}`
      )
    )
  }

  return (
    <Box
      onClick={handleClick}
      backgroundColor="gray.100"
      borderRadius="md"
      cursor="pointer"
      _hover={{ backgroundColor: 'gray.200', boxShadow: 'sm' }}
      m={1}
      p={2}
    >
      {name}
    </Box>
  )
}
