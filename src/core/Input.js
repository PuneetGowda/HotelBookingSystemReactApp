import React, { Component } from 'react';
import '../assets/styles/Input.css';

class Input extends Component {
  constructor(props) {
    super(props);

    this.input = React.createRef();
  }

  componentDidMount() {
    console.log('inside input component ');
  }

  render() {
    return (
      <div className={this.props.className}>
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input
          onKeyUp={this.props.onKeyUp}
          ref={this.input}
          id={this.props.id}
          type={this.props.type}
          onBlur={this.props.onBlur}
          placeholder={this.props.placeholder}
          value={this.props.value}
          checked={this.props.checked}
        />
      </div>
    );
  }
}

export default Input;
