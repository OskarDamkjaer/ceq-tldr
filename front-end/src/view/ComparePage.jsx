import React from 'react'
import CompareContainer from '../containers/CompareContainer'

const ComparePage = ({ match }) => (
  <CompareContainer
    course1={match.params.courses.split(':')[0].toUpperCase()}
    course2={match.params.courses.split(':')[1] != null ? match.params.courses.split(':')[1].toUpperCase() : ''}
  />
)
export default ComparePage
