import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
    process.env.DATABASE_NAME || '',
    process.env.DATABASE_USERNAME || '',
    process.env.DATABASE_PASSWORD || '',
    {
        host: process.env.DATABASE_HOST,
        dialect: 'mysql',
        logging: false,
    }
);

export const initDB = async (): Promise<Sequelize> => {
    try {
        await sequelize.authenticate();
        console.log('Connection to MySQL has been established successfully.');
        return sequelize;
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        throw error;
    }
};

export default sequelize;
