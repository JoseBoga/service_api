import {getTokenInformation} from '../../helpers/user';
import {getServices} from '../../helpers/services';

async function getServicesHandler(event, context) {
  const {sub} = getTokenInformation(event);

  if (!sub) {
    return {
      statusCode: 400,
      body: JSON.stringify({message: 'Missing fields'}),
    };
  }

  const services = await getServices({sub});

  return {
    statusCode: 201,
    body: JSON.stringify(services),
  };
};

export const handler = getServicesHandler;
