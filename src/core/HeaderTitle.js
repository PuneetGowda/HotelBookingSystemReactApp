import React, { Component } from 'react';

class HeaderTitle extends Component {
  render() {
    return (
      <div className="nav-location" onClick={this.props.onClick}>
        {this.props.title}
      </div>
    );
  }
}

export default HeaderTitle;
