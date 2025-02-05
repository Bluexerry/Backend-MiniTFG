import { Router } from 'express';
import { getExercises } from '../controllers/exercicesController.js';

const router = Router();

// Ejemplo de endpoint para obtener ejercicios según bodyPart
router.get('/:bodyPart', getExercises);

export default router;