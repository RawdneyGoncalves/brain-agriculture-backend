import { DataSource } from "typeorm";

const PostgresDataSource = new DataSource({
  type: "postgres",
  host: "127.0.0.1",
  port: 5432,
  username: "postgres",
  password: "grain",
  database: "grain",
  synchronize: true,
  logging: true,
  entities: ["./src/entities/*.ts"],
  migrations: ["./src/migrations/*.ts"],
});
export default PostgresDataSource;
