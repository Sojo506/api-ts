import { AppDataSource } from "../config/data-source"
import { UserModel } from "../entities/user"
import { AuthInterface } from "../interfaces/auth.interface"
import { encrypt, verifyPassword } from "../utils/bcrypt.handle"
import { signToken } from "../utils/jwt.handle"
const userRepository = AppDataSource.getRepository(UserModel)

const registerNewUser = async (user: UserModel) => {
  const isThereUser = await userRepository.findBy({
    email: user.email
  })

  if (isThereUser.length) return "USER_ALREADY_EXISTS"

  const hashedPassword = await encrypt(user.password)
  await userRepository.save({ ...user, password: hashedPassword })

  return "USER_REGISTERED"
}

const loginUser = async ({ email, password }: AuthInterface) => {
  const isThereUser = await userRepository.findBy({
    email
  });

  if (!isThereUser.length) return "USER_NOT_EXISTS"

  const verifiedPassword = await verifyPassword(password, isThereUser[0].password);

  if (!verifiedPassword) return "INVALID_DATA"

  const token = await signToken(isThereUser[0].id)
  const data = {
    token,
    user: isThereUser[0]
  }

  return data
}

export { registerNewUser, loginUser }