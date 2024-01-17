import { dirname } from "path";
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "127.0.0.1",
  port: 5432,
  username: "postgres",
  password: "grain",
  database: "grain",
  synchronize: true,
  logging: true,
  entities: [dirname + "../entities/*.ts"],
  migrations: [dirname + "../migrations/*.ts"],
});

export { AppDataSource };
