import axios from 'axios';

import {connectToDatabase} from '../db';

async function runJobs(event, context) {
  const db = await connectToDatabase();
  const servers = await db.collection('servers').find({}).toArray();

  const number = Math.random() * 10;

  const runServers = [];

  servers.map(async server => {
    const {sub, url, _id} = server;
    runServers.push(axios.get(`${url}/${number}`, {
      headers: {
        "user_sub": sub,
        "server_id": _id,
      }
    }));
  });

  const response = await Promise.all(runServers);
  const notificationResponse = [];

  response.map(res => {
    const {config: {headers}, status} = res;
    const {user_sub: sub, server_id} = headers;

    notificationResponse.push({status, sub, createdAt: new Date(), id: server_id});
  });

  await db.collection('status').insertMany(notificationResponse);
};

export const handler = runJobs;