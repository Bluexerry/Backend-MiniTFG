export default class Comment {
    constructor({ routineId, username, comment, date }) {
        if (!routineId) throw new Error("El campo 'routineId' es obligatorio.");
        if (!username) throw new Error("El campo 'username' es obligatorio.");
        if (!comment) throw new Error("El campo 'comment' es obligatorio.");

        this.routineId = routineId;
        this.username = username;
        this.comment = comment;
        // Asigna la fecha actual si no se envía
        const now = date ? new Date(date) : new Date();
        this.date = now.toTimeString().split(" ")[0]; // Formato: HH:MM:SS
    }
}