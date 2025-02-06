import { MongoClient } from 'mongodb';
import { config } from '../config.js';

export let db = null;

export async function connectMongo() {
  try {
    const client = new MongoClient(config.dbUri);
    await client.connect();
    db = client.db("workoutDB");
    console.log("Conectado a workoutDB en MongoDB");
  } catch (error) {
    console.error(`Error conectando a MongoDB: ${error.message}`);
    throw error;
  }
}