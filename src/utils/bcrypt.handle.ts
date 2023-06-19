import { hash, compare } from "bcrypt"

const encrypt = async (password: string) => {
  const hashedPassword = await hash(password, 10)
  return hashedPassword
}

const verifyPassword = async (planePassword: string, hashedPassword: string) => {
  const isMatch = await compare(planePassword, hashedPassword)
  return isMatch;
}

export { encrypt, verifyPassword }