import React, {Component} from 'react'
import {Scatterplot, Linegraph} from './components'
import axios from 'axios'

/**
 * COMPONENT
 */
class homepage extends Component {
  constructor() {
    super()
    this.state = {
      scatterSales: [],
      lineSales: []
    }
  }
  async componentDidMount() {
    const {data} = await axios.get('/api/sales/calculatedforchart')
    this.setState({scatterSales: data})
    const response = await axios.get('/api/sales')
    this.setState({lineSales: response.data})
  }

  render() {
    return (
      <div>
        <h2 style={{textAlign: 'center'}}>Welcome, @miasmatheory!</h2>
        <div id="homepage">
          <Scatterplot sales={this.state.scatterSales} />
          <Linegraph sales={this.state.lineSales} />
        </div>
      </div>
    )
  }
}

export default homepage
