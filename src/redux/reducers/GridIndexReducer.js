const initialState = {
  type: '',
  activeIndex: 1,
};

const gridIndexReducerFunction = (state = initialState, action) => {
  if (action.type === 'active-index') {
    return {
      type: action.type,
      activeIndex: action.payload,
    };
  }

  if (action.type === 'grid-ref') {
    return {
      type: action.type,
      activeIndex: state.activeIndex,
    };
  }

  return state;
};

export default gridIndexReducerFunction;
