import React from 'react'
import CompareContainer from '../containers/CompareContainer'
import MobileProvider from '../context/MobileProvider'

const ComparePage = ({ match }) => (
  <MobileProvider>
    <CompareContainer
      course1={match.params.courses.split(':')[0].toUpperCase()}
      course2={match.params.courses.split(':')[1] != null ? match.params.courses.split(':')[1].toUpperCase() : ''}
    />
  </MobileProvider>
)
export default ComparePage
