import { hashHistory } from 'react-router';
import { gridHotelAction } from '../redux/actions/GridAction';
import {
  messageAlertAction,
  showAlertAction,
} from '../redux/actions/ShowAlertAction';
import store from '../store/store';
import { getCurrentId } from '../utils/CommonUtil';
import { hotelGridColumns } from '../utils/GridColumnUtil';
import { hotelInformation, hotelList, updateHotel } from '../utils/HttpUtil';

export const editHotel = async (event) => {
  await hotelList();

  let data;

  const currentId = getCurrentId();

  console.log('inside edit hotel handler');

  const hotel = await hotelInformation(currentId);

  console.log('Hotel is ', hotel);

  data = {
    hotelName: hotel.data.name,
    hotelLocation: hotel.data.location,
    hotelContact: hotel.data.phone,
    hotelEmail: hotel.data.email,
    hotelRating: hotel.data.rating,
    hotelPetFriendly: hotel.data.petfriendly,
    buttonName: 'UPDATE',
    hotelId: currentId,
  };

  hashHistory.replace({
    pathname: '/edithotel',
    state: { data: data },
  });
};

export const updateHotelHandler = async (hotel) => {
  console.log('Update hotel handler');

  const currentId = getCurrentId();

  await updateHotel(currentId, hotel);
  const columns = hotelGridColumns();

  const data = await hotelList();

  store.dispatch(gridHotelAction({ type: 'hotels', data, columns }));

  store.dispatch(
    messageAlertAction({
      title: 'Success !',
      message: 'Updated successfully',
      showButton: false,
    })
  );

  store.dispatch(showAlertAction());

  hashHistory.replace({ pathname: '/home' });
};
