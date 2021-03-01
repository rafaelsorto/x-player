import { Box, Heading, Input, VStack } from '@chakra-ui/react'
import { useNextQueryState } from 'src/hooks/generic/useNextQueryState'
import { prop } from 'ramda'
import React, { useCallback } from 'react'
import { ErrorMessage, FilterList, Loading } from 'src/components'
import { useLiveStreamCategories } from 'src/hooks/xtreamAPI/useLiveStreamCategories'
import { filterCategories } from 'src/utils/filterCategories'
import Link from 'next/link'

interface LiveStreamCategoriesProps {
  account: any
}

interface ItemProps {
  item: Category
}

const Item: React.FC<ItemProps> = ({
  item: { category_id, category_name },
}) => (
  <Link href={`/live/categories/${category_id}`}>
    <Box
      as="a"
      backgroundColor="gray.100"
      borderRadius="md"
      cursor="pointer"
      _hover={{ backgroundColor: 'gray.200', boxShadow: 'sm' }}
      m={1}
      p={2}
    >
      {category_name}
    </Box>
  </Link>
)

export const LiveStreamCategories: React.FC<LiveStreamCategoriesProps> = ({
  account,
}) => {
  const { username, password, server } = account
  const [filter, setFilter] = useNextQueryState('filter')
  const { data, isLoading, error } = useLiveStreamCategories({
    username,
    password,
    server,
  })

  const handleFilter = useCallback(
    (e) => {
      setFilter(e.target.value)
    },
    [setFilter]
  )

  if (isLoading) {
    return <Loading message="Loading Live Stream Categories" />
  }

  if (error) {
    return (
      <ErrorMessage>
        Failed to get Live Stream Categories. Please reload this page.
      </ErrorMessage>
    )
  }

  return (
    <VStack spacing="4" align="stretch">
      <Heading color="blue.700">Live Categories</Heading>
      <Input
        placeholder="Search Categories"
        onChange={handleFilter}
        value={filter ?? ''}
      />
      <FilterList
        filter={filterCategories(filter ?? '')}
        keyExtractor={prop('category_id')}
        items={[
          { category_id: 'all', category_name: 'All Live Streams' },
          ...data,
        ]}
        Item={Item}
      />
    </VStack>
  )
}
