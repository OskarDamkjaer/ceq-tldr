import React from 'react'
import { connect } from 'react-redux'
import {
  courseData, graphHeaders, graphHeadersStyled, isCourse,
} from '../data'
import ColorContext from '../context/color'
import GraphContainer from './GraphContainer'
import NoData from '../components/Course/NoData'
import Header from '../components/Common/PageHeader'


const CourseContainer = ({ courseCode, activeFilterProp }) => (
  <div>
    <Header />
    {courseData(courseCode, activeFilterProp).history.length < 2 ? (
      <NoData
        name={courseData(courseCode, activeFilterProp).name}
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
              courseData={courseData(courseCode, activeFilterProp)}
              isCourse={isCourse}
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
