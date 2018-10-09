import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div` 
    height: 100px;
`
const HeaderSpan = styled.span`
    font-size: 3em;
    margin-right: 10px;
`
const CourseSpan = styled.span` 
    font-size: 2em;
    color:gray;
`

const Header = ({ courseName, courseCode }) => (
  <Wrapper>
    <HeaderSpan>
      {courseName}
    </HeaderSpan>
    <CourseSpan>{courseCode}</CourseSpan>
  </Wrapper>
)

export default Header
