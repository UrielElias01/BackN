import { Sequelize } from "sequelize";


const sequelize = new Sequelize('blw1ovrym0bkhxcv6hpp', 'u4knkkd9u1ct2n0f', 'HlLoacRs0hvy7n6w8G4Q', {
    host: 'blw1ovrym0bkhxcv6hpp-mysql.services.clever-cloud.com',
    dialect: 'mysql',   
});

export default sequelize;