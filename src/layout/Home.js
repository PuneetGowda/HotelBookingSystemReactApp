import React, { Component } from 'react';
import { hotelGridHandler } from '../handler/HotelGridHandler';
import HotelGrid from './hotel/HotelGrid';
import Navigation from './Navigation';

class Home extends Component {
  componentDidMount() {
    console.log('inside home component mount');
  }

  render() {
    return (
      <div className="home">
        <Navigation
          handler1={hotelGridHandler}
          title1="Hotels"
          delete="false"
          edit="false"
        />
        <HotelGrid />
      </div>
    );
  }
}

export default Home;
