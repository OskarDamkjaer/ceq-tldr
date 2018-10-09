import React from 'react'
import { connect } from 'react-redux'
import { courseData, graphHeaders, graphHeadersStyled } from '../data'
import ColorContext from '../context/color'
import GraphContainer from './GraphContainer'
import NoData from '../components/Course/NoData'
import Header from '../components/Common/PageHeader'


import {
  resetState,
} from '../duck-reducers/sorting'

const CourseContainer = ({ courseCode, activeFilterProp, resetDispatchStateProp }) => (
  <div>
    <Header resetState={resetDispatchStateProp} />
    {courseData(courseCode, activeFilterProp).history.length <= 2 ? (
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
            />)}
        </ColorContext.Consumer>
      )
    }
  </div>
)

const mapStateToProps = ({ sorting }) => ({
  activeFilterProp: sorting.filter,
})

const mapDispatchToProps = dispatch => ({
  resetDispatchStateProp: () => dispatch(resetState()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CourseContainer)
