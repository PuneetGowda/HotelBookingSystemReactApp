import React, { Component } from 'react';
import Input from '../../core/Input';
import '../../assets/styles/AddOrEditHotelForm.css';
import Navigation from '../Navigation';
import Button from '../../core/Button';
import Card from '../../core/Card';
import { cancelForm } from '../../handler/CancelFormHandler';
import { hashHistory } from 'react-router';
import { addHotelHandler } from '../../handler/AddHotelHandler';
import { updateHotelHandler } from '../../handler/EditHotelHandler';
import { hotelGridHandler } from '../../handler/HotelGridHandler';

class AddOrEditHotelForm extends Component {
  constructor() {
    super();
    this.inputHotelNameRef = React.createRef();
    this.inputHotelLocationRef = React.createRef();
    this.inputHotelContactRef = React.createRef();
    this.inputHotelEmailRef = React.createRef();
    this.inputHotelRatingRef = React.createRef();
    this.inputHotelPetFriendlyRef = React.createRef();
  }

  componentDidMount() {
    if (hashHistory.getCurrentLocation().state.data.hotelName !== undefined) {
      this.inputHotelNameRef.current.input.current.value =
        hashHistory.getCurrentLocation().state.data.hotelName;
      this.inputHotelLocationRef.current.input.current.value =
        hashHistory.getCurrentLocation().state.data.hotelLocation;
      this.inputHotelContactRef.current.input.current.value =
        hashHistory.getCurrentLocation().state.data.hotelContact;
      this.inputHotelEmailRef.current.input.current.value =
        hashHistory.getCurrentLocation().state.data.hotelEmail;
      this.inputHotelRatingRef.current.input.current.value =
        hashHistory.getCurrentLocation().state.data.hotelRating;
      this.inputHotelPetFriendlyRef.current.input.current.checked =
        hashHistory.getCurrentLocation().state.data.hotelPetFriendly;
    }
  }

  submitHandler(event) {
    event.preventDefault();

    const hotel = {
      hotel_name: this.inputHotelNameRef.current.input.current.value,
      hotel_location: this.inputHotelLocationRef.current.input.current.value,
      hotel_phone: this.inputHotelContactRef.current.input.current.value,
      hotel_email: this.inputHotelEmailRef.current.input.current.value,
      hotel_rating: this.inputHotelRatingRef.current.input.current.value,
      pet_friendly: this.inputHotelPetFriendlyRef.current.input.current.checked,
    };

    const methodName = `${hashHistory
      .getCurrentLocation()
      .state.data.buttonName.toLowerCase()}HotelHandler`;

    methodName === 'addHotelHandler'
      ? addHotelHandler(hotel)
      : updateHotelHandler(hotel);
  }

  render() {
    const buttonName = hashHistory.getCurrentLocation().state.data.buttonName;
    return (
      <div>
        <Navigation
          handler1={hotelGridHandler}
          title1="Hotels"
          title2={
            buttonName === 'ADD'
              ? 'New Hotel'
              : hashHistory.getCurrentLocation().state.data.hotelName
          }
          delete="false"
          edit="false"
        />
        <Card>
          <form
            className="add-edit-form"
            onSubmit={this.submitHandler.bind(this)}
          >
            <Input
              type="text"
              className="form-control name"
              label="Hotel Name"
              ref={this.inputHotelNameRef}
            />
            <Input
              type="text"
              className="form-control location"
              label="Location"
              ref={this.inputHotelLocationRef}
            />
            <Input
              type="text"
              className="form-control contact"
              label="Contact Number"
              ref={this.inputHotelContactRef}
            />
            <Input
              type="text"
              className="form-control email"
              label="Email ID"
              ref={this.inputHotelEmailRef}
            />
            <Input
              type="text"
              className="form-control rating"
              label="Rating"
              ref={this.inputHotelRatingRef}
            />
            <Input
              className="form-control pet"
              label="Pet Friendly"
              type="checkbox"
              ref={this.inputHotelPetFriendlyRef}
            />
            <div className="button-container">
              <Button
                className="form-button cancel"
                onClick={cancelForm}
                label="Cancel"
              />
              <Button className="form-button add-edit" label={buttonName} />
            </div>
          </form>
        </Card>
      </div>
    );
  }
}

export default AddOrEditHotelForm;
