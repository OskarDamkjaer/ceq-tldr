import React from 'react'
import CourseGraph from './CourseGraph'

const Course = ({ match }) => (
  <div>
    <h3>{`Sammanställning kurs: ${match.params.code.replace(/-/g, ' ')}`}</h3>
    <CourseGraph />
)

  </div>
)

export default Course
