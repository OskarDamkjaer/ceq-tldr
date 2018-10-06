import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 50vw;
    height: 100vh;
    padding: 20px;
`
const HeaderSpan = styled.span`
    font-size: 30px;
`
const CourseSpan = styled.span`
    color:gray;
`
const headlines = ['Studierådets kommentarer', 'Programledarens kommentarer', 'Kurslärarens kommenterer', 'Kurslärarens kommentarer']

const headLineCreator = (sentence) => {
  const jsxList = []
  for (let i = 0; i < headlines.length; i += 1) {
    if (sentence.includes(headlines[i])) {
      jsxList.push(
        <span>
          <h3>{headlines[i]}</h3>
          <span>{`${sentence.replace(headlines[i], '')}. `}</span>
        </span>,
      )
    }
  }
  jsxList.push(jsxList.length === 0 && <span>{`${sentence}. `}</span>)
  return jsxList
}

const Table = ({ course, courseData }) => (
  <Wrapper>
    <HeaderSpan>
      {courseData.name}
    </HeaderSpan>
    <CourseSpan>{course}</CourseSpan>
    <h2>Swedish comments from Studierådet and Programledarna</h2>
    { courseData.history[0].comments.split('.').map(
      headLineCreator,
    )
    }
  </Wrapper>
)

export default Table
