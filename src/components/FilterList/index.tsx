import React, { useMemo } from 'react'
import { filter as rFilter } from 'ramda'
import { Wrap, WrapItem } from '@chakra-ui/react'

export const FilterList = ({ filter, keyExtractor, items, Item }) => {
  const filteredItems: any = useMemo((): any => {
    return rFilter(filter)(items) as any
  }, [filter, items])

  return (
    <Wrap>
      {filteredItems.map((item) => (
        <WrapItem
          backgroundColor="gray.100"
          borderRadius="md"
          key={keyExtractor(item)}
          mb={1}
          padding={2}
          width={{ sm: '100%', md: '49%', lg: '33%', xl: '24.5%' }}
        >
          <Item item={item} />
        </WrapItem>
      ))}
    </Wrap>
  )
}
