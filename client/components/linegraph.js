import React, {useRef, useEffect} from 'react'
import * as d3 from 'd3'

function linegraph(props) {
  const undata = props.sales
  const data = undata.map(item => ({
    name: item.name,
    profit: item.soldPrice * 0.871 - 0.3 - item.shippingCost - item.cost,
    date: d3.timeParse('%Y-%m-%d')(item.dateSold)
  }))

  let cumProfit = 0
  const cumProfitData = data.map(item => ({
    name: item.name,
    profit: (cumProfit += item.profit),
    date: item.date
  }))

  const marginObj = {top: 40, right: 20, bottom: 35, left: 40}
  const svgRef = useRef()
  useEffect(
    () => {
      const svg = d3.select(svgRef.current)
      const profitMaxMin = d3.extent(cumProfitData.map(elem => elem.profit))

      const xScale = d3
        .scaleTime()
        .range([marginObj.left, 500 - marginObj.right])
        .domain(
          d3.extent(data, function(d) {
            return d.date
          })
        )
      const yScale = d3
        .scaleLinear()
        .range([500 - marginObj.bottom, marginObj.top])
        .domain([profitMaxMin[0], profitMaxMin[1] + 50])

      const xAxis = d3.axisBottom(xScale)
      svg
        .select('.x-axis')
        .attr('transform', `translate(0,${500 - marginObj.bottom})`)
        .call(xAxis)
        .call(g =>
          g
            .append('text')
            .attr('x', 495)
            .attr('y', marginObj.bottom - 4)
            .attr('fill', 'currentColor')
            .attr('text-anchor', 'end')
            .text('Date →')
        )

      const yAxis = d3.axisRight(yScale)
      svg
        .select('.y-axis')
        .attr('transform', `translate(${marginObj.left},0)`)
        .call(yAxis)
        .call(g =>
          g
            .append('text')
            .attr('x', -36)
            .attr('y', 14)
            .attr('fill', 'currentColor')
            .attr('text-anchor', 'start')
            .text('↑ Profit ($)')
        )

      svg
        .append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', '#879BAF')
        .attr('opacity', 0.5)
        .attr('stroke-width', 1.5)
        .attr(
          'd',
          d3
            .line()
            .curve(d3.curveCardinal)
            .x(function(d) {
              return xScale(d.date)
            })
            .y(function(d) {
              return yScale(d.profit)
            })
        )

      svg
        .append('path')
        .datum(cumProfitData)
        .attr('fill', 'none')
        .attr('stroke', 'black')
        .attr('opacity', 0.5)
        .attr('stroke-width', 1.5)
        .attr(
          'd',
          d3
            .line()
            .curve(d3.curveCardinal)
            .x(function(d) {
              return xScale(d.date)
            })
            .y(function(d) {
              return yScale(d.profit)
            })
        )

      d3
        .select('.legendcline')
        .attr('transform', 'translate(0, 100)')
        .style('font-size', '11')

      d3.selectAll('.key').attr('transform', function(d, i) {
        return 'translate(' + 334 + ',' + i * 20 + ')'
      })

      d3
        .select('.square')
        .attr('fill', 'black')
        .attr('width', 10)
        .attr('height', 10)
        .attr('transform', 'translate(319, -8)')
        .attr('opacity', 0.5)

      d3
        .select('.osquare')
        .attr('fill', '  #879BAF')
        .attr('width', 10)
        .attr('height', 10)
        .attr('transform', 'translate(319, 12)')
        .attr('opacity', 0.5)
    },
    [
      marginObj,
      marginObj.bottom,
      marginObj.left,
      marginObj.right,
      marginObj.top,
      data
    ]
  )
  return (
    <React.Fragment>
      <svg id="linegraph" width="500" height="500" ref={svgRef}>
        <g className="legendcline">
          {' '}
          <rect className="square" />
          <rect className="osquare" />
          <text className="legendheaderline" />
          <text className="key">Cumulative profit</text>
          <text className="key">Weekly profit</text>
        </g>
        <text fontSize="14px" x="54%" y="4%" textAnchor="middle">
          This month at a glance
        </text>{' '}
        <g className="x-axis" /> <g className="y-axis" />
      </svg>
    </React.Fragment>
  )
}

export default linegraph
