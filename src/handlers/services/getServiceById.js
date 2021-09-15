import {getTokenInformation} from '../../helpers/user';
import {getServiceById} from '../../helpers/services';
import {getStatusByServiceId} from '../../helpers/status';

async function getServiceByIdHandler(event, context) {
  const {id} = event.pathParameters;
  const {sub} = getTokenInformation(event);

  if (!sub) {
    return {
      statusCode: 400,
      body: JSON.stringify({message: 'Missing fields'}),
    };
  }

  const service = await getServiceById({serviceId: id, sub});
  const status = await getStatusByServiceId({sub, serviceId: id});

  return {
    statusCode: 201,
    body: JSON.stringify({...service, serviceStatus: status.reverse()}),
  };
};

export const handler = getServiceByIdHandler;
