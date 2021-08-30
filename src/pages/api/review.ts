import Cors from 'cors'
import request from 'request'
import { NextApiRequest, NextApiResponse } from 'next'

import Mock from 'mocks/mock'
import initMiddleware from '../../lib/init-middleware'

const cors = initMiddleware(
  Cors({
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS']
  })
)

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res)
  if (req.method === 'POST') {
    request.post('https://borc-9faa2-default-rtdb.firebaseio.com/review.json', { json: req.body }, (err) => {
      console.error(err)
      res.send(req.body)
    })
  } else {
    res.send(Mock)
  }
}
