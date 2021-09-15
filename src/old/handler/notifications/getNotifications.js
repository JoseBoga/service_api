// import {connectToDatabase} from '../../db';
// import {getTokenInformation} from '../../utils/user-utils';

// async function getNotifications(event, context) {
//   const db = await connectToDatabase();
//   const {sub} = getTokenInformation(event);

//   const notifications = await db.collection('notifications').find({sub}).toArray();

//   return {
//     statusCode: 201,
//     body: JSON.stringify({notifications}),
//   };
// };

// export const handler = getNotifications;
