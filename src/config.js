import dotenv from 'dotenv';
dotenv.config();

// Exportación nombrada de la constante config
export const config = {
  dbUri: process.env.MONGODB_URI,
  port: process.env.PORT || 3000
};