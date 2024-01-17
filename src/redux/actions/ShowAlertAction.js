export const showAlertAction = () => {
  return {
    type: 'show',
  };
};

export const messageAlertAction = (data) => {
  return {
    type: 'message',
    title: data.title,
    message: data.message,
    showButton: data.showButton,
    handlerMethod: data.handlerMethod,
  };
};
