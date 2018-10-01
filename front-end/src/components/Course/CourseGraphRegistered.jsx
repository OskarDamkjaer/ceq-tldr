import React from 'react'
import styled from 'styled-components'
import { AxisBottom, AxisLeft } from '@vx/axis'
import { scaleLinear, scaleBand } from '@vx/scale'
import { Bar } from '@vx/shape'

const GraphWrapper = styled.div`
 font-size: 1,2em;
 display:flex;
 flex-direction: column;
 align-items: center;
 padding-top: 100px;
`

const xScaleBand = xAxArray => ({ rangeRound: [500, 0], domain: xAxArray.reverse() })


const yRegScale = scaleLinear({
  rangeRound: [0, 400],
  domain: [200, 0],
})

const registeredArray = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
  110, 120, 130, 140, 150, 160, 170, 180, 190, 200]

const compose = (scale, accessor) => data => scale(accessor(data))
const yPoint = compose(yRegScale, y => y.registered)


const CourseGraphRegistered = ({ courseHistoryYears, colorArray, xAxArray }) => (

  <GraphWrapper>
    <h1>Number of registred</h1>

    <svg style={{ paddingLeft: '40px', paddingTop: '50px' }} width="600" height="850">
      {courseHistoryYears.map((item, index) => (
        <Bar
          width={scaleBand(xScaleBand(xAxArray)).bandwidth()}
          height={400 - yPoint(item)}

          x={500 / xAxArray.length * index}
          y={400 - (400 - yPoint(item))}

          fill={colorArray[index]}
        />
      ))}
      <AxisBottom
        scale={scaleBand(xScaleBand(xAxArray))}
        top={400}
        label="year"
        tickFormat={item => `${item}`}
        tickValues={xAxArray}
      />
      <AxisLeft
        scale={yRegScale}
        tickValues={registeredArray}
      />
    </svg>
  </GraphWrapper>
)

export default CourseGraphRegistered
