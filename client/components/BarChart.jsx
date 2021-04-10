import React from 'react'
import { connect } from 'react-redux'
import { arc, pie, scaleBand, scaleLinear, max, format } from 'd3'
import { AxisBottom } from './AxisBottom'
import { AxisLeft } from './AxisLeft'
import {Marks} from './Marks'

const width = 1200
const height = 800
const margin = { top: 20, right: 30, bottom: 80, left: 120 }
const xAxisLabelOffset = 65
const xAxisTickFormat = format(",d")

function BarChart ({active}) {
  const innerHeight = height - margin.top - margin.bottom
  const innerWidth = width - margin.left - margin.right

  const yValue = d => d.parameter
  const xValue = d => d.value

  const yScale = scaleBand()
    .domain(active.map(yValue))
    .range([0, innerHeight])
    .paddingInner(0.5);
  
  const xScale = scaleLinear()
    .domain([0, max(active, xValue)])
    .range([0, innerWidth])

  return (
    <>
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <AxisBottom xScale={xScale} innerHeight={innerHeight} tickFormat={xAxisTickFormat}/>
        <AxisLeft yScale={yScale} />  
        <text className='axis-label' x={innerWidth / 2} y={innerHeight + xAxisLabelOffset} textAnchor='middle'>Active Cases</text>
        <Marks active={active} xScale={xScale} yScale={yScale} xValue={xValue} yValue={yValue} tooltipFormat={xAxisTickFormat}/>
      </g>
    </svg>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    active: state.active
  }
}

export default connect (mapStateToProps)(BarChart)