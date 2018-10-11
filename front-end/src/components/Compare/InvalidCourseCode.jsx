import React from 'react'
import styled from 'styled-components'
import CompareInput from '../Common/CompareInput'

const Wrapper = styled.div`
    margin-left: 100px;

`
const InvalidCourseCode = ({
  course, redirectCourse, isCourse, courseSuggestion, tag,
}) => (
  <Wrapper>
    <h1>
      {course}
      {' '}
              is not a valid course code
    </h1>
    <CompareInput
      course={redirectCourse}
      isCourse={isCourse}
      courseSuggestion={courseSuggestion}
      tag={tag}
    />
  </Wrapper>
)

export default InvalidCourseCode
