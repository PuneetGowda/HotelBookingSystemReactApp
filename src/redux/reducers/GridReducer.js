const initialState = {
  type: '',
  data: [],
  columns: [],
  label: '',
};

const gridReducerFunction = (state = initialState, action) => {
  console.log('inside  grid reducer');
  if (action.type === 'hotels') {
    return {
      type: action.type,
      data: action.payload,
      columns: action.columns,
      label: 'Hotels',
    };
  }

  if (action.type === 'hotel-information') {
    return {
      type: action.type,
      data: action.payload,
      columns: state.columns,
      label: state.label,
    };
  }

  if (action.type === 'hotel-customers') {
    return {
      type: action.type,
      data: action.payload,
      columns: action.columns,
      label: 'Customers',
    };
  }

  if (action.type === 'hotel-bookings') {
    return {
      type: action.type,
      data: action.payload,
      columns: action.columns,
      label: 'Bookings',
    };
  }

  if (action.type === 'hotel-services') {
    return {
      type: action.type,
      data: action.payload,
      columns: action.columns,
      label: 'Services',
    };
  }

  if (action.type === 'hotel-employees') {
    return {
      type: action.type,
      data: action.payload,
      columns: action.columns,
      label: 'Employees',
    };
  }

  if (action.type === 'hotel-rooms') {
    return {
      type: action.type,
      data: action.payload,
      columns: action.columns,
      label: 'Rooms',
    };
  }

  return state;
};

export default gridReducerFunction;
