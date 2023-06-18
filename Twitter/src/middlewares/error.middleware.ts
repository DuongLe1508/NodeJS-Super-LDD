import { Request, Response, NextFunction } from 'express'
import { omit } from 'lodash'
import HTTP_STATUS from '~/constants/httpStatus'

const defaultErrorhandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  return res.status(err.status || HTTP_STATUS.INTERNAL_SERVER_ERROR).json(omit(err, ['status']))
}

export default defaultErrorhandler