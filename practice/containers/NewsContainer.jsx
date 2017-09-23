import React from 'react'
import { connect } from 'react-redux'
import NewsList from '../components/NewsList.jsx'
import { fetchNewsList, changeNewsListPage } from '../actions/NewsAction.js'

class NewsContainer extends React.PureComponent {
  componentDidMount() {
    this.props.dispatch(fetchNewsList(1));
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps)
    if (prevProps.page != this.props.page) {
      this.props.dispatch(fetchNewsList(this.props.page));
    }
  }

  changePage = (offset) => {
    if (this.props.page + offset > 0) {
      this.props.dispatch(changeNewsListPage(this.props.page + offset));
    }
  }
  
  render() {
    return (
      <NewsList newsList={this.props.data} page={this.props.page} changePage={this.changePage}/>
    )
  }
}

export default connect(state => state)(NewsContainer);

