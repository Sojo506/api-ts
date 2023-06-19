import StorageModel from "../entities/storage";
import { AuthInterface } from "./auth.interface";

export interface UserInterface extends AuthInterface {
  id: string;
  name: string
  description: string
  storages: StorageModel[]
}