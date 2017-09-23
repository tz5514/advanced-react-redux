import React from 'react'
import NewsListItem from './NewsListItem.jsx'
import NewsListPagination from './NewsListPagination.jsx'

export default class NewsList extends React.PureComponent {
  state = {
    page: 1,
    newsList: []
  }
  
  fetchNewsList = async() => {
    const response = await fetch(`/api/news/list/${this.state.page}`);
    this.setState({ 
      newsList: await response.json()
    });
  }

  changePage = (offset) => {
    if (this.state.page + offset > 0) {
      this.setState({
        page: this.state.page + offset
      });
    }
  }

  render() {
    return (
      <div>
        <NewsListPagination page={this.state.page} changePage={this.changePage}/>
        {this.state.newsList.map(item => (
          <NewsListItem {...item} key={item.id}/>
        ))}
      </div>
    )
  }
}
