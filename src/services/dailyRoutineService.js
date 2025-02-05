import { ObjectId } from 'mongodb';
import { db } from '../loaders/mongoDB.js';
import DailyRoutine from '../models/dailyRoutineModel.js';


export async function getDailyRoutineByDay(day) {
    const collection = db.collection("daily_routine");
    const routine = await collection.find({ day }).toArray();
    return routine;
}

export async function createDailyRoutine(data) {
    // Valida y crea la entidad siguiendo el modelo
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
    const result = await db.collection("daily_routine").deleteOne({ _id: new ObjectId(id) });
    return result;
}