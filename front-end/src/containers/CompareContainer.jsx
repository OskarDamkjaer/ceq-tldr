import React from 'react'
import styled from 'styled-components'
import CompareTableContainer from './CompareTableContainer'
import { courseData } from '../data/oldIndex'

const Wrapper = styled.div`
  display: flex;
 `

const CompareContainer = ({ course1, course2 }) => (
  <Wrapper>
    <CompareTableContainer
      course={course1}
      courseData={courseData(course1)}
    />
    <CompareTableContainer
      course={course2}
      courseData={courseData(course2)}
    />
  </Wrapper>
)

export default CompareContainer
