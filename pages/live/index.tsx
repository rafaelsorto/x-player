import { useRouter } from 'next/dist/client/router'
import React, { useEffect } from 'react'
import { Loading } from 'src/components'

const LivePage: React.FC = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/live/categories')
  }, [])

  return <Loading />
}

export default LivePage
