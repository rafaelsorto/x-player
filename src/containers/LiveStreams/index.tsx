import { Heading, Input, VStack } from '@chakra-ui/react'
import { useNextQueryState } from 'src/hooks/generic/useNextQueryState'
import { filter as rFilter, find, prop, propEq } from 'ramda'
import React, { useCallback, useMemo } from 'react'
import { ErrorMessage, FilterList, Loading } from 'src/components'
import { filterStreams } from 'src/utils/filterStreams'
import { useLiveStreams } from 'src/hooks/xtreamAPI/useLiveStreams'
import { useRouter } from 'next/router'
import { Item } from 'src/containers/LiveStreams/Item'
import { useLiveStreamCategories } from 'src/hooks/xtreamAPI/useLiveStreamCategories'

interface LiveStreamsProps {
  account: any
}

export const LiveStreams: React.FC<LiveStreamsProps> = ({ account }) => {
  const { username, password, server } = account
  const [filter, setFilter] = useNextQueryState('filter')
  const { data, isLoading, error } = useLiveStreams({
    username,
    password,
    server,
  })
  const { data: categoryData } = useLiveStreamCategories({
    username,
    password,
    server,
  })

  const router = useRouter()
  const { categoryId }: { categoryId?: string } = router.query

  const category = useMemo(() => {
    if (categoryId === 'all') {
      return {
        category_id: '-1',
        category_name: 'All Live Streams',
        parent_id: 0,
      }
    }

    return find(propEq('category_id', categoryId ?? ''))(
      categoryData ?? []
    ) as Category
  }, [categoryData])

  const streamsByCategory: Stream[] = useMemo(() => {
    return rFilter((s: Stream): boolean => {
      if (categoryId === 'all') {
        return true
      }

      return s.category_id === categoryId
    })(data ?? []) as Stream[]
  }, [categoryId, data])

  const handleFilter = useCallback(
    (e) => {
      setFilter(e.target.value)
    },
    [setFilter]
  )

  if (isLoading) {
    return <Loading message="Loading Live Streams" />
  }

  if (error) {
    return (
      <ErrorMessage>
        Failed to get Live Streams. Please reload this page.
      </ErrorMessage>
    )
  }

  return (
    <VStack spacing="4" align="stretch">
      <Heading color="blue.700">{category?.category_name}</Heading>
      <Input
        placeholder="Search Streams"
        onChange={handleFilter}
        value={filter ?? ''}
      />
      <FilterList
        filter={filterStreams({ filter })}
        keyExtractor={prop('stream_id')}
        items={streamsByCategory}
        Item={Item}
      />
    </VStack>
  )
}
