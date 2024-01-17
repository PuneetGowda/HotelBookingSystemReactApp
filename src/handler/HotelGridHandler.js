import { hashHistory } from 'react-router';
import { gridHotelAction } from '../redux/actions/GridAction';
import store from '../store/store';
import { hotelList } from '../utils/HttpUtil';
import { hotelGridColumns } from '../utils/GridColumnUtil';

export const hotelGridHandler = async () => {
  const data = await hotelList();
  console.log('inside hotel grid handler');

  const columns = hotelGridColumns();

  store.dispatch(gridHotelAction({ type: 'hotels', data, columns }));

  hashHistory.replace({ pathname: '/home' });
};

export const loginToHomeHandler = () => {
  console.log('inside login to home handler');

  hashHistory.replace({ pathname: '/home' });
};
