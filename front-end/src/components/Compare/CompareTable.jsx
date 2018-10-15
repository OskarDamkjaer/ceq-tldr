import React from 'react'
import styled from 'styled-components'
import Comments from './Comments'
import Header from './Header'
import TableElement from './TableElement'
import ColorContext from '../../context/color'
import { graphHeaders, graphHeadersStyled } from '../../data'

const Wrapper = styled.div`
    padding: 20px;
`
const tableElements = {
  year: 'BASED ON YEAR', category: 'YEAR', points: 'HP', registered: 'NUMBER OF REGISTERED',
}
const CompareTableContainer = ({
  course, courseData, winner,
}) => (
  <Wrapper>
    <Header
      courseName={courseData.name}
      courseCode={course}
      isWinner={typeof testWinner === 'object' ? winner.winnerArray[winner.winnerArray.length - 1] : false}
    />
    <br />
    <h1>Course info</h1>
    <ColorContext.Consumer>
      {colorArray =>
        graphHeaders.map((headers, index) => (
          <TableElement
            key={headers}
            header={graphHeadersStyled[index]}
            data={courseData.history[courseData.history.length - 1][headers]}
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
        Object.values(tableElements).map((headers, index) => (
          <TableElement
            key={headers}
            header={headers}
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
