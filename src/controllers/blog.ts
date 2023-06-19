import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"

const getBlog = (req: Request, res: Response) => {
  try {

  } catch (error) {

  }
}

const getBlogs = (req: Request, res: Response) => {
  try {

  } catch (error) {
    handleHttp(res, 'ERROR_GET_BLOG')
  }
}

const postBlog = (req: Request, res: Response) => {
  try {

  } catch (error) {
    handleHttp(res, 'ERROR_POST_BLOG')
  }
}
const updateBlog = (req: Request, res: Response) => {
  try {

  } catch (error) {
    handleHttp(res, 'ERROR_UPDATE_BLOG')
  }
}


const deleteBlog = (req: Request, res: Response) => {
  try {

  } catch (error) {
    handleHttp(res, 'ERROR_DELETE_BLOG')
  }
}

export { getBlog, getBlogs, updateBlog, postBlog, deleteBlog }