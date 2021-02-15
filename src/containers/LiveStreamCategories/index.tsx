import React from 'react'
import { ErrorMessage, Loading } from 'src/components'
import { useLiveStreamCategories } from 'src/hooks/xtreamAPI/useLiveStreamCategories'

interface LiveStreamCategoriesProps {
  account: any
}

export const LiveStreamCategories: React.FC<LiveStreamCategoriesProps> = ({
  account,
}) => {
  const { username, password, server } = account
  const { data, isLoading, error } = useLiveStreamCategories({
    username,
    password,
    server,
  })

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
    <div>
      <pre>{JSON.stringify(data, undefined, 2)}</pre>
    </div>
  )
}
