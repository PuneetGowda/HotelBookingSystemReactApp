const initialState = {
  value: '',
  isUsernameValid: null,
  type: '',
};

const usernameReducerFunction = (state = initialState, action) => {
  console.log('inside reducer function');
  if (action.type === 'validate-username') {
    return {
      value: action.value,
      isUsernameValid: action.isUsernameValid,
      type: action.type,
    };
  }

  if (action.type === 'reset') {
    return initialState;
  }

  return state;
};

export default usernameReducerFunction;
