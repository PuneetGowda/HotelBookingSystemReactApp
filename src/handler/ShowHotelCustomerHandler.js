import { gridHotelCustomerAction } from '../redux/actions/GridAction';
import store from '../store/store';
import { hashHistory } from 'react-router';
import { hotelCustomersList } from '../utils/HttpUtil';
import { hotelCustomerGridColumns } from '../utils/GridColumnUtil';
import { getCurrentId, getSavedHotelId } from '../utils/CommonUtil';

export const showHotelCustomersHandler = async () => {
  const hotelName = hashHistory.getCurrentLocation().state.data.data.name;
  console.log('Inside hotel customer handler', hotelName);

  const columns = hotelCustomerGridColumns();

  const currentId = getSavedHotelId();

  console.log('Current id ', currentId);

  const data = await hotelCustomersList(currentId);

  store.dispatch(
    gridHotelCustomerAction({ type: 'hotel-customers', data, columns })
  );

  hashHistory.replace({
    pathname: '/hotelcustomers',
    state: { data: { hotelName, currentId } },
  });
};
