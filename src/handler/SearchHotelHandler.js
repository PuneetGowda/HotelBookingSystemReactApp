import { gridHotelAction } from '../redux/actions/GridAction';
import store from '../store/store';
import { hotelList } from '../utils/HttpUtil';
import { hashHistory } from 'react-router';
import { hotelGridColumns } from '../utils/GridColumnUtil';

export const searchHotel = async (hotelName) => {
  console.log('Inside search hotel of search handler', hotelName);

  const data = await hotelList(hotelName);
  const columns = hotelGridColumns();

  store.dispatch(gridHotelAction({ type: 'hotels', data, columns }));

  hashHistory.replace({ pathname: '/home' });
};
