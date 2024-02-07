import 'dotenv/config';
import { Dialect } from 'sequelize';

const databaseConfig = {
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  dialect: 'mysql' as Dialect,
};


export default databaseConfig;

module.exports = databaseConfig;