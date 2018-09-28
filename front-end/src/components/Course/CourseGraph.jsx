import React from 'react'
import styled from 'styled-components'
import { AxisBottom, AxisLeft } from '@vx/axis'
import { scaleLinear } from '@vx/scale'
import { curveNatural } from '@vx/curve'
import { LinePath } from '@vx/shape'
import GraphHeader from './GraphHeader'


const GraphWrapper = styled.div`
 font-size: 1,2em;
 display:flex;
 justify-content: center;
 padding-top: 100px;
`

const xScale = scaleLinear({
  rangeRound: [500, 0],
  domain: [2019, 2012],
})

const yScale = scaleLinear({
  rangeRound: [0, 600],
  domain: [100, -50],
})
const yRegScale = scaleLinear({
  rangeRound: [0, 400],
  domain: [200, 0],
})

const xValue = (item) => {
  const temp = `20${item.year.substring(3, 5)}`
  return parseInt(temp, 10)
}

const yValue = (item, dataTag) => {
  const temp = parseInt(item[dataTag], 10)
  return parseInt(temp, 10)
}

const registeredArray = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
  110, 120, 130, 140, 150, 160, 170, 180, 190]
const tickArray = [-40, -20, 0, +20, 40, 60, 80, 100]
const colorArray = ['#3F2A36', '#DB2580', '#C5E1A0', '#75BBC0', '#117D69', '#FAE8C4', '#66D594']
/*
ASSESMENT, GOAL, IMPORTANCE, PERCENTAGE , SATISFACTIONSCORE, TECH, WORKLOAD
*/

const CourseGraph = ({
  graphHeaders, graphHeadersStyled, courseHistoryYears, nameByCourse,
}) => (
  <GraphWrapper>
    <GraphHeader graphHeadersStyled={graphHeadersStyled} colorArray={colorArray} />
    <svg style={{ paddingLeft: '100px', paddingTop: '50px' }} width="600" height="850">
      {graphHeadersStyled.map((header, index) => (
        <LinePath
          data={courseHistoryYears}
          xScale={xScale}
          yScale={header === 'REGISTERED' ? yRegScale : yScale}
          x={item => xValue(item)}
          y={item => yValue(item, graphHeaders[index])}
          curve={curveNatural}
          stroke={colorArray[index]}
          strokeWidth={2}
        />
      ))}
      <AxisBottom
        scale={xScale}
        top={400}
        label="year"
        tickFormat={item => `${item}`}
        tickValues={[2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019]}
        stroke="#333333"
        tickStroke="#333333"
      />
      <AxisLeft
        scale={{ nameByCourse } === 'REGISTERED' ? yRegScale : yScale}
        tickValues={{ nameByCourse } === 'REGISTERED' ? registeredArray : tickArray}
        stroke="#333333"
        tickStroke="#333333"
      />
    </svg>
  </GraphWrapper>
)

export default CourseGraph
