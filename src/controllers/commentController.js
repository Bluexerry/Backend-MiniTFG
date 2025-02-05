import { createComment, getCommentsByUsername, deleteCommentById } from '../services/commentService.js';

export async function createCommentController(req, res) {
    try {
        const data = req.body;
        const newComment = await createComment(data);
        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function getCommentsByUsernameController(req, res) {
    try {
        const { username } = req.params;
        const comments = await getCommentsByUsername(username);
        res.json(comments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function deleteCommentController(req, res) {
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
}