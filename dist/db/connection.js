"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = require("../models/config");
// Convertir DB_PORT a número si es una cadena válida
const port = typeof config_1.DB_PORT === 'string' ? parseInt(config_1.DB_PORT) : undefined;
const sequelize = new sequelize_1.Sequelize(config_1.DB_NAME, config_1.DB_USER, config_1.DB_PASSWORD, {
    host: config_1.DB_HOST,
    dialect: 'mysql',
    port: port // Asignar el puerto convertido a número
});
exports.default = sequelize;
