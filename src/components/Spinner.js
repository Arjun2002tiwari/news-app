import React, { Component } from 'react'
import l from './loading.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div>
          <img src={l} alt="loading"/>
      </div>
    )
  }
}
