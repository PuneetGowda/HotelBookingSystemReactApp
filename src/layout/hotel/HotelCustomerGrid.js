import React, { Component } from 'react';
import { hotelCustomersList } from '../../utils/HttpUtil';
import { connect } from 'react-redux';
import { gridHotelCustomerAction } from '../../redux/actions/GridAction';
import Grid from '../../core/Grid';
import Navigation from '../Navigation';
import { hashHistory } from 'react-router';
import { hotelGridHandler } from '../../handler/HotelGridHandler';
import { showHotel, showHotelFromNav } from '../../handler/ShowHotelHandler';
import { hotelCustomerGridColumns } from '../../utils/GridColumnUtil';
import { getCurrentId } from '../../utils/CommonUtil';
import store from '../../store/store';

class HotelCustomerGrid extends Component {
  async componentDidMount() {
    console.log(
      'inside hotel customer grid',
      hashHistory.getCurrentLocation().state.data
    );

    const currentId = hashHistory.getCurrentLocation().state.data.currentId;
    const columns = hotelCustomerGridColumns();
    const data = await hotelCustomersList(currentId);

    this.props.hotelCustomers({ type: 'hotel-customers', data, columns });

    console.log('inside hotel customer grid ', this.props.hotelCustomerList);
  }

  render() {
    return (
      <div>
        <Navigation
          handler1={hotelGridHandler}
          handler2={showHotelFromNav}
          title1="Hotels"
          title2={hashHistory.getCurrentLocation().state.data.hotelName}
          title3="Customers"
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
    hotelCustomers: (data) => dispatch(gridHotelCustomerAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HotelCustomerGrid);
