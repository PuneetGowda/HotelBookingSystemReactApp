const initialState = {
  type: '',
  isLoggedIn: null,
};

const userLoginReducerFunction = (state = initialState, action) => {
  if (action.type === 'login') {
    return {
      type: action.type,
      isLoggedIn: action.isLoggedIn,
    };
  }

  if (action.type === 'logout') {
    return {
      type: action.type,
      isLoggedIn: action.isLoggedIn,
    };
  }

  return state;
};

export default userLoginReducerFunction;
