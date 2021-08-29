import { NextApiRequest, NextApiResponse } from 'next'
import request from 'request'

import Mock from 'mocks/mock'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    await request.post('https://borc-9faa2-default-rtdb.firebaseio.com/review.json', { json: req.body })
    await res.send(req.body)
  } else {
    res.send(Mock)
  }
}
