const initialState = {
  value: '',
  isValid: null,
  type: '',
};

const passwordReducerFunction = (state = initialState, action) => {
  console.log('inside reducer function');

  if (action.type === 'validate-password') {
    return {
      value: action.value,
      isValid: action.isValid,
      type: action.type,
    };
  }

  if (action.type === 'reset') {
    return initialState;
  }

  return state;
};

export default passwordReducerFunction;
