import React, { Component } from 'react';
import Button from '../core/Button';
import Card from '../core/Card';
import Input from '../core/Input';
import { connect } from 'react-redux';
import { userLoginAction } from '../redux/actions/UserLoggedInAction';
import { validatePassword, validateUsername } from '../handler/LoginHandler';
import { showAlertAction } from '../redux/actions/ShowAlertAction';
import '../assets/styles/Login.css';
import { loginToHomeHandler } from '../handler/HotelGridHandler';

class Login extends Component {
  constructor(props) {
    super(props);

    this.inputUsernameComponent = React.createRef();
    this.inputPasswordComponent = React.createRef();
  }

  validateUsernameHandler() {
    validateUsername(this.inputUsernameComponent.current.input.current.value);
  }

  validatePasswordHandler() {
    validatePassword(this.inputPasswordComponent.current.input.current.value);
  }

  loginSubmitHandler(event) {
    event.preventDefault();

    this.props.login(this.props.isUsernameValid && this.props.isPasswordValid);
  }

  render() {
    return (
      <Card>
        {this.props.isLoggedIn && loginToHomeHandler()}

        <form onSubmit={this.loginSubmitHandler.bind(this)}>
          <h2>Login</h2>
          <Input
            ref={this.inputUsernameComponent}
            id="username"
            type="text"
            label="Username"
            onBlur={this.validateUsernameHandler.bind(this)}
            className="control"
          />
          <Input
            ref={this.inputPasswordComponent}
            id="password"
            type="password"
            label="Password"
            onBlur={this.validatePasswordHandler.bind(this)}
            className="control"
          />
          <Button className="button" label="LOGIN" />
          <p>Don't have an account? Login</p>
        </form>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.userLoginReducerFunction.isLoggedIn,
    isUsernameValid: state.usernameReducerFunction.isUsernameValid,
    isPasswordValid: state.passwordReducerFunction.isValid,
    showingAlert: state.showAlertReducerFunction.showAlert,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => dispatch(userLoginAction(data)),
    showAlert: () => dispatch(showAlertAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
