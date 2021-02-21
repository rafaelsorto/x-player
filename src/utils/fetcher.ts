import Axios from 'axios'

const axios = Axios.create({ baseURL: 'https://x-player.vercel.app/api' })

export const fetcher = (
  url: string,
  username: string,
  password: string,
  server: string
): any =>
  axios.post(url, { username, password, server }).then((res) => res.data)
