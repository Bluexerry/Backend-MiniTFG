import morgan from 'morgan';
import { getDailyRoutineByDay, createDailyRoutine, deleteDailyRoutineById } from '../services/dailyRoutineService.js';

export async function getDailyRoutine(req, res) {
  const logRequest = morgan('dev');
  logRequest(req, res, async () => {
    try {
      const { day } = req.params;
      const routine = await getDailyRoutineByDay(day);
      res.json(routine);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
}

export async function createDailyRoutineController(req, res) {
  const logRequest = morgan('dev');
  logRequest(req, res, async () => {
    try {
      const data = req.body;
      const newRoutine = await createDailyRoutine(data);
      res.status(201).json(newRoutine);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
}

export async function deleteDailyRoutineController(req, res) {
  const logRequest = morgan('dev');
  logRequest(req, res, async () => {
    try {
      const { id } = req.params;
      const result = await deleteDailyRoutineById(id);
      if (result.deletedCount === 1) {
        res.json({ message: "Daily routine deleted successfully" });
      } else {
        res.status(404).json({ message: "Daily routine not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
}