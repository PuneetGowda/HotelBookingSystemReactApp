export const validatePasswordAction = (data) => {
  console.log('inside validate password action');
  return {
    type: 'validate-password',
    isValid: data.isValid,
    value: data.value,
  };
};

export const resetPasswordAction = () => {
  return {
    type: 'reset',
  };
};
