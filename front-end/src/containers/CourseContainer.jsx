import React from 'react'
import {
  courseHistoryYears, nameByCourse, orderedHeadersFiltered, orderedHeadersStyledFiltered, xAxArray, isNeg, isLess,
} from '../data/DataManagement'
import ColorContext from '../context/color'


import GraphContainer from './GraphContainer'


const CourseContainer = ({ courseCode }) => (
  <div>
    {courseHistoryYears(courseCode).length <= 2 ? (
      <div>
        <h1>
        No data available for
          {' '}
          {nameByCourse(courseCode)}
          , you are probably looking a course with the same name but different course code.
        </h1>

      </div>
    )
      : (
        <ColorContext.Consumer>
          {colorArray => (
            <GraphContainer
              orderedHeadersFiltered={orderedHeadersFiltered}
              orderedHeadersStyledFiltered={orderedHeadersStyledFiltered}
              courseCode={courseCode}
              nameByCourse={nameByCourse}
              courseHistoryYears={courseHistoryYears}
              xAxArray={xAxArray}
              colorArray={colorArray}
              isNeg={isNeg}
              isLess={isLess}
            />)}
        </ColorContext.Consumer>
      )
    }
  </div>
)

export default CourseContainer
