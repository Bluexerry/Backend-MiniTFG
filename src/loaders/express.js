// Backend-MiniTFG/src/loaders/express.js
import express from 'express';
import morgan from 'morgan';
import exercisesRouter from '../routes/exercices.js';
import dailyRoutineRoutes from '../routes/dailyRoutineRoutes.js';
import commentRoutes from '../routes/commentRoutes.js';
import logger from '../utils/logger.js';

export default async function expressLoader({ expressApp }) {
  expressApp.use(express.json());

  // Agregar Morgan para loguear peticiones HTTP en modo 'dev'
  expressApp.use(morgan('dev'));

  expressApp.use('/exercises', exercisesRouter);
  expressApp.use('/daily_routine', dailyRoutineRoutes);
  expressApp.use('/comments', commentRoutes);

  // Middleware global de manejo de errores
  expressApp.use((err, req, res, next) => {
    logger.error(`${err.status || 500} - ${err.message} - ${req.method} ${req.originalUrl}`);
    res.status(err.status || 500).json({ error: err.message });
  });

  return expressApp;
}