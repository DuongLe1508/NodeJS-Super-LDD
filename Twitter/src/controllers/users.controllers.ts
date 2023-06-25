import { NextFunction, Request, Response } from 'express'
import User from '~/models/shemas/Users.schema'
import databaseService from '~/services/database.services'
import { ParamsDictionary } from 'express-serve-static-core'

import usersService from '~/services/users.services'
import { LogoutReqBody, RegisterRequestBody } from '~/models/requests/User.requests'
import next from 'next'
import { ObjectId } from 'mongodb'
import { USERS_MESSAGE } from '~/constants/messages'

export const loginController = async (req: Request, res: Response) => {
  const user = req.user as User
  const user_id = user?._id as ObjectId
  const result = await usersService.login(user_id.toString())
  return res.json({
    message: USERS_MESSAGE.LOGIN_SUCCESS,
    result
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
    message: USERS_MESSAGE.REGISTER_SUCCESS,
    result
  })
}

export const logoutController = async (req: Request<ParamsDictionary, any, LogoutReqBody>, res: Response) => {
  const { refresh_token } = req.body
  const result = await usersService.logout(refresh_token)
  return res.json(result)
}
