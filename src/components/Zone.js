import React, { Component } from 'react'

class Zone extends Component {
  render(){
    const { zone } = this.props

    return (
      <div>
        <h2><a href="#">{zone.name}</a></h2>
        <span>{zone.zipCode}</span><br/>
        <span>{zone.numComments} comments</span>
      </div>
    )
  }
}

export default Zone
