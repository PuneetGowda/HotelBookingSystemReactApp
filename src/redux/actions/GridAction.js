export const gridHotelAction = (data) => {
  console.log('inside hotel grid action');
  return { type: data.type, payload: data.data, columns: data.columns };
};

export const gridHotelCustomerAction = (data) => {
  console.log('inside hotel customer grid action');
  return { type: data.type, payload: data.data, columns: data.columns };
};

export const gridHotelBookingAction = (data) => {
  console.log('inside hotel booking grid action');
  return { type: data.type, payload: data.data, columns: data.columns };
};

export const gridHotelServiceAction = (data) => {
  console.log('inside hotel customer grid action');
  return { type: data.type, payload: data.data, columns: data.columns };
};

export const gridHotelEmployeeAction = (data) => {
  console.log('inside hotel employee grid action');
  return { type: data.type, payload: data.data, columns: data.columns };
};

export const gridHotelRoomAction = (data) => {
  console.log('inside hotel room grid action');
  return { type: data.type, payload: data.data, columns: data.columns };
};

export const hotelInformationAction = (data) => {
  console.log('inside hotel information action');
  return { type: data.type, payload: data.data };
};
