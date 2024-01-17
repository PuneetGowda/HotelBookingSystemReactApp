export const gridRefAction = (data) => {
  console.log('inside grid reference action');
  return { type: 'grid-ref', payload: data.current.getRowId };
};
