import React, { Component } from 'react';
import '../assets/styles/Backdrop.css';

class BackDrop extends Component {
  render() {
    return <div onClick={this.props.onHideAlert} className="backdrop" />;
  }
}

export default BackDrop;
