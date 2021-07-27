const validatePrime = num => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
};

async function healthCheck(event, context) {
  const {id} = event.pathParameters;

  if (id) {
    const isPrime = validatePrime(id);

    if (isPrime) {
      return {
        statusCode: 201,
        body: JSON.stringify({ message: 'Is Prime' })
      };
    } else {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: 'Error not Prime' })
      };
    }
  }

  return {
    statusCode: 404,
    body: JSON.stringify({ message: 'Error not id' })
  };
};

export const handler = healthCheck;
