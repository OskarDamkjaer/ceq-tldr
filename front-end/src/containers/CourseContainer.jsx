import React from 'react'
import { courseData, graphHeaders } from '../data'
import ColorContext from '../context/color'
import GraphContainer from './GraphContainer'
import NoData from '../components/Course/NoData'

const CourseContainer = ({ courseCode }) => (
  <div>
    {courseData(courseCode).history.length <= 2 ? (
      <NoData
        name={courseData(courseCode).name}
      />
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
