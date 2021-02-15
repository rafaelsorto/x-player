import { fetcher } from 'src/utils/fetcher'
import useSWR from 'swr'

interface LiveStreamCategoriesHook {
  data: any
  isLoading: boolean
  error: any
}

export const useLiveStreamCategories = ({
  username,
  password,
  server,
}: RequestProps): LiveStreamCategoriesHook => {
  const { data, error } = useSWR(
    ['live-stream-categories', username, password, server],
    fetcher,
    { revalidateOnFocus: false }
  )

  return {
    data,
    isLoading: !error && !data,
    error,
  }
}
