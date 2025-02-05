import { Router } from 'express';
import { createCommentController, getCommentsByUsernameController, deleteCommentController } from '../controllers/commentController.js';

const router = Router();

// Crear un nuevo comentario
router.post('/', createCommentController);

// Obtener comentarios en base al username
router.get('/:username', getCommentsByUsernameController);

// Eliminar un comentario por su id
router.delete('/:id', deleteCommentController);

export default router;