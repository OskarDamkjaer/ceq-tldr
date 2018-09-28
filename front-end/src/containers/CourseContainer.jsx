import React from 'react'
import {
  courseHistoryYears, nameByCourse, orderedHeadersFiltered, orderedHeadersStyledFiltered,
} from '../data/DataManagement'

import CourseGraph from '../components/Course/CourseGraph'

const CourseContainer = ({ courseCode }) => (
  <div>
    <h2>{`Sammanställning kurs: ${nameByCourse(courseCode)}`}</h2>
    <CourseGraph
      graphHeaders={orderedHeadersFiltered}
      graphHeadersStyled={orderedHeadersStyledFiltered}
      courseCode={courseCode}
      courseHistoryYears={courseHistoryYears(courseCode)}
      nameByCourse={nameByCourse(courseCode)}
    />
  </div>
)

export default CourseContainer
