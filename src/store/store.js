import { configureStore } from '@reduxjs/toolkit';
import userLoginReducerFunction from '../redux/reducers/UserLoggedInReducer';
import usernameReducerFunction from '../redux/reducers/ValidateUsernameReducer';
import passwordReducerFunction from '../redux/reducers/ValidatePasswordReducer';
import gridReducerFunction from '../redux/reducers/GridReducer';
import showAlertReducerFunction from '../redux/reducers/ShowAlertReducer';
import errorReducerFunction from '../redux/reducers/ErrorReducer';
import gridIndexReducerFunction from '../redux/reducers/GridIndexReducer';
import gridRefReducerFunction from '../redux/reducers/GridRefReducer';

const store = configureStore({
  reducer: {
    usernameReducerFunction: usernameReducerFunction,
    passwordReducerFunction: passwordReducerFunction,
    userLoginReducerFunction: userLoginReducerFunction,
    gridReducerFunction: gridReducerFunction,
    showAlertReducerFunction: showAlertReducerFunction,
    errorReducerFunction: errorReducerFunction,
    gridIndexReducerFunction: gridIndexReducerFunction,
    gridRefReducerFunction: gridRefReducerFunction,
  },
});

export default store;
