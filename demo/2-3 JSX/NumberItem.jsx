import React, { Component } from 'react';

class NumberItem extends Component {
  render() {
    return (
      <div>number: {this.props.number}</div>
    );
  }
}

export default NumberItem;