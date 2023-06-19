import { Request, Response, Router } from "express";

const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.send({ data: "here goes the blogs" })
})

export { router };