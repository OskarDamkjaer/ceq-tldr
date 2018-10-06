import React from 'react'
import styled from 'styled-components'
import Table from '../components/Compare/Table'
import { courseData } from '../data'

const Wrapper = styled.div`
  display: flex;
 `

const CompareContainer = ({ course1, course2 }) => (
  <Wrapper>
    <Table
      course={course1}
      courseData={courseData(course1)}
    />
    <Table
      course={course2}
      courseData={courseData(course2)}
    />
  </Wrapper>
)

export default CompareContainer
