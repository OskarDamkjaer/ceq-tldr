import React from 'react'
import styled from 'styled-components'

const HeaderSpan = styled.span`
    font-size: 30px;
    margin-right: 10px;
`
const CourseSpan = styled.span`
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
