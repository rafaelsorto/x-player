import { fetcher } from 'src/utils/fetcher'
import useSWR from 'swr'

interface VODStreamsHook {
  data: any
  isLoading: boolean
  error: any
}

export const useVODStreams = ({
  username,
  password,
  server,
}: RequestProps): VODStreamsHook => {
  const { data, error } = useSWR(
    ['vod-streams', username, password, server],
    fetcher,
    { revalidateOnFocus: false }
  )

  return {
    data,
    isLoading: !error && !data,
    error,
  }
}
