import express from 'express';
import expressLoader from './loaders/express.js';
import { config } from './config.js';
import logger from './utils/logger.js';
import { connectMongo } from './loaders/mongoDB.js';

async function startServer() {
  try {
    await connectMongo(); // Asegúrate de conectar a la base de datos antes de iniciar el servidor
    const app = await expressLoader({ expressApp: express() });
    app.listen(config.port, () => {
      logger.info(`Servidor escuchando en http://localhost:${config.port}`);
      console.log(`Servidor escuchando en http://localhost:${config.port}`);
    });
  } catch (error) {
    logger.error(`Error al iniciar el servidor: ${error.message}`);
    console.error(`Error al iniciar el servidor: ${error.message}`);
    process.exit(1); // Salir con error
  }
}

startServer();

// Desde Backend-MiniTFG/ hacer node src/index.js (revisar notas.txt)
