import React from 'react'
import styled from 'styled-components'
import Comments from '../components/Compare/Comments'
import Header from '../components/Compare/Header'
import TableElement from '../components/Compare/TableElement'
import ColorContext from '../context/color'
import { graphHeaders, graphHeadersStyled } from '../data'

const Wrapper = styled.div`
    width: 50vw;
    height: 100vh;
    padding: 20px;
`

const CompareTableContainer = ({ course, courseData }) => (
  <Wrapper>
    <Header
      courseName={courseData.name}
      courseCode={course}
    />
    <br />
    <ColorContext.Consumer>
      {colorArray =>
        graphHeaders.map((headers, index) => (
          <TableElement
            header={graphHeadersStyled[index]}
            data={courseData.history[0][headers]}
            color={colorArray[index]}
          />
        ))
      }
    </ColorContext.Consumer>
    <Comments comments={courseData.history[0].comments} color="he" />

  </Wrapper>
)

export default CompareTableContainer
