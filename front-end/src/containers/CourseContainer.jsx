import React from 'react'
import { courseHistory, nameByCourse } from '../data/DataManagement'
import { orderedHeadersStyled } from '../data/DataManagement'
import CourseGraph from '../components/Course/CourseGraph'


const CourseContainer = ({ courseCode }) => (
  <div>
    <h3>{`Sammanställning kurs: ${nameByCourse(courseCode)}`}</h3>
    {
      orderedHeadersStyled.slice(1).map(header => (
        <CourseGraph dataArray={courseHistory(courseCode)} tag={header} />
      ))
    }
    {' '}
    <div />
  </div>
)

export default CourseContainer
