import { MongoClient } from 'mongodb';
import { config } from '../config.js';

export let db = null;

export async function connectMongo() {
  const client = new MongoClient(config.dbUri);
  await client.connect();
  db = client.db("workoutDB");
  console.log("Conectado a workoutDB en MongoDB");
}