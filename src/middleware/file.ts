import { Request } from "express";
import multer, { diskStorage } from "multer";
import fs from "fs"

const PATH_STORAGE = `${process.cwd()}/storage`;

const storage = diskStorage({
  destination(req: Request, file: Express.Multer.File, cb: any) {
    cb(null, PATH_STORAGE);
  },
  filename(req: Request, file: Express.Multer.File, cb: any) {
    const ext = file.originalname.split(".").pop();
    const fileNameRandom = `image-${Date.now()}.${ext}`;
    cb(null, fileNameRandom);
  },
});

const fileFilter = (req: Request, file: Express.Multer.File, cb: any) => {
  const filePath = `${PATH_STORAGE}/${file.filename}`;
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      // El archivo no existe, se acepta el archivo
      cb(null, true);
    } else {
      // El archivo ya existe, se rechaza el archivo
      cb(null, false);
    }
  });
};

const multerMiddleware = multer({ storage });

export default multerMiddleware;