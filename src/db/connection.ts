import { Sequelize } from "sequelize";
import { DB_NAME, DB_PASSWORD, DB_HOST, DB_USER, DB_PORT } from "../models/config";

// Convertir DB_PORT a número si es una cadena válida
const port: number | undefined = typeof DB_PORT === 'string' ? parseInt(DB_PORT) : undefined;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql',
    port: port // Asignar el puerto convertido a número
});

export default sequelize;
