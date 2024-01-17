import store from '../store/store';

let savedActiveIndex = '';
let savedHotelId;

export const getCurrentId = () => {
  const currentId = store
    .getState()
    .gridRefReducerFunction.gridRef(
      store.getState().gridIndexReducerFunction.activeIndex
    );

  return currentId;
};

export const getCurrentIdArgumentIndex = (activeIndex) => {
  const currentId = store
    .getState()
    .gridRefReducerFunction.gridRef(activeIndex);

  return currentId;
};

export const saveActiveIndex = (activeIndex) => {
  savedActiveIndex = activeIndex;
  console.log('Active index SAVED ', savedActiveIndex);
};

export const getSavedActiveIndex = () => {
  return savedActiveIndex;
};

export const saveHotelId = (hotelId) => {
  savedHotelId = hotelId;
};

export const getSavedHotelId = () => {
  return savedHotelId;
};
