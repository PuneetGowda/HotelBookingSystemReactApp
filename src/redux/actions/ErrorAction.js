export const errorAction = (data) => {
  console.log('inside error action');
  return { type: 'error', payload: data };
};
