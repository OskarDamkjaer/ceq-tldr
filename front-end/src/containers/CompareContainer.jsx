import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import CompareTableContainer from './CompareTableContainer'
import { courseData, graphHeaders, isCourse } from '../data'
import Header from '../components/Common/PageHeader'


const Wrapper = styled.div`
  display: flex;
 `

const aggregatedData = (course, activeFilterProp) => (
  Object.keys(courseData(course, activeFilterProp).history[0])
    .filter(item => graphHeaders.includes(item))
    .map(item => parseInt(courseData(course, activeFilterProp).history[0][item], 10))
    .reduce((acc, curr) => acc + curr, 0)
)

const CompareContainer = ({ course1, course2, activeFilterProp }) => (
  <div>
    <Header />
    <Wrapper>
      {isCourse(course1).length > 0
        ? (
          <CompareTableContainer
            course={course1}
            courseData={courseData(course1, activeFilterProp)}
            aggregatedScore={String(aggregatedData(course1, activeFilterProp))}
            graphHeaders={graphHeaders}
            winner={course2 !== '' ? aggregatedData(course1, activeFilterProp) > aggregatedData(course2, activeFilterProp) : false}
          />
        )
        : (
          <h1>
            {course1}
            {' '}
            is not a valid course code
          </h1>
        )}

      {course2 !== ''
        && (
        <div>
          { isCourse(course2).length > 0
            ? (
              <CompareTableContainer
                course={course2}
                courseData={courseData(course2, activeFilterProp)}
                aggregatedScore={String(aggregatedData(course2, activeFilterProp))}
                graphHeaders={graphHeaders}
                winner={aggregatedData(course2, activeFilterProp)
                > aggregatedData(course1, activeFilterProp)}
              />

            ) : (
              <h1>
                {course2}
                {' '}
              is not a valid course code
              </h1>
            )
          }
        </div>

        )}
    </Wrapper>

  </div>
)

const mapStateToProps = ({ sorting }) => ({
  activeFilterProp: sorting.filter,
})

export default connect(
  mapStateToProps,
  null,
)(CompareContainer)
