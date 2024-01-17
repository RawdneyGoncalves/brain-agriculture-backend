import { DataSource } from "typeorm";
import Producer from "./src/models/producer";

const PostgresDataSource = new DataSource({
  type: "postgres",
  host: "127.0.0.1",
  port: 5432,
  username: "postgres",
  password: "grain",
  database: "grain",
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
