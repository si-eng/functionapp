import { Sequelize } from "sequelize-typescript";

const sequelize = (User: any) => new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mssql',
    models: User
});

export default sequelize;