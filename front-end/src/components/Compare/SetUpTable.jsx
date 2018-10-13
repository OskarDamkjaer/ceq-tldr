import React from 'react'
import {
  isCourse, courseSuggestion, courseData,
} from '../../data'
import CompareTable from './CompareTable'
import CompareInput from '../Common/CompareInput'


export default ({
  course, isWinner, winnerArray, aggregatedScore, onEnter,
}) => (
  <div>
    {course !== ''
      ? (
        <div>
          {isCourse(course)
            ? (
              <CompareTable
                course={course}
                courseData={courseData(course)}
                aggregatedScore={aggregatedScore}
                winner={isWinner}
                winnerArray={winnerArray}
              />

            )
            : (
              <div>
                <h1>
                  {course}
                  {' '}
              is not a valid course code
                </h1>
                <CompareInput
                  isCourse={isCourse}
                  courseSuggestion={courseSuggestion}
                  course={course}
                  onEnter={onEnter}
                />
              </div>
            )
          }
        </div>
      ) : (
        <CompareInput
          isCourse={isCourse}
          course={course}
          courseSuggestion={courseSuggestion}
          onEnter={onEnter}
        />
      )}
  </div>

)
