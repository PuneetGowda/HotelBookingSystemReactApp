import React, { Component } from 'react';
import '../assets/styles/Modal.css';
import { connect } from 'react-redux';
import { deleteHotel } from '../handler/DeleteHotelHandler';
import { logout } from '../handler/LogoutHandler';
import store from '../store/store';

class Modal extends Component {
  componentDidMount() {
    console.log('inside modal mount ');
  }

  render() {
    const buttonHandler =
      this.props.handlerMethod === 'logout' ? logout : deleteHotel;
    return (
      <div className="modal">
        <div>
          <h1>{this.props.title}</h1>
          <p>{this.props.message}</p>
        </div>
        {this.props.showButton === true && (
          <div>
            <button
              onClick={this.props.onHideAlert}
              className="buttons n-button"
            >
              No
            </button>
            <button onClick={buttonHandler} className="buttons y-button">
              YES
            </button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.showAlertReducerFunction.title,
    message: state.showAlertReducerFunction.message,
    showButton: state.showAlertReducerFunction.showButton,
    handlerMethod: state.showAlertReducerFunction.handlerMethod,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
