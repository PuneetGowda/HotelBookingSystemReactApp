import { userLogoutAction } from '../redux/actions/UserLoggedInAction';
import store from '../store/store';
import { hashHistory } from 'react-router';
import { resetUsernameAction } from '../redux/actions/ValidateUsernameAction';
import { resetPasswordAction } from '../redux/actions/ValidatePasswordAction';
import { removeLocalStorageItem } from '../utils/LocalStorageUtil';
import {
  messageAlertAction,
  showAlertAction,
} from '../redux/actions/ShowAlertAction';
import { hideAlertAction } from '../redux/actions/HideAlertAction';

export const logout = () => {
  console.log('inside logout method of logout handler');

  store.dispatch(resetUsernameAction());
  store.dispatch(resetPasswordAction());
  store.dispatch(userLogoutAction());

  store.dispatch(hideAlertAction());

  hashHistory.replace({ pathname: '/logout' });
};

export const logoutConfirmation = () => {
  store.dispatch(
    messageAlertAction({
      title: 'Are you sure',
      message: 'Do you want to logout ?',
      showButton: true,
      handlerMethod: 'logout',
    })
  );

  store.dispatch(showAlertAction());
};
