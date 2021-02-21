import React, { useEffect, useState } from 'react'
import { PlayerLayout } from 'src/components/PlayerLayout'
import Cookies from 'js-cookie'
import { Loading } from 'src/components'
import { LiveStreams } from 'src/containers'

const CategoryViewPage: React.FC = () => {
  const [account] = useState(Cookies.getJSON('x-player-account'))
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  if (!loaded) {
    return <Loading message="Loading..." />
  }

  return (
    <div>
      <PlayerLayout showPlayer={true}>
        <LiveStreams account={account} />
      </PlayerLayout>
    </div>
  )
}

export default CategoryViewPage
