import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Home extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    )
  }
}
