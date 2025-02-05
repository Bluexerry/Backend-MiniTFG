import { db } from '../loaders/mongoDB.js';

export async function getExercisesByBodyPart(bodyPart) {
  // Se asume que en la colección "exercices" los documentos tienen el campo "bodyPart"
  const collection = db.collection("exercices");
  const exercises = await collection.find({ bodyPart }).toArray();
  return exercises;
}