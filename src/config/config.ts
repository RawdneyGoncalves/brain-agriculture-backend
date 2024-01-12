import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const {
  DB_HOST = 'localhost',
  DB_USER = 'seu_usuario',
  DB_PASSWORD = 'sua_senha',
  DB_NAME = 'seu_banco_de_dados',
} = process.env;

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: DB_HOST,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

export default sequelize;
