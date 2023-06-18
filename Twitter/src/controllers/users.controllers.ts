import { NextFunction, Request, Response } from 'express'
import User from '~/models/shemas/Users.schema'
import databaseService from '~/services/database.services'
import { ParamsDictionary } from 'express-serve-static-core'

import usersService from '~/services/users.services'
import { RegisterRequestBody } from '~/models/requests/User.requests'
import next from 'next'

export const loginController = (req: Request, res: Response) => {
  const { email, password } = req.body

  if (email === 'duong@gmail.com' && password === 12345) {
    return res.json({
      message: 'login success'
    })
  }
  return res.status(400).json({
    notice: 'login fail'
  })
}

export const registerController = async (
  req: Request<ParamsDictionary, any, RegisterRequestBody>,
  res: Response,
  next: NextFunction
) => {
  // throw new Error('Loi roi do ban oi')
  const result = await usersService.register(req.body)

  return res.json({
    message: 'Register success',
    result
  })
}
