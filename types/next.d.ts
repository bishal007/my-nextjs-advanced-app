import { NextApiRequest } from 'next'
import { JwtPayload } from 'jsonwebtoken'

declare module 'next' {
  export interface NextApiRequest extends NextApiRequest {
    user?: JwtPayload | string
  }
}