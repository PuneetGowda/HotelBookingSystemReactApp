import store from '../store/store';
import { hashHistory } from 'react-router';
import { hotelServicesList } from '../utils/HttpUtil';
import { gridHotelServiceAction } from '../redux/actions/GridAction';
import { hotelServiceGridColumns } from '../utils/GridColumnUtil';
import { getCurrentId, getSavedHotelId } from '../utils/CommonUtil';

export const showHotelServicesHandler = async () => {
  console.log('Inside hotel services handler');

  const currentId = getSavedHotelId();

  const hotelName = hashHistory.getCurrentLocation().state.data.data.name;

  const columns = hotelServiceGridColumns();

  const data = await hotelServicesList(currentId);

  store.dispatch(
    gridHotelServiceAction({ type: 'hotel-services', data, columns })
  );

  hashHistory.replace({
    pathname: '/hotelservices',
    state: { data: { hotelName, currentId } },
  });
};
