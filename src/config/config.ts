import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

const {
  DB_HOST = "localhost",
  DB_USER = "postgres",
  DB_PASSWORD_FILE = "/path/to/default/password/file",
  DB_PASSWORD,
  DB_NAME = "default_database",
} = process.env;

const sequelize = new Sequelize({
  dialect: "postgres",
  host: DB_HOST,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

export default sequelize;
