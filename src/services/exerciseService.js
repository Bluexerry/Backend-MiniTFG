// Backend-MiniTFG/src/services/exerciseService.js
import { db } from '../loaders/mongoDB.js';

export async function getExercisesByBodyPart(bodyPart) {
  const collection = db.collection("exercices");
  const exercises = await collection.find({ bodyPart }).toArray();
  return exercises;
}

export async function getExercisesByQuery(query = {}) {
  const collection = db.collection("exercices");
  // Los query parameters se usarán tal cual para filtrar.
  const exercises = await collection.find(query).toArray();
  return exercises;
}