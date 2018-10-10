import React from 'react'
import {
  courseData, graphHeaders, graphHeadersStyled, isCourse,
} from '../data'
import ColorContext from '../context/color'
import GraphContainer from './GraphContainer'
import NoData from '../components/Course/NoData'
import Header from '../components/Common/PageHeader'


const CourseContainer = ({ courseCode }) => (
  <div>
    <Header />
    {courseData(courseCode).history.length < 2 ? (
      <NoData
        name={courseData(courseCode).name}
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
              courseData={courseData(courseCode)}
              isCourse={isCourse}
            />)}
        </ColorContext.Consumer>
      )
    }
  </div>
)

export default CourseContainer
