import { Storage } from "../interfaces/storage.interface";
import StorageModel from "../entities/storage";
import { AppDataSource } from "../config/data-source";
import generateUUID from "../utils/generateUUID";
const storageRepository = AppDataSource.getRepository(StorageModel)

const registerUpload = async ({ fileName, user, path }: Storage) => {
  const responseStorage = new StorageModel()
  responseStorage.id = generateUUID();
  responseStorage.fileName = fileName
  responseStorage.path = path
  responseStorage.user = user

  return await storageRepository.save(responseStorage);
};

export { registerUpload };