import React from 'react'
import {
  courseHistoryYears, nameByCourse, orderedHeadersFiltered, orderedHeadersStyledFiltered,
} from '../data/DataManagement'

import CourseGraph from '../components/Course/CourseGraph'

const CourseContainer = ({ courseCode }) => (
  <div>
    <h1>{`Sammanställning kurs: ${nameByCourse(courseCode)}`}</h1>
    <CourseGraph
      graphHeaders={orderedHeadersFiltered}
      graphHeadersStyled={orderedHeadersStyledFiltered}
      courseHistoryYears={courseHistoryYears(courseCode)}
      nameByCourse={nameByCourse(courseCode)}
    />
  </div>
)

export default CourseContainer
