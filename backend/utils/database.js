import { Sequelize } from "sequelize";
import 'dotenv/config';

const { DB_HOST, DB_USER, DB_PASS, DB_DATABASE } = process.env

const db = new Sequelize(DB_DATABASE, DB_USER, DB_PASS, {
    host: DB_HOST,
    dialect: 'mysql'
});

export default db;
