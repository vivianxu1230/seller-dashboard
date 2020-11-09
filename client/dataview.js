import React, {Component} from 'react'
import {InventoryTable, SalesTable, EditSalesTable} from './components'
import Sparkle from 'react-sparkle'

/**
 * COMPONENT
 */
class dataview extends Component {
  constructor() {
    super()
    this.state = {
      selectedPage: 'salesdata',
      sparklesActive: [false, null]
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleEnter = this.handleEnter.bind(this)
    this.handleLeave = this.handleLeave.bind(this)
  }

  handleClick(e) {
    this.setState({selectedPage: e.target.value})
  }

  handleEnter(e) {
    this.setState({sparklesActive: [true, e.target.value]})
  }

  handleLeave() {
    this.setState({sparklesActive: [false, null]})
  }

  render() {
    const buttons = [
      {id: 1, text: 'Edit Inventory', value: 'inventory'},
      {id: 2, text: 'View sales', value: 'salesdata'},
      {id: 3, text: 'Edit sales', value: 'editsales'}
    ]
    let opt = {}
    opt.onMouseEnter = this.handleEnter
    opt.onMouseLeave = this.handleLeave
    opt.onClick = this.handleClick
    opt.style = {position: 'relative'}
    opt.className = 'data-buttons'
    return (
      <div id="dataview">
        <div className="data-buttons-container">
          {buttons.map(button => {
            return (
              <button
                value={button.value}
                key={button.id}
                type="button"
                {...opt}
              >
                {' '}
                {this.state.sparklesActive[0] &&
                  this.state.sparklesActive[1] === button.value && (
                    <Sparkle fadeOutSpeed={20} count={20} />
                  )}{' '}
                {button.text}
              </button>
            )
          })}
        </div>
        {this.state.selectedPage === 'inventory' && <InventoryTable />}
        {this.state.selectedPage === 'salesdata' && <SalesTable />}
        {this.state.selectedPage === 'editsales' && <EditSalesTable />}
      </div>
    )
  }
}

export default dataview
