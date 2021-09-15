// import axios from 'axios';
// import {createManyStatus} from '../handler/status/createStatus';
// // import {createNotifications} from '../utils/notifications-utils';

// export const runJob = async (services) => {
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

//       statusResponses.push({status: status, sub, createdAt: new Date(), serviceId: server_id});
//     });
//   } catch (err) {
//     const {config: {headers}, status, data} = err;
//     const {user_sub: sub, server_id, service_name} = headers;
//     const createdAt = new Date();
//     const errorStatus = status || 500;

//     statusResponses.push({status: errorStatus, sub, createdAt, serviceId: server_id, data: JSON.stringify(data)});
//     notificationsErrors.push({sub, status: errorStatus, serviceName: service_name, serviceId: server_id, eventTime: createdAt, createdAt: new Date(), read: false});
//   }

//   await createManyStatus(statusResponses);
//   // await createNotifications(notificationsErrors);
// };
