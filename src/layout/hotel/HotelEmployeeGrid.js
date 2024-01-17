import React, { Component } from 'react';
import Grid from '../../core/Grid';
import { gridHotelEmployeeAction } from '../../redux/actions/GridAction';
import { hotelEmployeesList } from '../../utils/HttpUtil';
import Navigation from '../Navigation';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { hotelGridHandler } from '../../handler/HotelGridHandler';
import { showHotel, showHotelFromNav } from '../../handler/ShowHotelHandler';
import { hotelEmployeesGridColumns } from '../../utils/GridColumnUtil';

class HotelEmployeeGrid extends Component {
  async componentDidMount() {
    const columns = hotelEmployeesGridColumns();
    const data = await hotelEmployeesList(
      hashHistory.getCurrentLocation().state.data.currentId
    );
    this.props.hotelEmployees({ type: 'hotel-employees', data, columns });

    console.log('inside hotel employee grid ');
  }

  render() {
    return (
      <div>
        <Navigation
          handler1={hotelGridHandler}
          handler2={showHotelFromNav}
          title1="Hotels"
          title2={hashHistory.getCurrentLocation().state.data.hotelName}
          title3="Employees"
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
    hotelEmployees: (data) => dispatch(gridHotelEmployeeAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HotelEmployeeGrid);
