import store from '../store/store';
import {
  showAlertAction,
  messageAlertAction,
} from '../redux/actions/ShowAlertAction';
import { deleteAHotel, hotelList } from '../utils/HttpUtil';
import { gridHotelAction } from '../redux/actions/GridAction';
import { hashHistory } from 'react-router';
import {
  getCurrentIdArgumentIndex,
  getSavedActiveIndex,
  saveActiveIndex,
} from '../utils/CommonUtil';
import { hotelGridColumns } from '../utils/GridColumnUtil';

export const deleteHotel = async () => {
  const activeIndex = getSavedActiveIndex();

  console.log('Delete hotel ', activeIndex);

  const currentId = getCurrentIdArgumentIndex(activeIndex);

  await deleteAHotel(currentId);

  const columns = hotelGridColumns();
  const data = await hotelList();

  store.dispatch(gridHotelAction({ type: 'hotels', data, columns }));

  hashHistory.replace({ pathname: '/home' });

  store.dispatch(
    messageAlertAction({
      title: 'Success !',
      message: 'Deleted successfully',
      showButton: false,
    })
  );

  store.dispatch(showAlertAction());
};

export const deleteAlertMessage = async () => {
  await hotelList();

  saveActiveIndex(store.getState().gridIndexReducerFunction.activeIndex);

  store.dispatch(
    messageAlertAction({
      title: 'Are you sure?',
      message: 'Do you want to delete?',
      showButton: true,
      handlerMethod: 'deleteHotel',
    })
  );
  store.dispatch(showAlertAction());
};
