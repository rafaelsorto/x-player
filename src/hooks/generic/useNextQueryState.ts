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
      router.replace({ query: { ...router.query, [key]: newValue } })
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
      router.replace({
        query: { ...query, [key]: populatedState || initialState },
      })
    }
  }, [router.isReady])

  return [initialized ? (value as string) : initialState, setValue] as const
}
