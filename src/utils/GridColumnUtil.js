export const hotelGridColumns = () => {
  // Create columns having header and details of data such as type for react data grid
  const columns = [
    {
      name: 'id',
      header: 'Id',
      visible: false,
    },
    {
      name: 'name',
      header: 'Name',
      defaultFlex: 1,
    },
    {
      name: 'location',
      header: 'Location',
      defaultFlex: 1,
    },
    {
      name: 'phone',
      header: 'Phone',
      defaultFlex: 1,
    },
    {
      name: 'email',
      header: 'Email ID',
      defaultFlex: 1,
    },
    {
      name: 'rating',
      header: 'Rating',
      type: 'number',
      defaultFlex: 1,
    },
    {
      name: 'petfriendly',
      header: 'Pet Friendly',
      defaultFlex: 1,
    },
    {
      name: 'actions',
      header: 'Actions',
      defaultFlex: 1,
    },
  ];

  return columns;
};

export const hotelCustomerGridColumns = () => {
  const columns = [
    { name: 'id', type: 'number', header: 'Id', visible: false },
    {
      name: 'name',
      header: 'Name',
      defaultFlex: 1,
    },
    {
      name: 'phone',
      header: 'Phone',
      defaultFlex: 1,
    },
    {
      name: 'email',
      header: 'Email',
      type: 'number',
      defaultFlex: 1,
    },
    {
      name: 'address',
      header: 'Address',
      defaultFlex: 1,
    },
    {
      name: 'preferences',
      header: 'Preferences',
      defaultFlex: 1,
    },
    {
      name: 'specialneeds',
      header: 'Special needs',
      defaultFlex: 1,
    },
  ];

  return columns;
};

export const hotelServiceGridColumns = () => {
  const columns = [
    { name: 'id', type: 'number', header: 'Id', visible: false },
    {
      name: 'serviceNo',
      header: 'Service No.',
      defaultFlex: 1,
      visible: false,
    },
    {
      name: 'serviceName',
      header: 'Service Name',
      defaultFlex: 1,
    },
    {
      name: 'price',
      header: 'Price(Rs.)',
      type: 'number',
      defaultFlex: 1,
    },
  ];

  return columns;
};

export const hotelRoomsGridColumns = () => {
  const columns = [
    { name: 'id', type: 'number', header: 'Id', visible: false },
    {
      name: 'roomType',
      header: 'Room Type',
      defaultFlex: 1,
    },
    {
      name: 'price',
      header: 'Price (Rs.)',
      defaultFlex: 1,
    },
    {
      name: 'roomNo',
      header: 'Room No.',
      defaultFlex: 1,
    },
    {
      name: 'floorNo',
      header: 'Floor No.',
      defaultFlex: 1,
    },
    {
      name: 'areaOfRoom',
      header: 'Area of room',
      defaultFlex: 1,
    },
    {
      name: 'occupancyDetails',
      header: 'Occupancy details',
      defaultFlex: 1,
    },
  ];

  return columns;
};

export const hotelEmployeesGridColumns = () => {
  const columns = [
    { name: 'id', type: 'number', header: 'Id', visible: false },
    {
      name: 'name',
      header: 'Name',
      defaultFlex: 1,
    },
    {
      name: 'salary',
      header: 'Salary (Rs.)',
      defaultFlex: 1,
    },
    {
      name: 'phone',
      header: 'Phone',
      defaultFlex: 1,
    },
    {
      name: 'email',
      header: 'Email',
      defaultFlex: 1,
    },
    {
      name: 'address',
      header: 'Address',
      defaultFlex: 1,
    },
    {
      name: 'joiningDate',
      header: 'Joining Date',
      defaultFlex: 1,
    },
  ];

  return columns;
};

export const hotelBookingsGridColumns = () => {
  const columns = [
    { name: 'id', type: 'number', header: 'Id', visible: false },
    {
      name: 'customerName',
      header: 'Customer Name',
      defaultFlex: 1,
    },
    {
      name: 'bookingDateTime',
      header: 'Booking Date & Time',
      defaultFlex: 1,
    },
    {
      name: 'amount',
      header: 'Amount(Rs)',
      type: 'number',
      defaultFlex: 1,
    },
    {
      name: 'checkInDateTime',
      header: 'Check-in Date & time',
      defaultFlex: 1,
    },
    {
      name: 'checkOutDateTime',
      header: 'Check-out Date & time',
      defaultFlex: 1,
    },
    {
      name: 'status',
      header: 'Status',
      defaultFlex: 1,
    },
    {
      name: 'roomno',
      header: 'Room No',
      defaultFlex: 1,
    },
    {
      name: 'employee',
      header: 'Employee',
      defaultFlex: 1,
    },
    {
      name: 'adults',
      header: 'Adults',
      defaultFlex: 1,
    },
    {
      name: 'children',
      header: 'Children',
      defaultFlex: 1,
    },
  ];

  return columns;
};
