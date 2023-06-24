import { Request } from 'express'
import User from './models/shemas/Users.schema'

declare module 'express' {
  interface Request {
    user?: User
  }
}
