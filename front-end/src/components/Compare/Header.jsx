import React from 'react'
import styled from 'styled-components'

const HeaderSpan = styled.span`
    font-size: 3em;
    margin-right: 10px;
`
const CourseSpan = styled.span` 
    font-size: 2em;
    color:gray;
`

const Header = ({ courseName, courseCode }) => (
  <div>
    <HeaderSpan>
      {courseName}
    </HeaderSpan>
    <CourseSpan>{courseCode}</CourseSpan>
  </div>
)

export default Header
