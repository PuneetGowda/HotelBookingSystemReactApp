import React, { Component } from 'react';
import { logoutConfirmation } from '../handler/LogoutHandler';
import logoutIcon from '../assets/icon/logout-icon.png';

class Logout extends Component {
  constructor() {
    super();

    console.log('inside logout constructor');
  }

  render() {
    return (
      <div>
        <img
          className="logout-button"
          onClick={logoutConfirmation}
          src={logoutIcon}
          alt="logout button"
        />
      </div>
    );
  }
}

export default Logout;
