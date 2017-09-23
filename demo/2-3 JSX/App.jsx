import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import NumberItem from './NumberItem.jsx'

class App extends Component {
  handleClick() {
    alert('clicked');
  }

  render() {
    const reactElement = <button>new button</button>;
    const string = 'a string';
    const numbers = [1, 2, 3];
    const styles = {
      padding: 15,
      backgroundColor: 'yellow',
      fontSize: 20
    }

    console.log(reactElement);
    
    return (
      <div>
        {()=>123}
        <div className="basic">
          <h2 className="title">Title</h2>
          <NumberItem number={100}/>
          <br/>
        </div>
        
        <div className="react-element">
          {reactElement}
        </div>

        <div className="string">
          {string + 'qqq'}
        </div>

        <div className="number">
          {100 + 50}
        </div>

        <div className="array">
          {numbers}
        </div>

        <div className="boolean">
          {true}
          {false}
        </div>
        
        <div className="null">
          {null}
        </div>

        <div className="undefiend">
          {undefined}
        </div>

        <div className="condition">
          {(100 > 99) && '成立'}
          {(100 > 100) ? '成立' : '不成立'}
        </div>
        
        <input type="number" max={100}/>
        <button onClick={this.handleClick} style={styles}>styled button</button>

        <div className="map">
          {numbers.map((number, key) => (
            <button key={key}>{number}</button>
          ))}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));