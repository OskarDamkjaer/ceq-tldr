import React from 'react'
import CourseGraph from '../components/Course/CourseGraph'
import CourseGraphRegistered from '../components/Course/CourseGraphRegistered'

const GraphContainer = ({
  orderedHeadersFiltered, orderedHeadersStyledFiltered, courseCode, nameByCourse, courseHistoryYears, colorArray, xAxArray, isNeg,
}) => (
  <div>
    <CourseGraph
      graphHeaders={orderedHeadersFiltered}
      graphHeadersStyled={orderedHeadersStyledFiltered}
      courseHistoryYears={courseHistoryYears(courseCode)}
      name={nameByCourse(courseCode)}
      colorArray={colorArray}
      courseCode={courseCode}
      xAxArray={xAxArray(courseCode)}
      isNeg={isNeg(courseCode)}
    />
    <CourseGraphRegistered
      courseHistoryYears={courseHistoryYears(courseCode)}
      colorArray={colorArray}
      xAxArray={xAxArray(courseCode)}
    />
  </div>
)

export default GraphContainer
