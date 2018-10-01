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

const xScaleLiniear = (yearLow, yearHigh) => ({ rangeRound: [500, 0], domain: [yearHigh, yearLow] })

const yScale = scaleLinear({
  rangeRound: [0, 800],
  domain: [100, -100],
})

const xValueTemp = item => parseInt(`20${item.year.substring(3, 5)}`, 10)

function xValue(item, xAxArray) {
  console.log(xAxArray)
  return parseInt(`20${item.year.substring(3, 5)}`, 10)
}

const yValue = (item, dataTag) => parseInt(parseInt(item[dataTag], 10), 10)

const tickArray = [-100, -80, -60, -40, -20, 0, +20, 40, 60, 80, 100]

const CourseGraph = ({
  graphHeaders, graphHeadersStyled, courseHistoryYears, name, colorArray, courseCode, xAxArray,
}) => (
  <GraphWrapper>
    <GraphHeader graphHeadersStyled={graphHeadersStyled} colorArray={colorArray} name={name} courseCode={courseCode} />
    <svg style={{ paddingLeft: '40px', paddingTop: '50px' }} width="600" height="850">
      {graphHeadersStyled.map((header, index) => (
        <LinePath
          data={courseHistoryYears}
          xScale={scaleLinear(xScaleLiniear(xAxArray[0], xAxArray[xAxArray.length - 1]))}
          yScale={yScale}
          x={item => xValue(item, xAxArray)}
          y={item => yValue(item, graphHeaders[index])}
          curve={curveNatural}
          stroke={colorArray[index]}
          strokeWidth={2}
        />
      ))}
      <AxisBottom
        scale={scaleLinear(xScaleLiniear(xAxArray[0], xAxArray[xAxArray.length - 1]))}
        top={400}
        label="year"
        tickFormat={item => `${item}`}
        tickValues={xAxArray}
      />
      <AxisLeft
        scale={yScale}
        tickValues={tickArray}
      />
    </svg>
  </GraphWrapper>
)

export default CourseGraph
