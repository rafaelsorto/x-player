import { Heading, Input, VStack } from '@chakra-ui/react'
import { useNextQueryState } from 'src/hooks/generic/useNextQueryState'
import { prop } from 'ramda'
import React, { useCallback } from 'react'
import { ErrorMessage, FilterList, Loading } from 'src/components'
import { filterStreams } from 'src/utils/filterStreams'
import { useLiveStreams } from 'src/hooks/xtreamAPI/useLiveStreams'
import { useRouter } from 'next/router'
import { Item } from 'src/containers/LiveStreams/Item'

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

  const router = useRouter()
  const { categoryId }: { categoryId?: string } = router.query

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
      <Heading color="blue.700">Live Streams</Heading>
      <Input
        placeholder="Search Streams"
        onChange={handleFilter}
        value={filter ?? ''}
      />
      <FilterList
        stretched={true}
        filter={filterStreams({ filter, categoryId })}
        keyExtractor={prop('stream_id')}
        items={data}
        Item={Item}
      />
    </VStack>
  )
}
