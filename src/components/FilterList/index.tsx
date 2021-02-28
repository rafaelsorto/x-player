import React, { useMemo } from 'react'
import { filter as rFilter } from 'ramda'
import { Box } from '@chakra-ui/react'

export const FilterList = ({ filter, keyExtractor, items, Item }) => {
  const filteredItems: any = useMemo((): any => {
    return rFilter(filter)(items) as any
  }, [filter, items])

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      data-testid="filtered-items-container"
    >
      {filteredItems.map((item) => (
        <Box key={keyExtractor(item)} p={1}>
          <Item item={item} />
        </Box>
      ))}
    </Box>
  )
}
