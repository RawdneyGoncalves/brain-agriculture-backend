import { DataSource } from "typeorm";
import Producer from "./src/models/producer";

const PostgresDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "root",
  database: "testR",
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
