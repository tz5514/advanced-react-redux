import React from 'react'

export default class NewsListItem extends React.PureComponent {
  render() {
    return (
      <div>
        <img src={this.props.thumbnail}/>
        <h2>{this.props.title}</h2>
        <div>{this.props.date}</div>
        <p>{this.props.description}</p>
      </div>
    )
  }
}
