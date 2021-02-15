import { useRouter } from 'next/dist/client/router'
import React, { useEffect } from 'react'
import { Loading } from '../Loading'

interface RedirectProps {
  to: string
  message?: string
}

export const Redirect: React.FC<RedirectProps> = ({ to, message }) => {
  const router = useRouter()

  useEffect(() => {
    router.push(to)
  }, [])

  return (
    <div>
      <Loading message={message} />
    </div>
  )
}
