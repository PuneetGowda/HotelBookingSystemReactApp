const initialState = {
  type: '',
  message: '',
  isError: null,
};

const errorReducerFunction = (state = initialState, action) => {
  console.log('inside error reducer function');
  if (action.type === 'error') {
    return {
      type: action.type,
      message: action.payload,
      isError: true,
    };
  }

  return state;
};

export default errorReducerFunction;
