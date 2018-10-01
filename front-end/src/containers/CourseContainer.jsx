import React from 'react'
import {
  courseHistoryYears, nameByCourse, orderedHeadersFiltered, orderedHeadersStyledFiltered, colorArray, xAxArray,
} from '../data/DataManagement'

import GraphContainer from './GraphContainer'


const CourseContainer = ({ courseCode }) => (
  <div>
    {courseHistoryYears(courseCode).length <= 2 ? (
      <div>
        <h1>
        No data available for
          {' '}
          {nameByCourse(courseCode)}
          , you are probably looking a course with the same name but different course code.
        </h1>

      </div>
    )
      : (
        <GraphContainer
          orderedHeadersFiltered={orderedHeadersFiltered}
          orderedHeadersStyledFiltered={orderedHeadersStyledFiltered}
          courseCode={courseCode}
          nameByCourse={nameByCourse}
          courseHistoryYears={courseHistoryYears}
          xAxArray={xAxArray}
          colorArray={colorArray}
        />
      )
    }
  </div>
)

export default CourseContainer
