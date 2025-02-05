import { Router } from 'express';
import { getDailyRoutine, createDailyRoutineController, deleteDailyRoutineController } from '../controllers/dailyRoutineController.js';

const router = Router();

// GET daily_routine según el día
router.get('/:day', getDailyRoutine);

// POST para crear un daily_routine
router.post('/', createDailyRoutineController);

// DELETE para eliminar un daily_routine usando su id
router.delete('/:id', deleteDailyRoutineController);

export default router;