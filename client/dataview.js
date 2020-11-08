import React, {Component} from 'react'
import {InventoryTable} from './components'
import axios from 'axios'

/**
 * COMPONENT
 */
class dataview extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }
  async componentDidMount() {}

  render() {
    return (
      <div id="dataview">
        <InventoryTable data={this.state.data} />
      </div>
    )
  }
}

export default dataview
