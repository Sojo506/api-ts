import { Request, Response } from 'express'
import { deleteCar, getCar, getCars, insertCar, updateCar } from '../services/item'
import { handleHttp } from '../utils/error.handle'

const getItem = async ({ params: { id } }: Request, res: Response) => {
  try {
    const responseItem = await getCar(id)

    res.send(responseItem)
  } catch (error: any) {
    handleHttp(res, error?.driverError?.code === '22P02' ? 'NOT_FOUND' : 'ERROR_GET_ITEM')
  }
}

const getItems = async (req: Request, res: Response) => {
  try {
    const responseItems = await getCars()
    res.send(responseItems)
  } catch (error) {
    handleHttp(res, 'ERROR_GET_ITEMS')
  }
}

const postItem = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertCar(body)
    res.send({ msg: 'Item created', code: 200 })
  } catch (error) {
    handleHttp(res, 'ERROR_POST_ITEM')
  }
}
const updateItem = async ({ params, body }: Request, res: Response) => {
  try {
    const responseItem = await updateCar(params.id, body)
    res.send({ msg: 'Item updated', code: 200, item: responseItem })
  } catch (error: any) {
    handleHttp(res, error?.driverError?.code === `22P02` ? 'NOT_FOUND' : 'ERROR_UPDATE_ITEM')
  }
}


const deleteItem = async ({ params: { id } }: Request, res: Response) => {
  try {
    const responseItem = await deleteCar(id)
    res.send({ msg: 'Item deleted', code: 200, })
  } catch (error: any) {
    handleHttp(res, error?.driverError?.code === "22P02" ? 'NOT_FOUND' : 'ERROR_DELETE_ITEM')
  }
}

export { getItem, getItems, updateItem, postItem, deleteItem }