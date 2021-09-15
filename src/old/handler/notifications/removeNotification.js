// import {ObjectId} from 'mongodb';

// import {connectToDatabase} from '../../db';
// import {getTokenInformation} from '../../utils/user-utils';

// async function removeNotification(event, context) {
//   const db = await connectToDatabase();
//   const {id} = event.pathParameters;
//   const {sub} = getTokenInformation(event);

//   const removedNotifications = await db.collection('notifications').deleteMany({sub, _id: ObjectId(id)});
//   const {result: {deletedCount}} = removedNotifications;

//   return {
//     statusCode: 201,
//     body: JSON.stringify({removed: deletedCount === 1}),
//   };
// };

// export const handler = removeNotification;
