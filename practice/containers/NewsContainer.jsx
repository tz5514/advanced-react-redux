import React from 'react'
import { connet } from 'react-redux'
import NewsList from '../components/NewsList.jsx'

export default class NewsContainer extends React.PureComponent {
  render() {
    return (
      <NewsList/>
    )
  }
}
