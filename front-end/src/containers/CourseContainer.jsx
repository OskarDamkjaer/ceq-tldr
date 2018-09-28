import React from 'react'
import {
  courseHistoryYears, nameByCourse, orderedHeadersFiltered, orderedHeadersStyledFiltered,
} from '../data/DataManagement'

import CourseGraph from '../components/Course/CourseGraph'
import CourseGraphRegistered from '../components/Course/CourseGraphRegistered'

const CourseContainer = ({ courseCode }) => (
  <div>
    {courseHistoryYears(courseCode).length <= 2 ? (
      <div>
        <h1>
No data available for
          {' '}
          {nameByCourse(courseCode)}
        </h1>

      </div>
    )
      : (
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
    }
  </div>
)

export default CourseContainer
