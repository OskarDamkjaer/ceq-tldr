import React from 'react'
import styled from 'styled-components'
import { AxisBottom, AxisLeft } from '@vx/axis'
import { scaleLinear } from '@vx/scale'
import { curveNatural } from '@vx/curve'
import { LinePath } from '@vx/shape'
import GraphHeader from './GraphHeader'

const Wrapper = styled.div`
 height:100vh;
 font-size: 1,2em;
 display:flex;
 justify-content: center;
 padding-top: 50px;
`
const GraphWrapper = styled.div`
 padding-top: 100px;
`

const xScaleLiniear = (yearLow, yearHigh) => ({ rangeRound: [500, 0], domain: [yearHigh, yearLow] })
const yPos = { rangeRound: [0, 400], domain: [100, 0] }
const yNeg = { rangeRound: [0, 800], domain: [100, -100] }

const yValue = (item, dataTag) => parseInt(item[dataTag], 10)

const tickArrayPos = [0, 20, 40, 60, 80, 100]
const tickArrayNeg = [-100, -80, -60, -40, -20, 0, 20, 40, 60, 80, 100]

const CourseGraph = ({
  graphHeaders,
  graphHeadersStyled,
  history,
  name,
  colorArray,
  courseCode,
  xAxis,
  isNeg,
  isActive,
  handleHover,
  handleOut,
  isCourse,
  courseSuggestion,
  onEnter,
}) => (
  <Wrapper>
    <GraphHeader
      graphHeadersStyled={graphHeadersStyled}
      colorArray={colorArray}
      name={name}
      courseCode={courseCode}
      handleHover={handleHover}
      handleOut={handleOut}
      isNeg={isNeg}
      isCourse={isCourse}
      courseSuggestion={courseSuggestion}
      onEnter={onEnter}
    />
    <GraphWrapper>
      <svg style={{ paddingLeft: '40px', paddingTop: '50px' }} width="600" height="850">
        {graphHeadersStyled.map((header, index) => (
          <LinePath
            key={header}
            data={history}
            xScale={scaleLinear(xScaleLiniear(xAxis[0], xAxis[xAxis.length - 1]))}
            yScale={isNeg ? scaleLinear(yNeg) : scaleLinear(yPos)}
            x={item => item.year}
            y={item => yValue(item, graphHeaders[index])}
            curve={curveNatural}
            stroke={isActive === 'all' || isActive === header ? colorArray[index] : '#A8A8A8'}
            strokeWidth={isActive === header ? 4 : 2}
          />
        ))}
        <AxisBottom
          scale={scaleLinear(xScaleLiniear(xAxis[0], xAxis[xAxis.length - 1]))}
          top={400}
          label="year"
          tickFormat={item => `${item}`}
          tickValues={xAxis}
        />
        <AxisLeft
          scale={isNeg ? scaleLinear(yNeg) : scaleLinear(yPos)}
          tickValues={isNeg ? tickArrayNeg : tickArrayPos}
        />
      </svg>
    </GraphWrapper>
  </Wrapper>
)

export default CourseGraph
