import React from 'react'
import styled from 'styled-components'
import CompareTableContainer from './CompareTableContainer'
import { courseData, graphHeaders, isCourse } from '../data'
import Header from '../components/Common/PageHeader'
import InvalidCourseCode from '../components/Compare/InvalidCourseCode'


const Wrapper = styled.div`
  display: flex;
 `
const aggregatedData = course => (
  Object.keys(courseData(course).history[0])
    .filter(item => graphHeaders.includes(item))
    .map(item => parseInt(courseData(course).history[0][item], 10))
    .reduce((acc, curr) => acc + curr, 0)
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
          />
        )
        : (
          <InvalidCourseCode
            course={course1}
          />
        )}

      {course2 !== ''
        && (
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
              />

            ) : (
              <InvalidCourseCode
                course={course2}
              />
            )
          }
        </div>

        )}
    </Wrapper>

  </div>
)

export default CompareContainer
