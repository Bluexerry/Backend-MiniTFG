import morgan from 'morgan';
import { getExercisesByBodyPart } from '../services/exerciseService.js';

export async function getExercises(req, res) {
  const logRequest = morgan('dev');
  logRequest(req, res, async () => {
    try {
      const { bodyPart } = req.params;
      const exercises = await getExercisesByBodyPart(bodyPart);
      res.json(exercises);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
}