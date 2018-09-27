import React from 'react'
import { courseHistory, nameByCourse } from '../data/DataManagement'
import { orderedHeaders, orderedHeadersStyled } from '../data/DataManagement'
import CourseGraph from '../components/Course/CourseGraph'

const excludedHeaders = ['CODE', 'YEAR', 'POINTS']
const excludedHeadersData = ['code', 'year', 'points']

const orderedHeadersFiltered = orderedHeaders.filter(header => !excludedHeadersData.includes(header))
const orderedHeadersStyledFiltered = orderedHeadersStyled.filter(header => !excludedHeaders.includes(header))

const CourseContainer = ({ courseCode }) => (
  <div>
    <h3>{`Sammanställning kurs: ${nameByCourse(courseCode)}`}</h3>
    {
      orderedHeadersStyledFiltered.slice(1).map((header, index) => (
        <CourseGraph dataArray={courseHistory(courseCode)} tag={header} dataTag={orderedHeadersFiltered.slice(1)[index]} />
      ))
    }
    {' '}
    <div />
  </div>
)

export default CourseContainer
