import { fetcher } from 'src/utils/fetcher'
import useSWR from 'swr'

interface VODStreamCategoriesHook {
  data: any
  isLoading: boolean
  error: any
}

export const useVODStreamCategories = ({
  username,
  password,
  server,
}: RequestProps): VODStreamCategoriesHook => {
  const { data, error } = useSWR(
    ['vod-stream-categories', username, password, server],
    fetcher,
    { revalidateOnFocus: false }
  )

  return {
    data,
    isLoading: !error && !data,
    error,
  }
}
