import React, { Component, Fragment } from 'react';
import BackDrop from './Backdrop';
import Modal from './Modal';
import ReactDom from 'react-dom';
import { showAlertAction } from '../redux/actions/ShowAlertAction';
import { hideAlertAction } from '../redux/actions/HideAlertAction';
import { connect } from 'react-redux';

const portalElement = document.getElementById('overlays');

class Alert extends Component {
  render() {
    return (
      <Fragment>
        {ReactDom.createPortal(
          <BackDrop onHideAlert={this.props.hideAlert} />,
          portalElement
        )}
        {ReactDom.createPortal(
          <Modal
            onHideAlert={this.props.hideAlert}
            title={this.props.title}
            message={this.props.message}
            button={this.props.button}
          />,
          portalElement
        )}
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
  return {
    showAlert: () => dispatch(showAlertAction()),
    hideAlert: () => dispatch(hideAlertAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Alert);
