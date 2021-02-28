import React, { useEffect, useState } from 'react'
import { Loading, Redirect } from 'src/components'
import Cookies from 'js-cookie'
import { PlayerLayout } from 'src/components/PlayerLayout'
import { VODStreamCategories } from 'src/containers/VODStreamCategories'
import { useDispatch } from 'src/store/hooks'
import { setIdle } from 'src/store/features/player'

const VODCategoriesPage: React.FC = () => {
  const [account] = useState(Cookies.getJSON('x-player-account'))
  const [loaded, setLoaded] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    setLoaded(true)
    dispatch(setIdle())
  }, [])

  if (!loaded) {
    return <Loading message="Loading..." />
  }

  return account ? (
    <div>
      <PlayerLayout showPlayer={false}>
        <div>
          <VODStreamCategories account={account} />
        </div>
      </PlayerLayout>
    </div>
  ) : (
    <Redirect to={'/'} message="Account not found" />
  )
}

export default VODCategoriesPage
