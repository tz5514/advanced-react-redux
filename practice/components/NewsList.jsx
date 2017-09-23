import React from 'react'
import NewsListItem from './NewsListItem.jsx'
import NewsListPagination from './NewsListPagination.jsx'
export default class NewsList extends React.PureComponent {
  render() {
    return (
      <div>
        <NewsListPagination page={this.props.page} changePage={this.props.changePage}/>
        {this.props.newsList.map(item => (
          <NewsListItem {...item} key={item.id}/>
        ))}
      </div>
    )
  }
}
