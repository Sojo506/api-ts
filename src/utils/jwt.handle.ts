import { sign, verify } from "jsonwebtoken"
const JWT_SECRET = process.env.JWT_SECRET || ""

const signToken = async (id: string) => {
  const jwt = sign({ id }, JWT_SECRET)

  return jwt
}
const verifyToken = async (token: string) => {
  return verify(token, JWT_SECRET)
}


export { signToken, verifyToken }