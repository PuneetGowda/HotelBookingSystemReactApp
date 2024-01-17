import React, { Component, Fragment } from 'react';
import '../../assets/styles/HotelInformation.css';
import Card from '../../core/Card';
import Navigation from '../Navigation';
import { hashHistory } from 'react-router';
import { showHotelServicesHandler } from '../../handler/ShowHotelServicesHandler';
import { showHotelEmployeesHandler } from '../../handler/ShowHotelEmployeesHandler';
import { showHotelCustomersHandler } from '../../handler/ShowHotelCustomerHandler';
import { showHotelRoomsHandler } from '../../handler/ShowHotelRoomsHandler';
import { showHotelBookingsHandler } from '../../handler/ShowHotelBookingsHandler';
import Alert from '../../core/Alert';
import { connect } from 'react-redux';
import Label from '../../core/Label';
import { hotelGridHandler } from '../../handler/HotelGridHandler';
import { showHotel } from '../../handler/ShowHotelHandler';

class HotelInformation extends Component {
  componentDidMount() {
    console.log('inside hotel information component');
  }

  render() {
    const hotelName = hashHistory.getCurrentLocation().state.data.data.name;
    const hotelLocation =
      hashHistory.getCurrentLocation().state.data.data.location;
    const hotelPhone = hashHistory.getCurrentLocation().state.data.data.phone;
    const hotelEmail = hashHistory.getCurrentLocation().state.data.data.email;
    const hotelRating = hashHistory.getCurrentLocation().state.data.data.rating;
    const hotelPet =
      hashHistory.getCurrentLocation().state.data.data.petfriendly;
    return (
      <Fragment>
        {this.props.showingAlert && <Alert />}
        <Navigation
          handler1={hotelGridHandler}
          handler2={showHotel}
          title1="Hotels"
          title2={hotelName}
          showLogout="false"
          edit="true"
          delete="true"
        />
        <Card>
          <div className="hotel-general">
            <h3>General Info</h3>
            <hr />
            <Label
              className="hotel-name"
              name={hotelName}
              label={`Name \u00A0 \u00A0 \u00A0\u00A0 \u00A0 \u00A0 : \u00A0 ${hotelName}`}
            />
            <Label
              className="hotel-location"
              name={hotelLocation}
              label={`Location \u00A0 \u00A0 \u00A0\u00A0 : \u00A0 ${hotelLocation}`}
            />
            <Label
              className="hotel-phone"
              name={hotelPhone}
              label={`Phone \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 : \u00A0 ${hotelPhone}`}
            />
            <Label
              className="hotel-email"
              name={hotelEmail}
              label={`Email \u00A0 \u00A0 \u00A0  \u00A0 \u00A0 \u00A0 : \u00A0 ${hotelEmail}`}
            />
            <Label
              className="hotel-rating"
              name={hotelRating}
              label={`Rating \u00A0 \u00A0 \u00A0 \u00A0 \u00A0  : \u00A0 ${hotelRating}`}
            />
            <Label
              className="hotel-petfriendly"
              name={hotelPet}
              label={`Pet Friendly \u00A0 : \u00A0 ${hotelPet}`}
            />
          </div>
          <div className="hotel-other">
            <h3>Other Info</h3>
            <hr />
            <label className="customers">
              <div onClick={showHotelCustomersHandler}>Customers</div>
              {` \u00A0\u00A0 : \u00A0  
                  ${
                    hashHistory.getCurrentLocation().state.data.data
                      .customersCount
                  }
                `}
            </label>
            <label className="rooms">
              <div onClick={showHotelRoomsHandler}>Rooms</div>
              {` \u00A0 \u00A0\u00A0 \u00A0 \u00A0 : \u00A0
                  ${hashHistory.getCurrentLocation().state.data.data.roomsCount}
                `}
            </label>
            <label className="employees">
              <div onClick={showHotelEmployeesHandler}>Employees</div>
              {` \u00A0\u00A0 : \u00A0  
                  ${
                    hashHistory.getCurrentLocation().state.data.data
                      .employeesCount
                  }
                `}
            </label>
            <label className="services">
              <div onClick={showHotelServicesHandler}>Services</div>
              {` \u00A0\u00A0 \u00A0 \u00A0 : \u00A0
                  ${
                    hashHistory.getCurrentLocation().state.data.data
                      .servicesCount
                  }
                `}
            </label>
            <label className="bookings">
              <div onClick={showHotelBookingsHandler}>Bookings</div>
              {` \u00A0\u00A0 \u00A0 : \u00A0
                  ${
                    hashHistory.getCurrentLocation().state.data.data
                      .bookingsCount
                  }
                `}
            </label>
          </div>
        </Card>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showingAlert: state.showAlertReducerFunction.showAlert,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HotelInformation);
