import React from 'react'
import {
  courseHistoryYears, nameByCourse, orderedHeadersFiltered, orderedHeadersStyledFiltered,
} from '../data/DataManagement'

import CourseGraph from '../components/Course/CourseGraph'
import CourseGraphRegistered from '../components/Course/CourseGraphRegistered'

const CourseContainer = ({ courseCode }) => (
  <div>
    <CourseGraph
      graphHeaders={orderedHeadersFiltered}
      graphHeadersStyled={orderedHeadersStyledFiltered}
      courseHistoryYears={courseHistoryYears(courseCode)}
      name={nameByCourse(courseCode)}
    />
    <CourseGraphRegistered
      courseHistoryYears={courseHistoryYears(courseCode)}
    />
  </div>
)

export default CourseContainer
