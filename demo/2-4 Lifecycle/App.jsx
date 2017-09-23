import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  state = {
    data: ''
  }

  componentWillMount() {
    console.log('App componentWillMount')
    this.setState({
      data: 'test'
    });
  }

  componentDidMount = async() => {
    console.log('App componentDidMount')
    const { data } = await this.fetchAPI();
    console.log('-----------')    
    this.setState({ data });

    setTimeout(() => {
      console.log('-----------')
      this.forceUpdate();
    }, 3000)
    
  }

  componentWillReceiveProps(nextProps) {
    console.log('App componentWillReceiveProps')
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('App componentWillUpdate');
  }
  
  fetchAPI = async() => {
    const response = await fetch('https://api.myjson.com/bins/jtkux');
    return await response.json();
  }

  render() {
    console.log('App render');
    return (
      <div>
        {this.state.data}
        <Button text={this.state.data}/>
      </div>
    )
  }
}

class Button extends React.Component {
  componentWillMount() {
    console.log('Button componentWillMount');
  }

  componentDidMount() {
    console.log('Button componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('Button componentWillReceiveProps')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Button shouldComponentUpdate');
    console.log('Button this.props.text != nextProps.text', this.props.text != nextProps.text);
    return this.props.text != nextProps.text;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Button componentWillUpdate');
  }

  componentDidUpdate(nextProps, nextState) {
    console.log('Button componentDidUpdate');
  }

  
  render() {
    console.log('Button render')
    return (
      <button>{this.props.text}</button>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));