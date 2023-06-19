import { NextFunction, Request, Response } from "express"

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers
  const userAgent = header["user-agent"]

  console.log("I'm the logMiddleware")
  console.log("user-client", userAgent)

  /* if (true) {
    return res.send("User not authenticated")
  } */

  next()
}

export default logMiddleware