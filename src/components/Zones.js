import React, { Component } from 'react'
import Zone from './Zone'

class Zones extends Component {
  constructor(){
    super()
    this.state = {
      zones: [
        {name:'Zone 1', zipCode:'10012', numComments:10},
        {name:'Zone 2', zipCode:'10013', numComments:20},
        {name:'Zone 3', zipCode:'10014', numComments:30},
        {name:'Zone 5', zipCode:'10015', numComments:40},
      ]
    }
  }

  render() {
    const { zones } = this.state

    return (
      <div>
        <ol>
          {zones.map((zone, i) =>
            <li key={i} ><Zone zone={zone} /></li>
          )}
        </ol>
      </div>
    )
  }
}

export default Zones
