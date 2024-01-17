import React, { Component } from 'react';
import Grid from '../../core/Grid';
import { gridHotelServiceAction } from '../../redux/actions/GridAction';
import { hotelServicesList } from '../../utils/HttpUtil';
import Navigation from '../Navigation';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { hotelGridHandler } from '../../handler/HotelGridHandler';
import { showHotel, showHotelFromNav } from '../../handler/ShowHotelHandler';
import { hotelServiceGridColumns } from '../../utils/GridColumnUtil';

class HotelServiceGrid extends Component {
  async componentDidMount() {
    console.log('inside hotel service grid ');
    const columns = hotelServiceGridColumns();
    const data = await hotelServicesList(
      hashHistory.getCurrentLocation().state.data.currentId
    );
    this.props.hotelServices({ type: 'hotel-services', data, columns });
  }

  render() {
    return (
      <div>
        <Navigation
          handler1={hotelGridHandler}
          handler2={showHotelFromNav}
          title1="Hotels"
          title2={hashHistory.getCurrentLocation().state.data.hotelName}
          title3="Services"
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
    hotelServices: (data) => dispatch(gridHotelServiceAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HotelServiceGrid);
