import React from 'react'
import PropTypes from 'prop-types'
import pureData from './pureScrapeData'
import styled from 'styled-components'

const scrapeData = Object.values(pureData).filter((item, index) => index !== 2)
const scrapeKeys = Object.keys(pureData[0]).filter((item, index) => index !== 2)
let orderedHeaders = [scrapeKeys[4], ...scrapeKeys.slice(0, 4), ...scrapeKeys.slice(5)]

//TODO lista sifferdatarows för snyggare traverseal
const averagingReducer = (acc, curr, ind, fullArray) => {
  const averageCourse = (accumu, currentData, index, allCourses) => {
    if (index === 0) {
      currentData.assessmentScore = parseInt(currentData.assessmentScore, 10) / allCourses.length
      currentData.goalClearnessScore = parseInt(currentData.goalClearnessScore, 10) / allCourses.length
      currentData.teachingScore = parseInt(currentData.teachingScore, 10) / allCourses.length
      currentData.workloadScore = parseInt(currentData.workloadScore, 10) / allCourses.length
      currentData.satisfactionScore = parseInt(currentData.satisfactionScore, 10) / allCourses.length
      currentData.percentPassed = parseInt(currentData.percentPassed, 10) / allCourses.length
      currentData.importanceScore = parseInt(currentData.importanceScore, 10) / allCourses.length
      return currentData
    }
    accumu.assessmentScore = parseInt(accumu.assessmentScore, 10) + parseInt(currentData.workloadScore, 10) / allCourses.length
    accumu.goalClearnessScore = parseInt(accumu.goalClearnessScore, 10) + parseInt(currentData.workloadScore, 10) / allCourses.length
    accumu.teachingScore = parseInt(accumu.teachingScore, 10) + parseInt(currentData.teachingScore, 10) / allCourses.length
    accumu.workloadScore = parseInt(accumu.workloadScore, 10) + parseInt(currentData.workloadScore, 10) / allCourses.length
    accumu.satisfactionScore = parseInt(accumu.satisfactionScore, 10) + parseInt(currentData.satisfactionScore, 10) / allCourses.length
    accumu.percentPassed = parseInt(accumu.percentPassed, 10) + parseInt(currentData.percentPassed, 10) / allCourses.length
    accumu.importanceScore = parseInt(accumu.importanceScore, 10) + parseInt(currentData.importanceScore, 10) / allCourses.length
    return accumu
  }

  if (acc.filter(item => item.code === curr.code).length === 0) {
    //if we haven't seen this code before
    return acc.concat(fullArray
      .filter(item => item.code === curr.code)
      .reduce(averageCourse))
      .map(course => ({
        code: course.code,
        name: course.name,
        points: course.points,
        year: course.year,
        registered: course.registered,
        assessmentScore: Math.floor(course.assessmentScore),
        goalClearnessScore: Math.floor(course.goalClearnessScore),
        teachingScore: Math.floor(course.teachingScore),
        workloadScore: Math.floor(course.workloadScore),
        satisfactionScore: Math.floor(course.satisfactionScore),
        percentPassed: Math.floor(course.percentPassed),
        importanceScore: Math.floor(course.importanceScore)
      }))
  }
  return acc
}

const reducedData = scrapeData.reduce(averagingReducer, [])

const PrettyTable = styled.table`
`

function Table (props) {
  return (
    <PrettyTable>
      <thead>
      <tr>
        {
          orderedHeaders.map(key => <th key={key}>{key}</th>)
        }
      </tr>
      </thead>
      <tbody>
      {
        reducedData.map((row, index) => (
          <tr>
            {orderedHeaders.map(key => <td key={row[key].code}>{row[key]}</td>)}
          </tr>
        ))
      }
      </tbody>
    </PrettyTable>
  )
}

Table.propTypes = {}

export default Table
