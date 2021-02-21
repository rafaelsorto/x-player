import React, { useMemo } from 'react'
import { filter as rFilter } from 'ramda'
import { Wrap, WrapItem } from '@chakra-ui/react'

export const FilterList = ({
  stretched = false,
  filter,
  keyExtractor,
  items,
  Item,
}) => {
  const filteredItems: any = useMemo((): any => {
    return rFilter(filter)(items) as any
  }, [filter, items])

  return (
    <Wrap>
      {filteredItems.map((item) => (
        <WrapItem
          key={keyExtractor(item)}
          flexBasis={
            stretched
              ? '100%'
              : { base: '100%', md: '47%', lg: '32%', xl: '24%' }
          }
          flexGrow={1}
        >
          <Item item={item} />
        </WrapItem>
      ))}
    </Wrap>
  )
}
