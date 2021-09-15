import {ObjectId} from 'mongodb';

import {connectToDatabase} from '../db';
import {statusTypes, statusMessages} from '../types/statusTypes';

export const getStatusByServiceId = async ({sub, serviceId}) => {
  const db = await connectToDatabase();

  try {
    const status = await db.collection('status').find({serviceId: ObjectId(serviceId), sub}).toArray();

    return status;
  } catch (err) {
    return [];
  }
};

export const createServiceNewService = async ({serviceId, sub}) => {
  const db = await connectToDatabase();

  const obj = {
    serviceId,
    sub,
    createdAt: new Date(),
    type: statusTypes.INFORMATION,
    message: statusMessages.started,
  };

  try {
    const record = await db.collection('status').insert(obj);

    return record;
  } catch (err) {
    return [];
  }
};
