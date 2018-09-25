import React from 'react'
import { courseHistory } from '../data/DataManagement'
import CourseGraph from '../components/CourseGraph'

const Course = ({match}) => (
  <div>
    <h3>{`Sammanställning kurs: ${match.params.code.replace(/-/g, ' ')}`}</h3>
    <CourseGraph/>
    <div> {console.log(courseHistory(match.params.code.replace(/-/g, ' ')))} </div>
  </div>
)

export default Course
