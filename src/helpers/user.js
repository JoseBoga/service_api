import {get} from 'lodash';
import jwtToken from 'jsonwebtoken';

export const getTokenInformation = event => {
  const bearerToken = get(event, 'headers.Authorization', '');
  const token = bearerToken.replace('Bearer ', '');
  const decodedToken = jwtToken.decode(token);

  const sub = get(decodedToken, 'sub', '');
  const email = get(decodedToken, 'email', '');
  const userName = get(decodedToken, 'cognito:username', '');
  const emailVerified = get(decodedToken, 'email_verified', '');
  const exp = get(decodedToken, 'exp', '');

  return {sub, email, userName, emailVerified, exp};
};
