import React, { Component } from 'react';
import { gridHotelAction } from '../../redux/actions/GridAction';
import { hotelList } from '../../utils/HttpUtil';
import Grid from '../../core/Grid';
import { connect } from 'react-redux';
import Alert from '../../core/Alert';
import '../../assets/styles/HotelGrid.css';
import Icon from '../../core/Icon';
import { addHotel } from '../../handler/AddHotelHandler';
import { errorAction } from '../../redux/actions/ErrorAction';
import { hotelGridColumns } from '../../utils/GridColumnUtil';

class HotelGrid extends Component {
  async componentDidMount() {
    try {
      const columns = hotelGridColumns();
      const data = await hotelList();
      console.log('inside hotel grid', columns);
      this.props.hotels({ type: 'hotels', data, columns });
    } catch (error) {
      console.log('error is ', error);
      this.props.errors(error.message);
    }
  }

  render() {
    return (
      <div>
        {this.props.isError && <p>{this.props.errorMessage}</p>}
        {this.props.showingAlert && <Alert />}
        {!this.props.isError && <Grid />}
        <Icon className="hotel-grid" onClick={addHotel} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    hotelList: state.gridReducerFunction.list,
    showingAlert: state.showAlertReducerFunction.showAlert,
    isError: state.errorReducerFunction.isError,
    errorMessage: state.errorReducerFunction.message,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hotels: (data) => dispatch(gridHotelAction(data)),
    errors: (data) => dispatch(errorAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HotelGrid);
