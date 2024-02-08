import { DataSource } from "typeorm";
import Producer from "./src/models/producer";
import dotenv from 'dotenv';
dotenv.config();

const portString = process.env.DB_PORT;
const userName = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
const database = process.env.DB_NAME
const port = portString ? parseInt(portString) : undefined;


const PostgresDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port:port,
  username: userName,
  password: password,
  database:database,
  synchronize: true,
  logging: true,
  entities: [Producer],
  migrations: ["./src/migrations/*.ts"],
});


PostgresDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

export default PostgresDataSource;
