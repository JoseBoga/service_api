import {ObjectId} from 'mongodb';
import {head, get} from 'lodash';

import {connectToDatabase} from '../db';
import {servicesTypes} from '../types/serviceTypes';

export const getServices = async (options) => {
  const db = await connectToDatabase();
  try {
    const services = await db.collection('services').find(options).toArray();

    return services;
  } catch (err) {
    return [];
  }
};

export const getServiceById = async ({serviceId, sub}) => {
  const db = await connectToDatabase();

  try {
    const service = await db.collection('services').find({sub, _id: ObjectId(serviceId)}).toArray();

    return head(service) || [];
  } catch (err) {
    return [];
  }
};

export const createService = async ({name, url, sub}) => {
  const db = await connectToDatabase();

  const service = {
    name,
    url,
    sub,
    interval: 5000,
    notifications: true,
    createdAt: new Date(),
    status: servicesTypes.PLAY,
  };

  try {
    const serviceCreated = await db.collection('services').insert(service);
    const id = get(serviceCreated, 'insertedIds.0', '');

    return id;
  } catch (err) {
    return [];
  }
};
