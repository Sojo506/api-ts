import { Response, Request } from "express";
import { RequestExt } from "../interfaces/req.interface";
import { Storage } from "../interfaces/storage.interface";
import { registerUpload } from "../services/storage";
import { handleHttp } from "../utils/error.handle";

const getFile = async ({ user, file }: RequestExt, res: Response) => {
  try {
    const dataToRegister: Storage = {
      fileName: `${file?.filename}`,
      path: `${file?.path}`,
      user: `${user?.id}`
    }

    const response = await registerUpload(dataToRegister);

    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_POST_FILE");
  }
};

export { getFile };