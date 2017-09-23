import React, { Component } from 'react';

class NumberItem extends Component {
  componentWillUpdate(nextProps, nextState) {
    console.log('NumberItem will redraw', this.props.number, '=>', nextProps.number);
  }
  
  componentWillMount() {
    console.log('NumberItem will mount first time', this.props.number);
  }

  render() {
    return (
      <div>number: {this.props.number}</div>
    );
  }
}

export default NumberItem;