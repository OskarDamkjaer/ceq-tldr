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
      history={courseData.history}
      name={courseData.name}
      colorArray={colorArray}
      courseCode={courseCode}
      xAxis={courseData.xAxis}
      isNeg={courseData.isNeg}
    />
    <CourseGraphRegistered
      history={courseData.history}
      colorArray={colorArray}
      xAxis={courseData.xAxis}
      isLess={courseData.isLess}
    />
  </div>
)

export default GraphContainer
