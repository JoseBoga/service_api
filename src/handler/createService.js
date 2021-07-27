import {connectToDatabase} from '../db';

async function createService(event, context) {
  const db = await connectToDatabase();
  const body = JSON.parse(event.body);
  const {name, url, sub, interval = 5000, notifications = true, status = 2, createdAt = new Date()} = body;

  try {
    if (name && url && sub) {
      const service = { name, url, sub, interval, notifications, status, createdAt };
      const serviceCreated = await db.collection('servers').insert(service);

      return {
        statusCode: 201,
        body: JSON.stringify({ messaje: serviceCreated }),
      };
    }
  } catch (err) {
    return {
      statusCode: 201,
      body: JSON.stringify({ message: 'Error validation' }),
    };
  }
};

export const handler = createService;
