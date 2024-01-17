import { hashHistory } from 'react-router';
import {
  messageAlertAction,
  showAlertAction,
} from '../redux/actions/ShowAlertAction';
import store from '../store/store';
import { createHotel } from '../utils/HttpUtil';

export const addHotel = () => {
  const data = {
    buttonName: 'ADD',
  };
  hashHistory.replace({
    pathname: '/addhotel',
    state: {
      data: data,
    },
  });
};

export const addHotelHandler = async (hotel) => {
  console.log('Add hotel handler', hotel);

  await createHotel(hotel);

  store.dispatch(
    messageAlertAction({
      title: 'Success !',
      message: 'Added Successfully',
      showButton: false,
    })
  );

  store.dispatch(showAlertAction());

  hashHistory.replace({
    pathname: '/home',
  });
};
