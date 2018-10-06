import React from 'react'
import styled from 'styled-components'
import Comments from '../components/Compare/Comments'
import Header from '../components/Compare/Header'

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
    <Comments comments={courseData.history[0].comments} />
  </Wrapper>
)

export default CompareTableContainer
