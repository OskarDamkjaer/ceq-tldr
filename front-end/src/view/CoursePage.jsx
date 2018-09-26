import React from 'react'
import CourseContainer from '../containers/CourseContainer'

const CoursePage = ({ match }) => (
  <CourseContainer courseCode={match.params.code} />
)

export default CoursePage
