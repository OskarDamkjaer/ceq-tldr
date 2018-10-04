import React from 'react'
import { courseData, graphHeaders } from '../data'
import ColorContext from '../context/color'
import GraphContainer from './GraphContainer'

const CourseContainer = ({ courseCode }) => (
  <div>
    {courseData(courseCode).history.length <= 2 ? (
      <div>
        <h1>
        No data available for
          {' '}
          {courseData(courseCode).name}
          , you are probably looking a course with the same name but different course code.
        </h1>

      </div>
    )
      : (
        <ColorContext.Consumer>
          {colorArray => (
            <GraphContainer
              orderedHeadersFiltered={graphHeaders.headers}
              orderedHeadersStyledFiltered={graphHeaders.styledHeaders}
              courseCode={courseCode}
              colorArray={colorArray}
              courseData={courseData(courseCode)}
            />)}
        </ColorContext.Consumer>
      )
    }
  </div>
)

export default CourseContainer
