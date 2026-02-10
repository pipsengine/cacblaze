import { Sequelize } from 'sequelize';
import path from 'path';

const storagePath = path.join(__dirname, '../../database/cacblaze.db');

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: storagePath,
  logging: false, // Set to console.log to see SQL queries
});

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    // Sync models
    await sequelize.sync();
    console.log('Database synced.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
