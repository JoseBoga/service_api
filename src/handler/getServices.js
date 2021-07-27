import {connectToDatabase} from '../db';

async function getServices(event, context) {
  const db = await connectToDatabase();
  const {id: sub} = event.pathParameters;

  if (!sub) {
    return {
      statusCode: 404,
      body: JSON.stringify({ message: '<<< error >>>' }),
    };
  }

  const userServices = await db.collection('servers').find({sub}).toArray();

  return {
    statusCode: 201,
    body: JSON.stringify({ servers: userServices }),
  };
};

export const handler = getServices;
