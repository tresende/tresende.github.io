import Mock from 'mocks/mock'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    res.send(req.body)
  } else {
    res.send(Mock)
  }
}
