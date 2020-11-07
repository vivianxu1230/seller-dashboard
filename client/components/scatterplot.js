import React, {useRef, useEffect} from 'react'
import * as d3 from 'd3'

function scatterplot(props) {
  const data = props.sales
  const marginObj = {top: 40, right: 20, bottom: 35, left: 40}
  const svgRef = useRef()
  useEffect(
    () => {
      const svg = d3.select(svgRef.current)

      const profitMaxMin = d3.extent(data.map(elem => elem.profit))
      const daysMaxMin = d3.extent(data.map(elem => elem.days))
      const likesMaxMin = d3.extent(data.map(elem => elem.likes))
      const marginMaxMin = d3.extent(data.map(elem => elem.margin))
      const xScale = d3
        .scaleLinear()
        .range([marginObj.left, 500 - marginObj.right])
        .domain([daysMaxMin[0], daysMaxMin[1] + 10])
      const yScale = d3
        .scaleLinear()
        .range([500 - marginObj.bottom, marginObj.top])
        .domain([profitMaxMin[0], profitMaxMin[1] + 50])
      const rScale = d3
        .scaleSqrt()
        .range([8, 20])
        .domain(likesMaxMin)
      const colorScale = d3.scaleOrdinal(d3.schemePastel2).domain(marginMaxMin)

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
            .text('# of days until sold →')
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

      var legendKeys = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]

      const legendc = d3
        .select('.legendc')
        .attr('transform', 'translate(0, 150)')

      d3
        .select('.legendheader')
        .attr('transform', 'translate(383, -20)')
        .style('font-size', '11')
        .style('text-decoration', 'underline')

      var lineLegend = legendc
        .selectAll('.lineLegend')
        .data(legendKeys)
        .enter()
        .append('g')
        .attr('class', 'lineLegend')
        .attr('transform', function(d, i) {
          return 'translate(' + 400 + ',' + i * 20 + ')'
        })

      lineLegend
        .append('text')
        .text(function(d) {
          return d
        })
        .style('font-size', '11')
        .attr('transform', 'translate(15,9)') //align texts with boxes

      lineLegend
        .append('rect')
        .attr('fill', function(d, i) {
          return colorScale(d)
        })
        .attr('width', 10)
        .attr('height', 10)

      var tooltip = d3
        .select('#scatter')
        .append('text')
        .attr('class', 'tooltip')
        .style('visibility', 'hidden')
        .style('background-color', 'black')
        .style('border-radius', '5px')
        .style('padding', '10px')
        .style('text-shadow', '3px 3px 8px #b19cd9')

      svg
        .selectAll('circle')
        .data(data)
        .join('circle')
        .attr('r', d => rScale(d.likes))
        .attr('cx', d => xScale(+d.days))
        .attr('cy', d => yScale(+d.profit))
        .attr('fill', d => colorScale(d.margin))
        .attr('opacity', 0.75)
        .on('mouseover', function(event, value) {
          tooltip
            .attr('x', xScale(value.days))
            .attr('y', yScale(value.profit) - 30)
            .style('font-size', '10px')
            .style('visibility', 'visible')
            .text(value.name)
        })
        .on('mouseout', function() {
          return tooltip.style('visibility', 'hidden')
        })
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
      <svg id="scatter" width="500" height="500" ref={svgRef}>
        <g className="legendc">
          <text className="legendheader">Profit margin</text>
        </g>
        <text fontSize="14px" x="53%" y="4%" textAnchor="middle">
          Sold items mapped by days/profit
        </text>
        <g className="x-axis" /> <g className="y-axis" />
      </svg>
    </React.Fragment>
  )
}

export default scatterplot
