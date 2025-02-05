import { ObjectId } from 'mongodb';

export default class DailyRoutine {
    constructor({ day, focus, description, exercises }) {
        if (!day)
            throw new Error("El campo 'day' es obligatorio.");
        if (!focus)
            throw new Error("El campo 'focus' es obligatorio.");
        if (!description)
            throw new Error("El campo 'description' es obligatorio.");
        if (!exercises || !Array.isArray(exercises))
            throw new Error("El campo 'exercises' debe ser un array.");

        // Valida que cada ejercicio tenga los campos requeridos
        exercises.forEach((ex, index) => {
            if (!ex.exerciseId)
                throw new Error(`El ejercicio en la posición ${index} requiere 'exerciseId'.`);
            if (ex.sets === undefined)
                throw new Error(`El ejercicio en la posición ${index} requiere 'sets'.`);
            if (ex.repetitions === undefined)
                throw new Error(`El ejercicio en la posición ${index} requiere 'repetitions'.`);
            if (ex.restTime === undefined)
                throw new Error(`El ejercicio en la posición ${index} requiere 'restTime'.`);
        });

        this.day = day;
        this.focus = focus;
        this.description = description;
        // Se transforma el campo exerciseId a ObjectId, si fuese necesario para la colección de ejercicios
        this.exercises = exercises.map(ex => ({
            exerciseId: new ObjectId(ex.exerciseId),
            sets: ex.sets,
            repetitions: ex.repetitions,
            restTime: ex.restTime,
            note: ex.note || null // opcional
        }));
    }
}