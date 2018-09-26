import React from 'react'
import { courseHistory, nameByCourse } from '../data/DataManagement'
import CourseGraph from '../components/Course/CourseGraph'

const CourseContainer = ({ courseCode }) => (
  <div>
    <h3>{`Sammanställning kurs: ${nameByCourse(courseCode)}`}</h3>
    <CourseGraph dataArray={courseHistory(courseCode)} />
    <div>
      {console.log(courseCode)}
      {console.log(`the full array${courseHistory(courseCode)[0].name}`)}
      {' '}
    </div>
  </div>
)

export default CourseContainer
