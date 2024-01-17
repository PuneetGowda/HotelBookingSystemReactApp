export const userLoginAction = (data) => {
  return {
    type: 'login',
    isLoggedIn: data,
  };
};

export const userLogoutAction = () => {
  return {
    type: 'logout',
    isLoggedIn: false,
  };
};
