const initialState = {
  type: '',
  gridRef: null,
};

const gridRefReducerFunction = (state = initialState, action) => {
  if (action.type === 'grid-ref') {
    return {
      type: action.type,
      gridRef: action.payload,
    };
  }

  return state;
};

export default gridRefReducerFunction;
