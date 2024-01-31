import Icon from '../core/Icon';
import { deleteAlertMessage } from '../handler/DeleteHotelHandler';
import { editHotel } from '../handler/EditHotelHandler';
import {
  showHotel,
  showHotelAndSaveActiveIndex,
} from '../handler/ShowHotelHandler';
import React from 'react';
import axios from 'axios';

// const axiosInterceptor = axios.create();

// axiosInterceptor.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     console.log('ERROR IS ', error);
//     return Promise.reject(error);
//   }
// );

// This function sends post request to create a new hotel
export async function createHotel(hotel) {
  const response = await axios.post(
    'http://localhost:8080/hotelbookingsystemjpa/api/hotels',
    hotel, {auth: {
      username: 'admin',
      password: 'admin'
    }}
  );

  console.log('inside add hotel', response);
}

// This function sends put request to update a hotel
export async function updateHotel(hotelId, hotel) {
  const response = await axios.put(
    `http://localhost:8080/hotelbookingsystemjpa/api/hotels/${hotelId}`,
    hotel, {auth: {
      username: 'admin',
      password: 'admin'
    }}
  );

  console.log('inside update hotel', response);
}

// This function deletes a hotel
export async function deleteAHotel(hotelId) {
  const response = await axios.delete(
    `http://localhost:8080/hotelbookingsystemjpa/api/hotels/${hotelId}`, {auth: {
      username: 'admin',
      password: 'admin'
    }}
  );

  console.log('inside delete hotel function', response);
}

// This function fetches list of hotels
export async function hotelList(hotelName) {
  // Create empty array to store list of hotels along with action feature have icon component
  const data = [];
  try {
    const hotel_name = hotelName !== undefined ? hotelName : '';

    // Sending axios get request to api server for getting list of hotels
    const response = await axios.get(
      `http://localhost:8080/hotelbookingsystemjpa/api/hotels?hotel_name=${hotel_name}`, {auth: {
        username: 'admin',
        password: 'admin'
      }}
    );

    // Getting the array of hotels fron data attribute of response
    const responseData = await response.data;

    console.log('inside hotel list ', responseData);

    // Loop through all the hotels, create object with hotel values along with icon component as action and push it to data array
    responseData.forEach((hotel) => {
      data.push({
        id: hotel.hotel_id,
        name: hotel.hotel_name,
        location: hotel.hotel_location,
        phone: hotel.hotel_phone,
        email: hotel.hotel_email,
        rating: hotel.hotel_rating,
        petfriendly: hotel.pet_friendly === true ? 'Yes' : 'No',
        actions: (
          <div className="icon-container">
            <Icon
              className="icon view-icon"
              altMessage="View icon"
              onClick={showHotel}
            />
            <Icon
              className="icon edit-icon"
              altMessage="Edit icon"
              onClick={editHotel}
            />
            <Icon
              className="icon delete-icon"
              altMessage="Delete icon"
              onClick={deleteAlertMessage}
            />
          </div>
        ),
      });
    });

    console.log('hotels grid ARRAY ', data);
  } catch (error) {
    console.log('inside http util ', error);

    if (error.response.status === 404) {
      throw new Error('Page Not Found!');
    } else {
      throw new Error('something went wrong!');
    }
  }

  // Return the object having type, data, and columns for sending as argument in redux action
  return data;
}

export async function hotelInformation(hotelId) {
  const response = await axios.get(
    `http://localhost:8080/hotelbookingsystemjpa/api/hotels/${hotelId}`, {auth: {
      username: 'admin',
      password: 'admin'
    }}
  );

  console.log('Inside hotel information, Response is ', response);

  const responseData = await response.data;

  const data = {
    id: responseData.hotel_id,
    name: responseData.hotel_name,
    location: responseData.hotel_location,
    phone: responseData.hotel_phone,
    email: responseData.hotel_email,
    rating: responseData.hotel_rating,
    petfriendly: responseData.pet_friendly === true ? 'Yes' : null,
    customersCount: responseData.hotel_customer.length,
    roomsCount: responseData.hotel_room.length,
    employeesCount: responseData.hotel_employee.length,
    servicesCount: responseData.hotel_service.length,
    bookingsCount: responseData.hotel_booking.length,
  };

  return { type: 'hotel-information', data };
}

export async function hotelCustomersList(hotelId) {
  const response = await axios.get(
    `http://localhost:8080/hotelbookingsystemjpa/api/hotels/${hotelId}/customers`, {auth: {
      username: 'admin',
      password: 'admin'
    }}
  );

  const responseData = await response.data;

  console.log('inside hotel customers list ', responseData);

  const data = [];

  responseData.forEach((customer) => {
    data.push({
      id: customer.customer_id,
      name: customer.customer_name,
      phone: customer.customer_phone,
      email: customer.customer_email,
      address: customer.customer_address,
      preferences: customer.preferences,
      specialneeds: customer.specialneeds,
    });
  });

  return data;
}

export async function hotelServicesList(hotelId) {
  const response = await axios(
    `http://localhost:8080/hotelbookingsystemjpa/api/hotels/${hotelId}/services`, {auth: {
      username: 'admin',
      password: 'admin'
    }}
  );

  console.log('inside hotel services function ', response);

  const responseData = await response.data;

  let data = [];

  responseData.forEach((service) => {
    data.push({
      id: service.service_id,
      serviceNo: service.service_id,
      serviceName: service.service_name,
      price: service.service_price,
    });
  });

  return data;
}

export async function hotelRoomsList(hotelId) {
  const response = await axios(
    `http://localhost:8080/hotelbookingsystemjpa/api/hotels/${hotelId}/rooms`, {auth: {
      username: 'admin',
      password: 'admin'
    }}
  );

  console.log('inside hotel room function', response);

  const responseData = response.data;

  let data = [];

  responseData.forEach((room) => {
    data.push({
      id: room.room_id,
      roomType: room.room_type,
      price: room.room_price,
      roomNo: room.room_no,
      floorNo: room.floor_no,
      areaOfRoom: room.area_of_room,
      occupancyDetails: room.occupancy_details,
    });
  });

  return data;
}

export async function hotelEmployeesList(hotelId) {
  const response = await axios(
    `http://localhost:8080/hotelbookingsystemjpa/api/hotels/${hotelId}/employees`, {auth: {
      username: 'admin',
      password: 'admin'
    }}
  );

  console.log('Inside hotel employee function ', response);

  const responseData = await response.data;

  let data = [];

  responseData.forEach((employee) => {
    data.push({
      id: employee.emp_id,
      name: employee.emp_name,
      salary: employee.emp_salary,
      phone: employee.emp_phone,
      address: employee.emp_address,
      joiningDate: employee.joining_date,
    });
  });

  return data;
}

export async function hotelBookingsList(hotelId) {
  const response = await axios.get(
    `http://localhost:8080/hotelbookingsystemjpa/api/hotels/${hotelId}/bookings`, {auth: {
      username: 'admin',
      password: 'admin'
    }}
  );

  console.log('inside hotel bookings list function', response);

  const responseData = await response.data;

  let data = [];

  responseData.forEach((booking) => {
    data.push({
      id: booking.booking_id,
      customerName: booking.customer_name,
      bookingDateTime: booking.booking_dateTime,
      amount: booking.booking_amt,
      checkInDateTime: booking.check_in_DateTime,
      checkOutDateTime: booking.check_out_DateTime,
      status: booking.booking_status,
      roomno: booking.room_no,
      employee: booking.emp_name,
      adults: booking.no_of_adults,
      children: booking.no_of_child,
    });
  });

  return data;
}
