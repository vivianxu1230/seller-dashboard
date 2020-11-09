import React, {Component} from 'react'
import {InventoryTable, SalesTable, EditSalesTable} from './components'

/**
 * COMPONENT
 */
class dataview extends Component {
  constructor() {
    super()
    this.state = {
      selectedPage: 'salesdata'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.setState({selectedPage: e.target.value})
  }

  render() {
    return (
      <div id="dataview">
        <div className="data-buttons-container">
          <button
            className="data-buttons"
            onClick={this.handleClick}
            value="inventory"
            type="button"
          >
            Edit inventory
          </button>
          <button
            className="data-buttons"
            onClick={this.handleClick}
            value="salesdata"
            type="button"
          >
            View sales
          </button>
          <button
            className="data-buttons"
            onClick={this.handleClick}
            value="editsales"
            type="button"
          >
            Edit sales
          </button>
        </div>
        {this.state.selectedPage === 'inventory' && <InventoryTable />}
        {this.state.selectedPage === 'salesdata' && <SalesTable />}
        {this.state.selectedPage === 'editsales' && <EditSalesTable />}
      </div>
    )
  }
}

export default dataview
