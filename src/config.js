import dotenv from 'dotenv';
dotenv.config();

export const config = {
  dbUri: process.env.MONGODB_URI, // Define esta variable en tu .env
  port: process.env.PORT || 3000
};