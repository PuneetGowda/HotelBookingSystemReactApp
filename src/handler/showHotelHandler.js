import { hashHistory } from 'react-router';
import { hotelInformationAction } from '../redux/actions/GridAction';
import store from '../store/store';
import {
  getCurrentId,
  getCurrentIdArgumentIndex,
  getSavedActiveIndex,
  getSavedHotelId,
  saveActiveIndex,
  saveHotelId,
} from '../utils/CommonUtil';
import { hotelInformation, hotelList } from '../utils/HttpUtil';

export const showHotel = async () => {
  await hotelList();

  const currentId = getCurrentId();
  console.log('inside show hotel ', currentId);

  saveHotelId(currentId);

  const hotel = await hotelInformation(currentId);

  store.dispatch(hotelInformationAction({ type: 'hotel-information', hotel }));

  hashHistory.replace({
    pathname: '/hotel',
    state: {
      data: hotel,
    },
  });
};

export const showHotelFromNav = async () => {
  console.log('inside show hotel from Nav ');
  await hotelList();

  const currentId = getSavedHotelId();

  const hotel = await hotelInformation(currentId);

  store.dispatch(hotelInformationAction({ type: 'hotel-information', hotel }));

  hashHistory.replace({
    pathname: '/hotel',
    state: {
      data: hotel,
    },
  });
};
