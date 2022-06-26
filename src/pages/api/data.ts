import Cors from 'cors'
import { NextApiRequest, NextApiResponse } from 'next'
import convetToFirestore from 'utils/convetToFirestore'

const initMiddleware = (middleware: any) => {
  return (req: NextApiRequest, res: NextApiResponse) =>
    new Promise((resolve) => {
      middleware(req, res, (result: any) => {
        return resolve(result)
      })
    })
}

const cors = initMiddleware(Cors({ methods: ['GET', 'POST', 'OPTIONS'] }))

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res)
  const headers = convetToFirestore(req.headers)
  const body = convetToFirestore(req.body)

  try {
    await fetch(process.env.FIREBASE_URL as string, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fields: {
          ...headers,
          ...body
        }
      })
    })
    res.status(200).json({})
  } catch (error) {
    res.status(500).json(error)
  }
}

export default handler
