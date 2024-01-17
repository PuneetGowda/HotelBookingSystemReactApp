export const validateUsernameAction = (data) => {
  console.log('inside action');
  return {
    type: 'validate-username',
    isUsernameValid: data.isUsernameValid,
    value: data.value,
  };
};

export const resetUsernameAction = () => {
  return {
    type: 'reset',
  };
};
