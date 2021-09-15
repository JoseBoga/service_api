// import {connectToDatabase} from '../../db';
// import {notificationsTypes} from '../../types/notificationsTypes';

// // export const createNotifications = async (notifications) => {
// //   const db = await connectToDatabase();
// //   try {
// //     const response = await db.collection('notifications').insertMany(notificationsErrors);
// //     console.log('RESPONSE >>', response);
// //   } catch (err) {
// //     throw err;
// //   };
// // };

// export const createNotificationNewService = async ({serviceId, sub}) => {
//   const db = await connectToDatabase();
//   try {
//     const response = await db.collection('notifications').insert({sub, serviceId, createdAt: new Date(), read: false, type: notificationsTypes.INFORMATION});
//     console.log('RESPONSE >>', response);
//   } catch (err) {
//     console.log('ERR >>', err);
//   }
// };
