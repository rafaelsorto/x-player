import React, { useEffect, useState } from 'react'
import { Loading, Redirect } from 'src/components'
import Cookies from 'js-cookie'
import { PlayerLayout } from 'src/components/PlayerLayout'
import { LiveStreamCategories } from 'src/containers'

const LiveCategoriesPage: React.FC = () => {
  const [account] = useState(Cookies.getJSON('x-player-account'))
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  if (!loaded) {
    return <Loading message="Loading..." />
  }

  return account ? (
    <div>
      <PlayerLayout showPlayer={false}>
        <div>
          <LiveStreamCategories account={account} />
        </div>
      </PlayerLayout>
    </div>
  ) : (
    <Redirect to={'/'} message="Account not found" />
  )
}

export default LiveCategoriesPage
