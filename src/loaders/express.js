import express from 'express';
import exercisesRouter from '../routes/exercices.js';
import dailyRoutineRoutes from '../routes/dailyRoutineRoutes.js';
import commentRoutes from '../routes/commentRoutes.js';

export default async function expressLoader({ expressApp }) {
  expressApp.use(express.json());
  // Rutas de ejercicios
  expressApp.use('/exercises', exercisesRouter);
  // Rutas de daily_routine
  expressApp.use('/daily_routine', dailyRoutineRoutes);
  // Rutas de comentarios
  expressApp.use('/comments', commentRoutes);
  return expressApp;
}