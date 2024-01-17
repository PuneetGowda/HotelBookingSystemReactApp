import axios from 'axios';

export const testAPI = async () => {
  const testResponse = await axios(
    'http://localhost:8080/hotelbookingsystem/hotels'
  );

  console.log('test response ', testResponse);

  const testResponseData = await testResponse.data;

  console.log('Inside test method ', testResponseData);
};
