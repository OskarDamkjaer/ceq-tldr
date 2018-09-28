import React from 'react'
import styled from 'styled-components'
import { AxisBottom, AxisLeft } from '@vx/axis'
import { scaleLinear } from '@vx/scale'
import { Bar } from '@vx/shape'

const GraphWrapper = styled.div`
 font-size: 1,2em;
 display:flex;
 justify-content: center;
 padding-top: 100px;
`

const xScale = scaleLinear({
  rangeRound: [500, 0],
  domain: [2019, 2011],
})

const yRegScale = scaleLinear({
  rangeRound: [0, 400],
  domain: [200, 0],
})

const graphArray = [53, 116, 179, 242, 305, 368, 431, 494]
const xStatus = index => graphArray[index]

const registeredArray = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
  110, 120, 130, 140, 150, 160, 170, 180, 190, 200]
const tickArrayX = ['', 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019]

const colorArray = ['#3F2A36', '#DB2580', '#C5E1A0', '#75BBC0', '#117D69', '#FAE8C4', '#66D594']

const CourseGraphRegistered = ({ courseHistoryYears }) => (
  <GraphWrapper>
    <svg style={{ paddingLeft: '40px', paddingTop: '50px' }} width="600" height="850">
      {courseHistoryYears.map((item, index) => (
        <Bar
          width={20}
          height={item.registered}

          x={xStatus(index)}
          y={400 - item.registered}

          fill={colorArray[index]}
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
        scale={yRegScale}
        tickValues={registeredArray}
      />
    </svg>
  </GraphWrapper>
)

export default CourseGraphRegistered
