import { Sequelize } from "sequelize";
import { DB_NAME,DB_PASSWORD,DB_HOST,DB_USER } from "../models/config";


const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql',
    port: 3306
});

export default sequelize;