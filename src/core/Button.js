import React, { Component } from 'react';
import '../assets/styles/Button.css';

class Button extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onClick} className={this.props.className}>
          {this.props.label}
        </button>
      </div>
    );
  }
}

export default Button;
