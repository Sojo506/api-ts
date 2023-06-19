import { Request, Response, Router } from "express";
import { getItems } from "../controllers/order";
import { checkJWT } from "../middleware/session";

/* 
  This route only can be accessed by those with an active session and a valid JWT Token
*/
const router = Router()

router.get('/', checkJWT, getItems)

export { router };