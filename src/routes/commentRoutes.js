// Backend-MiniTFG/src/routes/commentRoutes.js
import { Router } from 'express';
import { createCommentController, getAllCommentsController, getCommentsByUsernameController, deleteCommentController } from '../controllers/commentController.js';

const router = Router();

// Crear un nuevo comentario
router.post('/', createCommentController);

// Obtener comentarios en base al username
router.get('/:username', getCommentsByUsernameController);

// Obtener todos los comentarios en general (sin filtrar por username)
router.get('/', getAllCommentsController);

// Eliminar un comentario por su id
router.delete('/:id', deleteCommentController);

export default router;

// Ejemplos de uso

// Obtener todos los comentarios
// https://backend-minitfg.onrender.com/comments

// Obtener comentarios filtrados por routineId (p.ej., “rutina1”):
// https://backend-minitfg.onrender.com/comments?routineId=rutina1

// Obtener comentarios filtrados por username (p.ej., “usuario_ejemplo”):
// https://backend-minitfg.onrender.com/comments?username=usuario_ejemplo

// Crear un nuevo comentario
/*curl -X POST "https://backend-minitfg.onrender.com/comments" \
     -H "Content-Type: application/json" \
     -d '{
       "routineId": "rutina1",
       "username": "usuario_ejemplo",
       "comment": "¡Me encanta esta rutina!",
     }' */

// Eliminar un comentario por su id
// curl -X DELETE https://backend-minitfg.onrender.com/comments/ (id de comentario)
