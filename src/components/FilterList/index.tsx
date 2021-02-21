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
          key={keyExtractor(item)}
          flexBasis={{ base: '100%', md: '48.5%', lg: '32.5%', xl: '24.5%' }}
        >
          <Item item={item} />
        </WrapItem>
      ))}
    </Wrap>
  )
}
