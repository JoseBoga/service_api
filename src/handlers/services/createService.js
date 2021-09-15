import {getTokenInformation} from '../../helpers/user';
import {createService} from '../../helpers/services';
import {createServiceNewService} from '../../helpers/status';

async function createServiceHandler(event, context) {
  const {sub} = getTokenInformation(event);
  const body = JSON.parse(event.body);

  const {name, url} = body;

  if (!name || !url || !sub) {
    return {
      statusCode: 400,
      body: JSON.stringify({message: 'Missing fields'}),
    };
  }

  const serviceCreated = await createService({name, url, sub});
  const status = await createServiceNewService({serviceId: serviceCreated, sub});

  console.log('>>', {serviceCreated, status});

  return {
    statusCode: 201,
    body: JSON.stringify({message: 'Service created'}),
  };
};

export const handler = createServiceHandler;
