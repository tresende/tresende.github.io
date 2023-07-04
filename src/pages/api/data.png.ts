/* eslint-disable */

import Cors from 'cors'
import fs from 'fs'
import { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import convetToFirestore from 'utils/convetToFirestore'

const filePath = path.resolve('.', 'public/img/404.png')
const imageBuffer = fs.readFileSync(filePath)

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
    res.setHeader('Content-Type', 'image/jpg')
    res.send(imageBuffer)
  } catch (error) {
    res.status(500).json(error)
  }
}

export default handler
