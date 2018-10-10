import React from 'react'
import styled from 'styled-components'
import CompareTableContainer from './CompareTableContainer'
import { courseData, graphHeaders, isCourse } from '../data'
import Header from '../components/Common/PageHeader'
import CompareInput from '../components/Common/CompareInput'
import InvalidCourseCode from '../components/Compare/InvalidCourseCode'


const Wrapper = styled.div`
  display: flex;
 `
const aggregatedData = course => (
  Object.keys(courseData(course).history[courseData(course).history.length - 1])
    .filter(item => graphHeaders.includes(item))
    .map(item => parseInt(courseData(course).history[courseData(course).history.length - 1][item], 10))
    .reduce((acc, curr) => acc + curr, 0)
)
const winnerArray = (courseCurrent, courseComparing) => (
  graphHeaders.map(items => (
    parseInt(courseData(courseCurrent).history[courseData(courseCurrent).history.length - 1][items], 10)
    > parseInt(courseData(courseComparing).history[courseData(courseComparing).history.length - 1][items], 10)
  ))
)
const CompareContainer = ({ course1, course2 }) => (
  <div>
    <Header />
    <Wrapper>
      {isCourse(course1)
        ? (
          <CompareTableContainer
            course={course1}
            courseData={courseData(course1)}
            aggregatedScore={aggregatedData(course1)}
            graphHeaders={graphHeaders}
            winner={course2 !== '' && isCourse(course2) && aggregatedData(course1) > aggregatedData(course2)}
            winnerArray={course2 !== '' && isCourse(course2) && winnerArray(course1, course2)}
          />
        )
        : (
          <InvalidCourseCode
            course={course1}
          />
        )
      }
      {course2 !== ''
        ? (
          <div>
            { isCourse(course2)
              ? (
                <CompareTableContainer
                  course={course2}
                  courseData={courseData(course2)}
                  aggregatedScore={String(aggregatedData(course2))}
                  graphHeaders={graphHeaders}
                  winner={isCourse(course1) && aggregatedData(course2)
                > aggregatedData(course1)}
                  winnerArray={isCourse(course1) && winnerArray(course2, course1)}

                />

              ) : (
                <InvalidCourseCode
                  course={course2}
                />
              )
          }
          </div>
        ) : (
          <CompareInput
            isCourse={isCourse}
            course={course1}
          />
        )}
    </Wrapper>
  </div>
)

export default CompareContainer
