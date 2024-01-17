import React, { Component } from 'react';
import Login from './layout/Login';
import './App.css';
import HotelGrid from './layout/hotel/HotelGrid';
import HotelCustomerGrid from './layout/hotel/HotelCustomerGrid';
import Alert from './core/Alert';
import Home from './layout/Home';
import AddOrEditHotelForm from './layout/form/AddOrEditHotelForm';
import HotelInformation from './layout/hotel/HotelInformation';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { hashHistory } from 'react-router';
import HotelBookingGrid from './layout/hotel/HotelBookingGrid';
import HotelServiceGrid from './layout/hotel/HotelServiceGrid';
import HotelEmployeeGrid from './layout/hotel/HotelEmployeeGrid';
import HotelRoomGrid from './layout/hotel/HotelRoomGrid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <HashRouter history={hashHistory}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/hotelgrid" element={<HotelGrid />} />
          <Route path="/hotelcustomers" element={<HotelCustomerGrid />} />
          <Route path="/hotelbookings" element={<HotelBookingGrid />} />
          <Route path="/hotelservices" element={<HotelServiceGrid />} />
          <Route path="/hotelemployees" element={<HotelEmployeeGrid />} />
          <Route path="/hotelrooms" element={<HotelRoomGrid />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Login />} />
          <Route path="/alert" element={<Alert />} />
          <Route path="/home" element={<Home />} />
          <Route path="/addhotel" element={<AddOrEditHotelForm />} />
          <Route path="/edithotel" element={<AddOrEditHotelForm />} />
          <Route path="/hotel" element={<HotelInformation />} />
        </Routes>
      </HashRouter>
    );
  }
}

export default App;
