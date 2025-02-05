import express from 'express';
import morgan from 'morgan';
import exercisesRouter from '../routes/exercices.js';
import dailyRoutineRoutes from '../routes/dailyRoutineRoutes.js';
import commentRoutes from '../routes/commentRoutes.js';

export default async function expressLoader({ expressApp }) {
  expressApp.use(express.json());

  // Agregar Morgan para loguear peticiones HTTP en modo 'dev'
  expressApp.use(morgan('dev'));

  expressApp.use('/exercises', exercisesRouter);
  expressApp.use('/daily_routine', dailyRoutineRoutes);
  expressApp.use('/comments', commentRoutes);

  return expressApp;
}