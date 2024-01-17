import React, { Component } from 'react';
import '../assets/styles/Card.css';

class Card extends Component {
  constructor() {
    super();

    console.log('inside card constructor');
  }

  render() {
    return <div className="card">{this.props.children}</div>;
  }
}

export default Card;
