import { gridHotelEmployeeAction } from '../redux/actions/GridAction';
import store from '../store/store';
import { hotelEmployeesList } from '../utils/HttpUtil';
import { hashHistory } from 'react-router';
import { hotelEmployeesGridColumns } from '../utils/GridColumnUtil';
import { getCurrentId, getSavedHotelId } from '../utils/CommonUtil';

export const showHotelEmployeesHandler = async () => {
  console.log('Inside hotel employees handler');

  const hotelName = hashHistory.getCurrentLocation().state.data.data.name;

  const columns = hotelEmployeesGridColumns();

  const currentId = getSavedHotelId();

  const data = await hotelEmployeesList(currentId);

  store.dispatch(
    gridHotelEmployeeAction({ type: 'hotel-employees', data, columns })
  );

  hashHistory.replace({
    pathname: '/hotelemployees',
    state: { data: { hotelName, currentId } },
  });
};
