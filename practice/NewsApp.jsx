import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'

import NewsContainer from './containers/NewsContainer.jsx'
import NewsReducer from './reducers/NewsReducer.js'

const store = createStore(
  NewsReducer,
  window.devToolsExtension && window.devToolsExtension(),
  applyMiddleware(reduxThunk),
);

class NewsApp extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <NewsContainer/>
      </Provider>
    )
  }
  
}

ReactDOM.render(<NewsApp/>, document.getElementById('root'));