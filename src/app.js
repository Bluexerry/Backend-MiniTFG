import express from 'express';
import expressLoader from './loaders/express.js';
import { connectMongo } from './loaders/mongoDB.js';

export default async function createApp() {
  await connectMongo();
  const app = express();
  await expressLoader({ expressApp: app });
  return app;
}