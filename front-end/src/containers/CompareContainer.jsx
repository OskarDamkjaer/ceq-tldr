import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import CompareTableContainer from './CompareTableContainer'
import { courseData } from '../data'

const Wrapper = styled.div`
  display: flex;
 `

const CompareContainer = ({ course1, course2, activeFilterProp }) => (
  <Wrapper>
    <CompareTableContainer
      course={course1}
      courseData={courseData(course1, activeFilterProp)}
    />
    {course2 !== ''
    && (
    <CompareTableContainer
      course={course2}
      courseData={courseData(course2, activeFilterProp)}
    />
    ) }
  </Wrapper>
)

const mapStateToProps = ({ sorting }) => ({
  activeFilterProp: sorting.filter,
})

export default connect(
  mapStateToProps,
  null,
)(CompareContainer)
