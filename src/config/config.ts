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
  entities: ["../entities/*.ts"],
  migrations: ["../migrations/*.ts"],
});
export default PostgresDataSource;
