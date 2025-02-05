import { getExercisesByBodyPart } from '../services/exerciseService.js';

export async function getExercises(req, res) {
    try {
        const { bodyPart } = req.params;
        const exercises = await getExercisesByBodyPart(bodyPart);
        res.json(exercises);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}