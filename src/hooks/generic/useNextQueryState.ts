import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

type SetValueType = (arg0: string) => void

export const useNextQueryState = (key, initialState = '') => {
  const [initialized, setInitialized] = useState(false)
  const router = useRouter()
  const {
    query: { [key]: value },
  } = router

  const setValue = useCallback<SetValueType>(
    (newValue) => {
      router.push({ query: { ...router.query, [key]: newValue } })
    },
    [router.query]
  )

  useEffect(() => {
    if (router.isReady && !initialized) {
      const {
        query,
        query: { [key]: populatedState },
      } = router
      setInitialized(true)
      router.push({
        query: { ...query, [key]: populatedState || initialState },
      })
    }
  }, [router.isReady])

  return [initialized ? value : initialState, setValue] as const
}
