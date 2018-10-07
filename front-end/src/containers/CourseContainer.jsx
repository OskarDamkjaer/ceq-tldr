import React from 'react'
import { courseData, graphHeaders, graphHeadersStyled, MASTER } from '../data'
import ColorContext from '../context/color'
import GraphContainer from './GraphContainer'
import NoData from '../components/Course/NoData'

const CourseContainer = ({courseCode}) => (
  <div>
    {courseData(courseCode, MASTER).history.length <= 2 ? (
        <NoData
          name={courseData(courseCode, MASTER).name}
        />
      )
      : (
        <ColorContext.Consumer>
          {colorArray => (
            <GraphContainer
              orderedHeadersFiltered={graphHeaders}
              orderedHeadersStyledFiltered={graphHeadersStyled}
              courseCode={courseCode}
              colorArray={colorArray}
              courseData={courseData(courseCode, MASTER)}
            />)}
        </ColorContext.Consumer>
      )
    }
  </div>
)

export default CourseContainer
