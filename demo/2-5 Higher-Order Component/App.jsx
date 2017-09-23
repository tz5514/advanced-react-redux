import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.PureComponent {
  render() {
    console.log(this.props);
    return (
      <div>App</div>
    )
  }
}

const addName = (WrappedComponent) => {
  return class extends React.PureComponent {
    name = 'Zet';

    render() {
      return (
        <WrappedComponent {...this.props} name={this.name}/>
      )
    }
  }
}

const AddedNameApp = addName(App);

ReactDOM.render(<AddedNameApp num={0}/>, document.getElementById('root'));