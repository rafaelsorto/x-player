import { Box, Heading } from '@chakra-ui/react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import React, { useState } from 'react'
import Cookies from 'js-cookie'
import { useDispatch } from 'src/store/hooks'
import { play, setIdle } from 'src/store/features/player'
import { isNotNilOrEmpty } from 'ramda-adjunct'

interface ItemProps {
  item: Stream
}

export const Item: React.FC<ItemProps> = ({
  item: { container_extension, name, stream_icon, stream_id, stream_type },
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
      textAlign="center"
    >
      {isNotNilOrEmpty(stream_icon) && (
        <Box width="150px" m="0 auto">
          <LazyLoadImage src={stream_icon} style={{ borderRadius: '8px' }} />
        </Box>
      )}
      <Heading as="h6" size="xs" my={4}>
        {name}
      </Heading>
    </Box>
  )
}
