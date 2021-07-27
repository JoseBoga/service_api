import { MongoClient } from 'mongodb';

const URL = 'mongodb+srv://stark:jose2587@cluster0.begke.mongodb.net/down-service?retryWrites=true&w=majority';

let cachedDb = null;

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(URL);

  const db = await client.db('services-down');

  cachedDb = db;
  return db;
}

export { connectToDatabase };
