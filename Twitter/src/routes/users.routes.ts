import { Router } from 'express'
import { loginController, registerController } from '~/controllers/users.controllers'
import {
  accessTokenValidator,
  loginValidator,
  refreshTokenValidator,
  registerValidator
} from '~/middlewares/users.middlewares'
import { wrapRequestHandler } from '~/utils/handlers'
import { validate } from '~/utils/validation'
const usersRouter = Router()

/**
 * Description: Login
 * Path: /login
 * Method: POST
 * Body: {email: string, password: string}
 
 */
usersRouter.post('/login', loginValidator, wrapRequestHandler(loginController))

/**
 * Description: Logout
 * Path: /login
 * Method: POST
 * Header: {Authorization: Bearer <access_token> }
 * Body: {refresh_token: string}
 
 */
usersRouter.post(
  '/logout',
  accessTokenValidator,
  refreshTokenValidator,
  wrapRequestHandler((req, res) => {
    return res.json({ message: 'logout OK' })
  })
)

/**
 * Description: Register a new user
 * Path: /register
 * Method: POST
 * Body: {name: string, email: string, password: string, confirm_password: string, date_of_birth: ISO8601}
 
 */

usersRouter.post('/register', registerValidator, wrapRequestHandler(registerController))

export default usersRouter
