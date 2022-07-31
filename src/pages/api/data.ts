import Cors from 'cors'
import { NextApiRequest, NextApiResponse } from 'next'
import convetToFirestore from 'utils/convetToFirestore'

const pixel = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==)'

const initMiddleware = (middleware: any) => (req: NextApiRequest, res: NextApiResponse) =>
  new Promise((resolve) => {
    middleware(req, res, (result: any) => resolve(result))
  })

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
    const imageContent = Buffer.from(pixel, 'base64').toString()
    res.writeHead(200, {
      'Content-Type': 'image/png',
      'Content-Length': imageContent.length
    })
    res.end(imageContent)
  } catch (error) {
    res.status(500).json(error)
  }
}

export default handler
