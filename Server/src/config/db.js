import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize (
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,{
        host: process.env.DB_HOST,
        dialect: "mysql",
        port:3306
    }
);

const connectDB = async () => {
    try{
        await sequelize.authenticate();
        console.log("Database Connected...");
    } catch (err) {
        console.log("Database connection failed: ", err.message);
    }
};

export { sequelize, connectDB };



