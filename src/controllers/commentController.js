// Backend-MiniTFG/src/controllers/commentController.js
import morgan from 'morgan';
import { createComment, getCommentsByUsername, getCommentsByQuery, deleteCommentById } from '../services/commentService.js';

export async function createCommentController(req, res) {
  const logRequest = morgan('dev');
  logRequest(req, res, async () => {
    try {
      const data = req.body;
      const newComment = await createComment(data);
      res.status(201).json(newComment);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
}

export async function getCommentsByUsernameController(req, res) {
  const logRequest = morgan('dev');
  logRequest(req, res, async () => {
    try {
      const { username } = req.params;
      const comments = await getCommentsByUsername(username);
      res.json(comments);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
}

export async function getAllCommentsController(req, res) {
  const logRequest = morgan('dev');
  logRequest(req, res, async () => {
    try {
      // Si se envían filtros en la query, se usan; si no, se devolverán todos los comentarios.
      const filter = req.query;
      const comments = await getCommentsByQuery(filter);
      res.json(comments);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
}

export async function deleteCommentController(req, res) {
  const logRequest = morgan('dev');
  logRequest(req, res, async () => {
    try {
      const { id } = req.params;
      const result = await deleteCommentById(id);
      if (result.deletedCount === 1) {
        res.json({ message: "Comentario eliminado exitosamente" });
      } else {
        res.status(404).json({ message: "Comentario no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
}