import React, { Component } from 'react';
import Grid from '../../core/Grid';
import { gridHotelBookingAction } from '../../redux/actions/GridAction';
import { hotelBookingsList } from '../../utils/HttpUtil';
import Navigation from '../Navigation';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { showHotel, showHotelFromNav } from '../../handler/ShowHotelHandler';
import { hotelGridHandler } from '../../handler/HotelGridHandler';
import { hotelBookingsGridColumns } from '../../utils/GridColumnUtil';

class HotelBookingGrid extends Component {
  async componentDidMount() {
    console.log('inside hotel booking grid ');

    const columns = hotelBookingsGridColumns();
    const data = await hotelBookingsList(
      hashHistory.getCurrentLocation().state.data.currentId
    );
    this.props.hotelBookings({ type: 'hotel-bookings', data, columns });
  }

  render() {
    return (
      <div>
        <Navigation
          handler1={hotelGridHandler}
          handler2={showHotelFromNav}
          title1="Hotels"
          title2={hashHistory.getCurrentLocation().state.data.hotelName}
          title3="Bookings"
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
    hotelBookings: (data) => dispatch(gridHotelBookingAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HotelBookingGrid);
