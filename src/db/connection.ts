import { Sequelize } from "sequelize";


const sequelize = new Sequelize('via_flex', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',   
});

export default sequelize;