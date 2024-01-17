import React, { Component } from 'react';

class Label extends Component {
  componentDidMount() {
    console.log('inside input component ');
  }

  render() {
    return (
      <label className={this.props.className} htmlFor={this.props.id}>
        {this.props.label}
      </label>
    );
  }
}

export default Label;
