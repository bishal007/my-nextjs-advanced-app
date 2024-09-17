import { NextApiRequest, NextApiResponse } from 'next'
import { authMiddleware } from '../../lib/authMiddleware'

async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'This is a protected route', user: req.user })
}

export default authMiddleware(handler)