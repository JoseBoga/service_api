// import axios from 'axios';

// import {connectToDatabase} from '../db';
// import {createNotifications} from '../utils/notifications-utils';

// async function runJobs(event, context) {
//   const db = await connectToDatabase();
//   const services = await db.collection('services').find({}).toArray();
//   const statusResponses = [];
//   const notificationsErrors = [];
//   const runServices = [];

//   services.map(async server => {
//     const {sub, url, _id, name} = server;
//     runServices.push(axios.get(url, {
//       headers: {
//         "user_sub": sub,
//         "server_id": _id,
//         "service_name": name,
//       }
//     }));
//   });

//   try {
//     const responseServer = await Promise.all(runServices);
//     responseServer.map(res => {
//       const {config: {headers}, status} = res;
//       const {user_sub: sub, server_id} = headers;

//       statusResponses.push({status: status, sub, createdAt: new Date(), id: server_id});
//     });
//   } catch (err) {
//     const {config: {headers}, status, data} = err;
//     const {user_sub: sub, server_id, service_name} = headers;
//     const createdAt = new Date();
//     const errorStatus = status || 500;

//     statusResponses.push({status: errorStatus, sub, createdAt, id: server_id, data: JSON.stringify(data)});
//     notificationsErrors.push({sub, status: errorStatus, serviceName: service_name, serviceId: server_id, eventTime: createdAt, createdAt: new Date(), read: false});
//   }

//   await db.collection('servicesStatus').insertMany(statusResponses);
//   createNotifications(notificationsErrors);
//   // if (notificationsErrors.length > 0) {
//   //   await db.collection('notifications').insertMany(notificationsErrors);
//   // }
// };

// export const handler = runJobs;