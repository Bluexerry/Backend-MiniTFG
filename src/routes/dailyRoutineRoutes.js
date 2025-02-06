// Backend-MiniTFG/src/routes/dailyRoutineRoutes.js
import { Router } from 'express';
import { getDailyRoutine, createDailyRoutineController, deleteDailyRoutineController } from '../controllers/dailyRoutineController.js';

const router = Router();

// Definimos la ruta raíz para GET, de modo que se reciban query parameters
// Ejemplo: GET /daily_routine?day=Martes&focus=Full%20Body%20+%20Core%20&%20Cardio
router.get('/', getDailyRoutine);

// Rutas para crear y eliminar, que ya estaban definidas
router.post('/', createDailyRoutineController);
router.delete('/:id', deleteDailyRoutineController);

export default router;

// Ejemplos de uso

// Obtener todas las rutinas
// http://localhost:3000/daily_routine

// Obtener rutinas filtradas por dia
// http://localhost:3000/daily_routine?day=Lunes

// Obtener rutinas filtradas por focus
// http://localhost:3000/daily_routine?focus=FullBody

// Crear una nueva rutina
/* curl -X POST "http://localhost:3000/daily_routine" \
  -H "Content-Type: application/json" \
  -d '{
        "day": "Miércoles",
        "focus": "Espalda",
        "description": "Sesión intensiva para trabajar la zona dorsal. Incluye 6 ejercicios enfocados en espalda, 2 ejercicios para core y 1 ejercicio de cardio.",
        "exercises": [
          {"exerciseId": "64f3b0efaa7c8f6ec1d3b001", "sets": 4, "repetitions": 8, "restTime": 90},
          {"exerciseId": "64f3b0f0aa7c8f6ec1d3b002", "sets": 4, "repetitions": 8, "restTime": 90},
          {"exerciseId": "64f3b0f1aa7c8f6ec1d3b003", "sets": 4, "repetitions": 10, "restTime": 90},
          {"exerciseId": "64f3b0f2aa7c8f6ec1d3b004", "sets": 3, "repetitions": 10, "restTime": 90},
          {"exerciseId": "64f3b0f3aa7c8f6ec1d3b005", "sets": 3, "repetitions": 12, "restTime": 75},
          {"exerciseId": "64f3b0f4aa7c8f6ec1d3b006", "sets": 3, "repetitions": 12, "restTime": 75},
          {"exerciseId": "64f3b0f5aa7c8f6ec1d3b007", "sets": 3, "repetitions": 15, "restTime": 60},
          {"exerciseId": "64f3b0f6aa7c8f6ec1d3b008", "sets": 3, "repetitions": 15, "restTime": 60},
          {"exerciseId": "64f3b0f7aa7c8f6ec1d3b009", "sets": 1, "repetitions": 10, "restTime": 0, "note": "Duración en minutos a intensidad suave"}
        ]
      }'*/

// Eliminar una rutina por su id
// curl -X DELETE "http://localhost:3000/daily_routine/ (id de rutina)