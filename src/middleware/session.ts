import { NextFunction, Response } from "express"
import { RequestExt } from "../interfaces/req.interface"
import { verifyToken } from "../utils/jwt.handle"

const checkJWT = async (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || ""
    const cleanedJwt = jwtByUser.split(" ").pop()

    const isThereUser = await verifyToken(`${cleanedJwt}`) as { id: string }

    if (!isThereUser) return res.status(401).send({ msg: "INVALID_TOKEN" })

    req.user = isThereUser;
    next()
  } catch (error: any) {
    res.status(400).send({ msg: "INVALID_SESSION", error: error.message })
  }
}

export { checkJWT }