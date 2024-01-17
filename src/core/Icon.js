import React, { Component } from 'react';
import '../assets/styles/Icon.css';

class Icon extends Component {
  constructor() {
    super();

    console.log('inside icon constructor');
  }

  componentDidMount() {
    console.log('inside icon component');
  }

  render() {
    return (
      <div className="test">
        <div
          onClick={this.props.onClick}
          className={this.props.className}
          alt={this.props.altMessage}
        ></div>
      </div>
    );
  }
}

export default Icon;
