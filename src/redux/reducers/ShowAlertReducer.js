const initialState = {
  type: '',
  showAlert: false,
  title: '',
  message: '',
  showButton: null,
  handlerMethod: '',
};

const showAlertReducerFunction = (state = initialState, action) => {
  if (action.type === 'show') {
    return {
      type: action.type,
      showAlert: true,
      title: state.title,
      message: state.message,
      showButton: state.showButton,
      handlerMethod: state.handlerMethod,
    };
  }

  if (action.type === 'hide') {
    return {
      type: action.type,
      showAlert: false,
      title: '',
      message: '',
      showButton: null,
      handlerMethod: '',
    };
  }

  if (action.type === 'message') {
    return {
      type: state.type,
      showAlert: state.showAlert,
      title: action.title,
      message: action.message,
      showButton: action.showButton,
      handlerMethod: action.handlerMethod,
    };
  }

  return state;
};

export default showAlertReducerFunction;
