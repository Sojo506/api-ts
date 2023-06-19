import "reflect-metadata"
import "dotenv/config";
import { DataSource } from "typeorm"
import { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } from "../config"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: parseInt(`${DB_PORT}`),
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  entities: [
    "src/entities/*.ts"
  ],
  subscribers: [
    "src/subscribers/*.ts"
  ],
  migrations: [
    "src/migrations/*.ts"
  ],
  synchronize: true,
  logging: false,
})