import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  courseData, headers, headersStyled, isCourse, courseSuggestion,
} from '../data'
import ColorContext from '../context/color'
import GraphContainer from './GraphContainer'
import Header from '../components/Common/PageHeader'

const CourseContainer = ({ courseCode, activeFilterProp }) => (
  <div>
    <Header />
    {courseData(courseCode).history.length < 2 ? (
      <Redirect to={`/compare/${courseCode}?nograph`} />
    )
      : (
        <ColorContext.Consumer>
          {colorArray => (
            <GraphContainer
              orderedHeadersFiltered={headers}
              orderedHeadersStyledFiltered={headersStyled}
              courseCode={courseCode}
              colorArray={colorArray}
              courseData={courseData(courseCode, activeFilterProp)}
              isCourse={isCourse}
              courseSuggestion={courseSuggestion}
            />)}
        </ColorContext.Consumer>
      )
    }
  </div>
)

const mapStateToProps = ({ sorting }) => ({
  activeFilterProp: sorting.filter,
})

export default connect(
  mapStateToProps,
  null,
)(CourseContainer)
