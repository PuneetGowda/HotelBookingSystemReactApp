import React, { Component } from 'react';
import Grid from '../../core/Grid';
import { gridHotelRoomAction } from '../../redux/actions/GridAction';
import Navigation from '../Navigation';
import { connect } from 'react-redux';
import { hotelRoomsList } from '../../utils/HttpUtil';
import { hashHistory } from 'react-router';
import { hotelGridHandler } from '../../handler/HotelGridHandler';
import { showHotel, showHotelFromNav } from '../../handler/ShowHotelHandler';
import { hotelRoomsGridColumns } from '../../utils/GridColumnUtil';

class HotelRoomGrid extends Component {
  async componentDidMount() {
    console.log('inside hotel employee grid ');

    const columns = hotelRoomsGridColumns();
    const data = await hotelRoomsList(
      hashHistory.getCurrentLocation().state.data.currentId
    );
    this.props.hotelRooms({ type: 'hotel-rooms', data, columns });
  }

  render() {
    return (
      <div>
        <Navigation
          handler1={hotelGridHandler}
          handler2={showHotelFromNav}
          title1="Hotels"
          title2={hashHistory.getCurrentLocation().state.data.hotelName}
          title3="Rooms"
          delete="false"
          edit="false"
        />
        <Grid />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    hotelRooms: (data) => dispatch(gridHotelRoomAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HotelRoomGrid);
