import React from 'react'
import { Redirect } from 'react-router-dom'
import {
  courseData, graphHeaders, graphHeadersStyled, isCourse, courseSuggestion,
} from '../data'
import ColorContext from '../context/color'
import GraphContainer from './GraphContainer'
import Header from '../components/Common/PageHeader'

const CourseContainer = ({ courseCode }) => (
  <div>
    <Header />
    {courseData(courseCode).history.length < 2 ? (
      <Redirect to={`/compare/${courseCode}`} />
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
              courseSuggestion={courseSuggestion}
            />)}
        </ColorContext.Consumer>
      )
    }
  </div>
)

export default CourseContainer
