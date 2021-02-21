import Axios from 'axios'

const axios = Axios.create({ baseURL: process.env.NEXT_PUBLIC_API_BASE_URL })

export const fetcher = (
  url: string,
  username: string,
  password: string,
  server: string
): any =>
  axios.post(url, { username, password, server }).then((res) => res.data)
