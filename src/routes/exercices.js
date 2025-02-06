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
// http://localhost:3000/exercises

// Filtrar por bodyPart
// http://localhost:3000/exercises?bodyPart=pecho

// Filtrar por nombre
// http://localhost:3000/exercises?name=Press%20de%20banca

//Filtrar por equipment
// http://localhost:3000/exercises?equipment=Barra

// Combinar filtros
// http://localhost:3000/exercises?bodyPart=pecho&difficulty=medio
