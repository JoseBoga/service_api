// import {ObjectId} from 'mongodb';

// import {connectToDatabase} from '../../db';

// async function updateNotification(event, context) {
//   const db = await connectToDatabase();
//   const {id} = event.pathParameters;

//   const notificationUpdated = await db.collection('notifications').updateOne({_id: ObjectId(id)}, {$set: {read: true}});
//   const {result: { nModified }} = notificationUpdated;

//   return {
//     statusCode: 201,
//     body: JSON.stringify({updated: nModified === 1}),
//   };

// };

// export const handler = updateNotification;
