import { ObjectId } from 'mongodb';

export default class DailyRoutine {
    constructor({ day, focus, description, exercises }) {
        if (!day) throw new Error("El campo 'day' es obligatorio.");
        if (!focus) throw new Error("El campo 'focus' es obligatorio.");
        if (!description) throw new Error("El campo 'description' es obligatorio.");
        if (!exercises || !Array.isArray(exercises)) throw new Error("El campo 'exercises' debe ser un array.");

        this.day = day;
        this.focus = focus;
        this.description = description;
        // Convert exerciseId to ObjectId only if provided and valid (24 char hex string)
        this.exercises = exercises.map(ex => ({
            exerciseId:
                ex.exerciseId && ObjectId.isValid(ex.exerciseId)
                    ? new ObjectId(ex.exerciseId)
                    : ex.exerciseId || null,
            sets: ex.sets,
            repetitions: ex.repetitions,
            restTime: ex.restTime,
            note: ex.note || null,
        }));
    }
}