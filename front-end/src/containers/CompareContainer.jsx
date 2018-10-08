import React from 'react'
import styled from 'styled-components'
import CompareTableContainer from './CompareTableContainer'
import { courseData, MASTER } from '../data'

const Wrapper = styled.div`
  display: flex;
 `

const CompareContainer = ({ course1, course2 }) => (
  <Wrapper>
    <CompareTableContainer
      course={course1}
      courseData={courseData(course1, MASTER)}
    />
    <CompareTableContainer
      course={course2}
      courseData={courseData(course2, MASTER)}
    />
  </Wrapper>
)

export default CompareContainer
