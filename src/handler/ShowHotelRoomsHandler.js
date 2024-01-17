import { hashHistory } from 'react-router';

import { gridHotelRoomAction } from '../redux/actions/GridAction';
import store from '../store/store';
import { getCurrentId, getSavedHotelId } from '../utils/CommonUtil';
import { hotelRoomsGridColumns } from '../utils/GridColumnUtil';
import { hotelRoomsList } from '../utils/HttpUtil';

export const showHotelRoomsHandler = async () => {
  const currentId = getSavedHotelId();
  const data = await hotelRoomsList(currentId);

  const columns = hotelRoomsGridColumns();

  const hotelName = hashHistory.getCurrentLocation().state.data.data.name;

  store.dispatch(gridHotelRoomAction({ type: 'hotel-rooms', data, columns }));

  hashHistory.replace({
    pathname: '/hotelrooms',
    state: { data: { hotelName, currentId } },
  });
};
