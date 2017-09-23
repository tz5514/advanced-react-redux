import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import NumberItem from './NumberItem.jsx'

class App extends Component {
  state = {
    numbers: [1, 2, 3, 4]
  }

  handleAddNumber = () => {
    console.log('--------------------------------------');
    console.log(`add number: ${this.state.numbers.length + 1}`);
    this.setState({
      numbers: [...this.state.numbers, this.state.numbers.length + 1]
    });
  }

  handleAllNumbersIncrement = () => {
    console.log('--------------------------------------');
    console.log('all numbers increment');
    this.setState({
      numbers: this.state.numbers.map(number => number + 1)
    });
  }

  componentWillMount = () => {
    this.setState({
      numbers: [1,2, 100]
    })
  }
  

  componentWillUpdate(nextProps, nextState) {
    console.log('App will redraw', this.state.numbers, '=>', nextState.numbers);
  }
  
  
  render() {
    return (
      <div>
        {this.state.numbers.map((number, key) => (
          <NumberItem number={number} key={key}/>
        ))}
        <button onClick={this.handleAddNumber}>add number</button>
        <button onClick={this.handleAllNumbersIncrement}>all numbers increment</button>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));