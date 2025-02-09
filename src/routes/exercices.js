// Backend-MiniTFG/src/routes/exercices.js
import { Router } from 'express';
import { getExercises } from '../controllers/exercicesController.js';

const router = Router();

// Definimos la ruta raíz para GET, de modo que se reciban query parameters
// Ejemplo: GET /exercises?bodyPart=pecho&difficulty=medio
router.get('/', getExercises);

export default router;

// Ejemplos de uso

// Obtener todos los ejercicios
// https://backend-minitfg.onrender.com/exercises

// Filtrar por bodyPart
// https://backend-minitfg.onrender.com/exercises?bodyPart=pecho

// Filtrar por nombre
// https://backend-minitfg.onrender.com/exercises?name=Press%20de%20banca

//Filtrar por equipment
// https://backend-minitfg.onrender.com/exercises?equipment=Barra

// Combinar filtros
// https://backend-minitfg.onrender.com/exercises?bodyPart=pecho&difficulty=medio
