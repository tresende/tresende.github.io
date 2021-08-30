import Cors from 'cors'
import request from 'request'
import { NextApiRequest, NextApiResponse } from 'next'

import Mock from 'mocks/mock'
import initMiddleware from '../../lib/init-middleware'

// Initialize the cors middleware
const cors = initMiddleware(
  Cors({
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS']
  })
)

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res)
  if (req.method === 'POST') {
    await request.post('https://borc-9faa2-default-rtdb.firebaseio.com/review.json', { json: req.body })
    await res.send(req.body)
  } else {
    res.send(Mock)
  }
}
