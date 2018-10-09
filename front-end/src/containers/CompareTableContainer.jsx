import React from 'react'
import styled from 'styled-components'
import Comments from '../components/Compare/Comments'
import Header from '../components/Compare/Header'
import TableElement from '../components/Compare/TableElement'
import ColorContext from '../context/color'
import { graphHeadersStyled } from '../data'

const Wrapper = styled.div`
    width: 50vw;
    height: 100vh;
    padding: 20px;
`
const tableElements = {
  year: 'BASED ON YEAR', category: 'MASTER', points: 'HP', registered: 'NUMBER OF REGISTERED',
}
const CompareTableContainer = ({
  course, courseData, graphHeaders, aggregatedScore, winner,
}) => (
  <Wrapper>
    <Header
      courseName={courseData.name}
      courseCode={course}
      isWinner={winner}
    />
    <br />
    <h1>Course info</h1>
    <ColorContext.Consumer>
      {colorArray =>
        graphHeaders.map((headers, index) => (
          <TableElement
            key={headers}
            header={graphHeadersStyled[index]}
            data={courseData.history[0][headers]}
            color={colorArray[index]}
          />
        ))
        }
    </ColorContext.Consumer>
    <TableElement
      header="Aggregated data"
      data={aggregatedScore}
      color="bold"
    />
    <h1>Other course information</h1>
    <ColorContext.Consumer>
      {colorArray => (
        Object.values(tableElements).map((headers, index) => (
          <TableElement
            key={headers}
            header={headers}
            data={courseData.history[0][Object.keys(tableElements)[index]]}
            color={colorArray[index]}
          />
        ))
      )}
    </ColorContext.Consumer>
    <Comments comments={courseData.history[0].comments} />
  </Wrapper>
)

export default CompareTableContainer
