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

const xScaleBand = xAxArray => ({ rangeRound: [500, 0], domain: xAxArray })


const yRegScalePos = { rangeRound: [0, 400], domain: [200, 0] }
const yRegScaleLess = { rangeRound: [0, 400], domain: [100, 0] }

const registeredArrayLess = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
const registeredArrayPos = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
  110, 120, 130, 140, 150, 160, 170, 180, 190, 200]
const compose = (scale, accessor) => data => scale(accessor(data))
const yPointLess = compose(scaleLinear(yRegScaleLess), y => y.registered)
const yPointPos = compose(scaleLinear(yRegScalePos), y => y.registered)


const CourseGraphRegistered = ({
  courseHistoryYears, colorArray, xAxArray, isLess,
}) => (

  <GraphWrapper>
    <h1>Number of registered</h1>

    <svg style={{ paddingLeft: '40px', paddingTop: '50px' }} width="600" height="850">
      {courseHistoryYears.map((item, index) => (
        <Bar
          width={scaleBand(xScaleBand(xAxArray)).bandwidth()}
          height={isLess ? 400 - yPointLess(item) : 400 - yPointPos(item)}

          x={500 / xAxArray.length * index}
          y={isLess ? 400 - (400 - yPointLess(item)) : 400 - (400 - yPointPos(item))}

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
        scale={isLess ? scaleLinear(yRegScaleLess) : scaleLinear(yRegScalePos)}
        tickValues={isLess ? registeredArrayLess : registeredArrayPos}
      />
    </svg>
  </GraphWrapper>
)

export default CourseGraphRegistered
