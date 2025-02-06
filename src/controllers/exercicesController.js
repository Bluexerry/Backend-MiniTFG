// Backend-MiniTFG/src/controllers/exercicesController.js
import morgan from 'morgan';
import { getExercisesByQuery } from '../services/exerciseService.js';
import logger from '../utils/logger.js';

export async function getExercises(req, res, next) {
  const logRequest = morgan('dev');
  logRequest(req, res, async () => {
    try {
      // Forzar error si se recibe el query parameter forceError
      if (req.query.forceError) {
        throw new Error('Error de prueba provocado');
      }
      const filter = req.query;
      const exercises = await getExercisesByQuery(filter);
      res.json(exercises);
    } catch (error) {
      logger.error(`Error en getExercises: ${error.message}`);
      next(error);  // Pasa el error al middleware global
    }
  });
}