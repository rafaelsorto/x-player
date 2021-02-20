import { Heading, Input, VStack } from '@chakra-ui/react'
import { prop } from 'ramda'
import React, { useCallback, useState } from 'react'
import { ErrorMessage, FilterList, Loading } from 'src/components'
import { useLiveStreamCategories } from 'src/hooks/xtreamAPI/useLiveStreamCategories'
import { filterCategories } from 'src/utils/filterCategories'

interface LiveStreamCategoriesProps {
  account: any
}

const Item: React.FC<Category> = ({ category_name }) => (
  <span>{category_name}</span>
)

export const LiveStreamCategories: React.FC<LiveStreamCategoriesProps> = ({
  account,
}) => {
  const { username, password, server } = account
  const [filter, setFilter] = useState('')
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
        value={filter}
      />
      <FilterList
        filter={filterCategories(filter)}
        keyExtractor={prop('category_id')}
        items={data}
        Item={Item}
      />
    </VStack>
  )
}
