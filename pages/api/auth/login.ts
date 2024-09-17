import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../../lib/mongodb'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { email, password } = req.body
      const { db } = await connectToDatabase()

      const user = await db.collection('users').findOne({ email })

      if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' })
      }

      const isMatch = await bcrypt.compare(password, user.password)

      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' })
      }

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, {
        expiresIn: '1d',
      })

      res.status(200).json({ token, user: { id: user._id, email: user.email } })
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ message: 'Server error' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}