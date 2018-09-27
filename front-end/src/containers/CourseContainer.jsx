import React from 'react'
import { courseHistory, nameByCourse } from '../data/DataManagement'
import { orderedHeadersFiltered, orderedHeadersStyledFiltered } from '../data/DataManagement'
import CourseGraph from '../components/Course/CourseGraph'

const CourseContainer = ({ courseCode }) => (
  <div>
    <h3>{`Sammanställning kurs: ${nameByCourse(courseCode)}`}</h3>
    {
      orderedHeadersStyledFiltered.slice(1).map((header, index) => (
        <CourseGraph dataArray={courseHistory(courseCode)} tag={header} dataTag={orderedHeadersFiltered.slice(1)[index]} />
      ))
    }
    {' '}
    <div />
  </div>
)

export default CourseContainer
