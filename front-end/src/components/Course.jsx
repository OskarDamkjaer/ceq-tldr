import React from 'react'
import CourseGraph from './CourseGraph'
import { courseHistory } from '../data/DataManagement'

const Course = ({match}) => (
  <div>
    <h3>{`Sammanställning kurs: ${match.params.code.replace(/-/g, ' ')}`}</h3>
    <CourseGraph/>
    <div> {console.log(courseHistory(match.params.code.replace(/-/g, ' ')))} </div>
  </div>
)

export default Course
