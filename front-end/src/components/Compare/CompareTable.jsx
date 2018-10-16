import React from 'react'
import styled from 'styled-components'
import Comments from './Comments'
import Header from './Header'
import TableElement from './TableElement'
import ColorContext from '../../context/color'
import { headers, headersStyled } from '../../data'
import NoGraphData from './NoGraphData'

const Wrapper = styled.div`
    padding: 20px;
`
const tableElements = {
  year: 'BASED ON YEAR', category: 'YEAR', points: 'HP', registered: 'NUMBER OF REGISTERED',
}
const CompareTableContainer = ({
  course, courseData, winner, search, onEnter,
}) => (
  <Wrapper>
    {search === '?nograph' && (
      <NoGraphData
        course={course}
      />
    )}
    <Header
      courseName={courseData.name}
      courseCode={course}
      isWinner={winner.winnerArray[winner.winnerArray.length - 1]}
      onEnter={onEnter}
    />
    <br />
    <h1>Course info</h1>
    <ColorContext.Consumer>
      {colorArray =>
        headers.map((items, index) => (
          <TableElement
            key={items}
            header={headersStyled[index]}
            data={courseData.history[courseData.history.length - 1][items]}
            color={colorArray[index]}
            green={winner.winnerArray[index]}
          />
        ))
        }
    </ColorContext.Consumer>
    <TableElement
      header="Aggregated data"
      data={winner.aggregatedData}
      color="bold"
      green={winner.winnerArray[winner.winnerArray.length - 1]}
    />
    <h1>Other course information</h1>
    <ColorContext.Consumer>
      {colorArray => (
        Object.values(tableElements).map((items, index) => (
          <TableElement
            key={items}
            header={items}
            data={courseData.history[courseData.history.length - 1][Object.keys(tableElements)[index]]}
            color={colorArray[index]}
          />
        ))
      )}
    </ColorContext.Consumer>
    <Comments comments={courseData.history[courseData.history.length - 1].comments} />
  </Wrapper>
)

export default CompareTableContainer
