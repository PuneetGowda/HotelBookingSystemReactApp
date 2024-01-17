import React, { Component } from 'react';
import '../assets/styles/Navigation.css';
import HeaderTitle from '../core/HeaderTitle';
import Icon from '../core/Icon';
import { deleteAlertMessage } from '../handler/DeleteHotelHandler';
import { editHotel } from '../handler/EditHotelHandler';
import Logout from './Logout';

class Navigation extends Component {
  componentDidMount() {
    console.log('inside navigation component', this.props.handler1);
  }

  render() {
    return (
      <nav className="navigation">
        <HeaderTitle title={this.props.title1} onClick={this.props.handler1} />
        {this.props.title2 && <div className="arrow" />}
        <HeaderTitle title={this.props.title2} onClick={this.props.handler2} />
        {this.props.title3 && <div className="arrow" />}
        <HeaderTitle title={this.props.title3} onClick={this.props.handler3} />
        <div className="nav-logout">
          {this.props.showLogout !== 'false' && <Logout />}
        </div>
        {this.props.edit !== 'false' && (
          <Icon className="nav-icon nav-edit-icon" onClick={editHotel} />
        )}
        {this.props.delete !== 'false' && (
          <Icon
            className="nav-icon nav-delete-icon"
            onClick={deleteAlertMessage}
          />
        )}
      </nav>
    );
  }
}

export default Navigation;
