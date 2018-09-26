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
`

const xScale = scaleLinear({
  rangeRound: [500, 0],
  domain: [2019, 2012],
})

const yScale = scaleLinear({
  rangeRound: [0, 800],
  domain: [150, -20],
})

const xValue = (item) => {
  const temp = `20${item.year.substring(3, 5)}`
  console.log(temp)
  return parseInt(temp, 10)
}

const yValue = (item) => {
  const temp = parseInt(item.importanceScore, 10)
  console.log(temp)
  return parseInt(temp, 10)
}

const importanceScoreArray = [-20, -10, 10, 30, 50, 70, 90, 110, 130, 150]

const CourseGraph = ({ dataArray, tag }) => (
  <div>
    <HeaderStyle>{tag}</HeaderStyle>
    <svg style={{ paddingLeft: '100px', paddingTop: '50px' }} width="600" height="1000">
      <LinePath
        data={dataArray.slice(0, 6)}
        xScale={xScale}
        yScale={yScale}
        x={item => xValue(item)}
        y={item => yValue(item)}
        curve={curveNatural}
        stroke="black"
        strokeWidth={2}
      />
      <AxisBottom
        scale={xScale}
        top={530}
        label="year"
        tickFormat={item => `${item}`}
        tickValues={[2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019]}
        stroke="#333333"
        tickStroke="#333333"
      />
      <AxisLeft
        scale={yScale}
        label="importanceScore"
        tickValues={importanceScoreArray}
        stroke="#333333"
        tickStroke="#333333"
      />
    </svg>
  </div>
)

export default CourseGraph
