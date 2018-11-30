import React, { Component } from 'react'

export default class Row extends Component {
  render() {
    return (
      <div style={{display:'flex', flexDirection:'row',...this.props.style}}>
        {this.props.children}
      </div>
    )
  }
}
