import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    margin-left: 100px;

`
const InvalidCourseCode = ({ course }) => (
  <Wrapper>
    <h1>
      {course}
      {' '}
              is not a valid course code
    </h1>
  </Wrapper>
)

export default InvalidCourseCode
