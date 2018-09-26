import React from 'react'
import { courseHistory } from '../data/DataManagement'
import CourseGraph from '../components/CourseGraph'

const Course = ({ match }) => (
  <div>
    <h3>{`Sammanställning kurs: ${match.params.code}`}</h3>
    <CourseGraph dataArray={courseHistory(match.params.code)} />
    <div>
      {console.log(match.params.code)}
      {console.log(`the full array${courseHistory(match.params.code)}`)}
      {' '}
    </div>
  </div>
)

export default Course
