import { NextApiRequest, NextApiResponse } from 'next'
import { convetToFirestore } from 'utils/convetToFirestore'

export default async function handler(req: NextApiRequest, resp: NextApiResponse) {
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
    resp.status(200).json({})
  } catch (error) {
    resp.status(500).json(error)
  }
}
