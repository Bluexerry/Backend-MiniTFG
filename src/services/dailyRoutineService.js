import { ObjectId } from 'mongodb';
import { db } from '../loaders/mongoDB.js';
import DailyRoutine from '../models/dailyRoutineModel.js';

export async function getDailyRoutineByDay(day) {
    const collection = db.collection("daily_routine");
    const routine = await collection.find({ day }).toArray();
    return routine;
}

export async function getDailyRoutineByQuery(query = {}) {
    // Solo permitir filtros por 'day', 'focus' y 'description'
    const allowedFields = ['day', 'focus', 'description'];
    const filter = {};
    for (const key in query) {
        if (allowedFields.includes(key)) {
            filter[key] = query[key];
        }
    }
    const collection = db.collection("daily_routine");
    const routines = await collection.find(filter).toArray();
    return routines;
}

export async function createDailyRoutine(data) {
    const routineModel = new DailyRoutine(data);
    const collection = db.collection("daily_routine");
    const result = await collection.insertOne({
        day: routineModel.day,
        focus: routineModel.focus,
        description: routineModel.description,
        exercises: routineModel.exercises
    });
    return { _id: result.insertedId, ...routineModel };
}

export async function deleteDailyRoutineById(id) {
    if (!ObjectId.isValid(id)) {
        throw new Error("El id proporcionado no es válido.");
    }
    const result = await db.collection("daily_routine").deleteOne({ _id: new ObjectId(id) });
    return result;
}