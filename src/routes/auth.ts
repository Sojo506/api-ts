import { Request, Response, Router } from "express"
import { loginController, registerController } from "../controllers/auth"

const router = Router()

/* http://localhost:3002/auth/register [POST] */
router.post("/register", registerController)
router.post("/login", loginController)

export { router }