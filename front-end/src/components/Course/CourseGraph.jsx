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
  rangeRound: [0, 800],
  domain: [100, -100],
})

const xValue = item => parseInt(`20${item.year.substring(3, 5)}`, 10)

const yValue = (item, dataTag) => parseInt(parseInt(item[dataTag], 10), 10)

const tickArray = [-100, -80, -60, -40, -20, 0, +20, 40, 60, 80, 100]
const tickArrayX = [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019]
const colorArray = ['#3F2A36', '#DB2580', '#C5E1A0', '#75BBC0', '#117D69', '#FAE8C4', '#66D594']
/*
ASSESMENT, GOAL, IMPORTANCE, PERCENTAGE , SATISFACTIONSCORE, TECH, WORKLOAD
*/

const CourseGraph = ({
  graphHeaders, graphHeadersStyled, courseHistoryYears, name,
}) => (
  <GraphWrapper>
    <GraphHeader graphHeadersStyled={graphHeadersStyled} colorArray={colorArray} name={name} />
    <svg style={{ paddingLeft: '40px', paddingTop: '50px' }} width="600" height="850">
      {graphHeadersStyled.map((header, index) => (
        <LinePath
          data={courseHistoryYears}
          xScale={xScale}
          yScale={yScale}
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
        tickValues={tickArrayX}
      />
      <AxisLeft
        scale={yScale}
        tickValues={tickArray}
      />
    </svg>
  </GraphWrapper>
)

export default CourseGraph
