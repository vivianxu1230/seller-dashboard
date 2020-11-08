import React, {Component} from 'react'
import {InventoryTable} from './components'
import {SalesTable} from './components'
/**
 * COMPONENT
 */
class dataview extends Component {
  constructor() {
    super()
  }
  async componentDidMount() {}

  render() {
    return (
      <div id="dataview">
        {/* <InventoryTable /> */}
        <SalesTable />
      </div>
    )
  }
}

export default dataview
