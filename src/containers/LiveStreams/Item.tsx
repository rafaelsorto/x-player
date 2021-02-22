import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import Cookies from 'js-cookie'
import { useDispatch } from 'src/store/hooks'
import { play, setIdle } from 'src/store/features/player'

interface ItemProps {
  item: Stream
}

export const Item: React.FC<ItemProps> = ({ item: { name, stream_id } }) => {
  const [{ server, username, password }] = useState(
    Cookies.getJSON('x-player-account')
  )
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(setIdle())
    dispatch(play(`${server}/live/${username}/${password}/${stream_id}.m3u8`))
  }

  return (
    <Box
      onClick={handleClick}
      backgroundColor="gray.100"
      borderRadius="md"
      mb={1}
      padding={2}
      width="100%"
      height="100%"
      cursor="pointer"
      _hover={{ backgroundColor: 'gray.200' }}
    >
      {name}
    </Box>
  )
}
