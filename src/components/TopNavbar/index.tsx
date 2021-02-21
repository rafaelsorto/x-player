import React from 'react'
import NextLink from 'next/link'
import { Button, Flex } from '@chakra-ui/react'

type LinkProps = {
  href: string
}

const NavLink: React.FC<LinkProps> = ({ children, href, ...rest }) => (
  <NextLink href={href} {...rest}>
    <Button
      as="a"
      colorScheme="blue"
      cursor="pointer"
      minWidth="160px"
      mr={2}
      size="md"
      variant="solid"
    >
      {children}
    </Button>
  </NextLink>
)

export const TopNavbar: React.FC = () => {
  return (
    <Flex>
      <NavLink href="/live/categories">Live Streams</NavLink>
      <NavLink href="/vod/categories">VOD</NavLink>
      <NavLink href="/series/categories">Series</NavLink>
    </Flex>
  )
}
