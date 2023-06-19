import { Router } from "express";
import { readdirSync } from "fs"
import cleanFileName from "../utils/cleanFileName";

const PATH_ROUTER = __dirname
const router = Router()

readdirSync(PATH_ROUTER).filter(fileName => {
  const cleanedNameFile = cleanFileName(fileName)
  if (cleanedNameFile !== "index") {
    import(`./${cleanedNameFile}`).then(moduleRoute => {
      router.use(`/${cleanedNameFile}`, moduleRoute.router)
    })
  }
})

export { router }