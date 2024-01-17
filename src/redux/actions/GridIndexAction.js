export const activeIndexAction = (data) => {
  console.log('inside active index action');
  return { type: 'active-index', payload: data };
};
