import React from 'react'
import styled from 'styled-components'
import { AxisBottom, AxisLeft } from '@vx/axis'
import { scaleLinear } from '@vx/scale'
import { curveNatural } from '@vx/curve'
import { LinePath } from '@vx/shape'

const HeaderStyle = styled.div`
 width: 40em;
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

const CourseGraph = ({
  dataArray, tag, dataTag,
}) => (
  <div>
    <HeaderStyle>{tag}</HeaderStyle>
    <svg style={{ paddingLeft: '100px', paddingTop: '50px' }} width="600" height="850">
      <LinePath
        data={dataArray}
        xScale={xScale}
        yScale={tag === 'REGISTERED' ? yRegScale : yScale}
        x={item => xValue(item)}
        y={item => yValue(item, dataTag, dataArray)}
        curve={curveNatural}
        stroke="black"
        strokeWidth={2}
      />
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
        scale={tag === 'REGISTERED' ? yRegScale : yScale}
        tickValues={tag === 'REGISTERED' ? registeredArray : tickArray}
        stroke="#333333"
        tickStroke="#333333"
      />
    </svg>
  </div>
)

export default CourseGraph
