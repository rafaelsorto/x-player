import { fetcher } from 'src/utils/fetcher'
import useSWR from 'swr'

interface LiveStreamsHook {
  data: any
  isLoading: boolean
  error: any
}

export const useLiveStreams = ({
  username,
  password,
  server,
}: RequestProps): LiveStreamsHook => {
  const { data, error } = useSWR(
    ['live-streams', username, password, server],
    fetcher,
    { revalidateOnFocus: false }
  )

  return {
    data,
    isLoading: !error && !data,
    error,
  }
}
