import { Request, Response } from "express"
import { loginUser, registerNewUser } from "../services/auth"
import { handleHttp } from "../utils/error.handle"

const registerController = async ({ body }: Request, res: Response) => {
  try {
    const responseUser = await registerNewUser(body)

    if (responseUser === "USER_ALREADY_EXISTS") return res.status(200).send({ msg: responseUser })

    return res.status(201).send({ msg: responseUser })
  } catch (error) {
    handleHttp(res, 'ERROR_REGISTER_USER')
  }
}

const loginController = async ({ body }: Request, res: Response) => {
  try {
    const responseUser = await loginUser(body)

    if (responseUser === "USER_NOT_EXISTS") return res.status(404).send({ msg: responseUser })

    if (responseUser === "INVALID_DATA") return res.status(403).send({ msg: responseUser })

    return res.status(200).send({ msg: "USER_VERIFIED", data: responseUser })
  } catch (error) {
    handleHttp(res, 'ERROR_LOGIN_USER')
  }
}

export { registerController, loginController }