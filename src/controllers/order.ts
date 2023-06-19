import { Response } from 'express'
import { RequestExt } from '../interfaces/req.interface'
import { getOrders } from '../services/order'
import { handleHttp } from '../utils/error.handle'

const getItems = async (req: RequestExt, res: Response) => {
  try {
    res.send({ data: "This will only be visible by those with an active session and a valid JWT", user: req.user })
  } catch (error: any) {
    handleHttp(res, error?.driverError?.code === '22P02' ? 'NOT_FOUND' : 'ERROR_GET_ITEM')
  }
}

export { getItems }