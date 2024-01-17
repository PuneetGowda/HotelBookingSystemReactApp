import { gridHotelBookingAction } from '../redux/actions/GridAction';
import store from '../store/store';
import { hotelBookingsList } from '../utils/HttpUtil';
import { hashHistory } from 'react-router';
import { hotelBookingsGridColumns } from '../utils/GridColumnUtil';
import { getCurrentId, getSavedHotelId } from '../utils/CommonUtil';

export const showHotelBookingsHandler = async () => {
  console.log(
    'Inside hotel bookings handler',
    localStorage.getItem('currentId')
  );

  const hotelName = hashHistory.getCurrentLocation().state.data.data.name;

  const currentId = getSavedHotelId();

  const columns = hotelBookingsGridColumns();
  const data = await hotelBookingsList(currentId);

  store.dispatch(
    gridHotelBookingAction({ type: 'hotel-bookings', data, columns })
  );

  hashHistory.replace({
    pathname: '/hotelbookings',
    state: { data: { hotelName, currentId } },
  });
};
