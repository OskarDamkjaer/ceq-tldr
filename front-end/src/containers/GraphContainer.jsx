import React from 'react'
import CourseGraph from '../components/Course/CourseGraph'
import CourseGraphRegistered from '../components/Course/CourseGraphRegistered'

const GraphContainer = ({
  orderedHeadersFiltered, orderedHeadersStyledFiltered, courseCode, colorArray, courseData,
}) => (
  <div>
    <CourseGraph
      graphHeaders={orderedHeadersFiltered}
      graphHeadersStyled={orderedHeadersStyledFiltered}
      courseHistoryYears={courseData.history}
      name={courseData.name}
      colorArray={colorArray}
      courseCode={courseCode}
      xAxArray={courseData.xAxis}
      isNeg={courseData.isNeg}
    />
    <CourseGraphRegistered
      courseHistoryYears={courseData.history}
      colorArray={colorArray}
      xAxArray={courseData.xAxis}
      isLess={courseData.isLess}
    />
  </div>
)

export default GraphContainer
