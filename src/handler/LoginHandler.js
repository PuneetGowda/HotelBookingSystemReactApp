import { validateUsernameAction } from '../redux/actions/ValidateUsernameAction';
import { validatePasswordAction } from '../redux/actions/ValidatePasswordAction';
import { userLoginAction } from '../redux/actions/UserLoggedInAction';
import store from '../store/store';

export const validateUsername = (value) => {
  if (value.length < 4) {
    store.dispatch(
      validateUsernameAction({ value: value, isUsernameValid: false })
    );
  } else {
    store.dispatch(
      validateUsernameAction({ value: value, isUsernameValid: true })
    );
  }
};

export const validatePassword = (value) => {
  let regExpDigit = /[0-9]/;
  let regExpCaps = /[A-Z]/;

  if (
    regExpDigit.test(value) &&
    regExpCaps.test(value) &&
    value.includes('@') &&
    value.length > 4 &&
    value.length < 16
  ) {
    store.dispatch(validatePasswordAction({ value: value, isValid: true }));
  } else {
    store.dispatch(validatePasswordAction({ value: value, isValid: false }));
  }
};

export const loginUser = (data) => {
  store.dispatch(userLoginAction(data));
};
