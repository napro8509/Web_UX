import React, { Component } from 'react'

export default class Column extends Component {
  render() {
    return (
      <div style={{display:'flex', flexDirection:'column',...this.props.style}}>
        {this.props.children}
      </div>
    )
  }
}
