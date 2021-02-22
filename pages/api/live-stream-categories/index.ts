// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { allowCors } from 'src/utils/api/allowCors'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { username, password, server } = req.body

  const params = new URLSearchParams()
  params.append('username', username)
  params.append('password', password)
  params.append('action', 'get_live_categories')

  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }

  try {
    const { data } = await axios.post(
      `${server}/player_api.php`,
      params,
      config
    )
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({
      error: true,
      message: 'Failed to get Live Stream Categories',
      errors: [],
    })
  }
}

export default allowCors(handler)
