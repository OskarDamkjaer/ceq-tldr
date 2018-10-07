import pureData from './lastFiveYears'

export const DATA = 'D'
export const INFOCOM = 'C'
export const MASTER = 0

// USE LAST OF YEAR PAIR IN JS.
export const y2018 = 'year17'
export const y2017 = 'year16'
export const y2016 = 'year15'
export const y2015 = 'year14'
export const y2014 = 'year13'

const flatten = obj => (Object.keys(obj)
  .map(category => addToObj(category, obj[category]))
  .reduce((prev, curr) => prev.concat(curr), []))

const addToObj = (category, obj) => [...obj].map(obj => ({...obj, category}))

const containsCourseCode = (arr, code) => arr.filter(course => course.code === code).length !== 0
const reduceCodeDuplicates = (prev, curr) => containsCourseCode(prev, curr.code) ? prev : prev.concat(curr)

const containsIshSame = (arr, curr) => arr.filter(course => JSON.stringify(course) === JSON.stringify(curr)).length !== 0
const reduceExactSameBestEffort = (prev, curr) => containsIshSame(prev, curr) ? prev : prev.concat(curr)

const onlyMastersFilter = item => !item.category.includes('Årskurs')
const onlyBachelorsFilter = item => item.category.includes('Årskurs')

export const getMastersForYear = (year) => {
  const latestC = pureData[year].C
  const latestD = pureData[year].D

  return flatten(latestC)
    .filter(onlyMastersFilter)
    .concat(flatten(latestD).filter(onlyMastersFilter))
    .reduce(reduceCodeDuplicates, [])
}

export const getBachelorForYearAndProgram = (year, program) => {
  //if (program === MASTER) return getMastersForYear(year) // If we want one function doing both.

  const data = pureData[year][program]
  return flatten(data)
    .filter(onlyBachelorsFilter)
}

export const dataForCourseCode = (year, code) => {
  const latestC = pureData[year].C
  const latestD = pureData[year].D

  const allCourses = flatten(latestC)
    .concat(flatten(latestD))

  return allCourses
    .filter(item => item.code === code)
    .reduce(reduceExactSameBestEffort, [])
  // TODO DATA och infocom läser samma kurser men ger olika feedback? Slå samman? Hur görs kurser som bytt namn?: ((((
}

export const allHistoryForCourseCode = code => ({
  2018: dataForCourseCode('year17', code),
  2017: dataForCourseCode('year16', code),
  2016: dataForCourseCode('year15', code),
  2015: dataForCourseCode('year14', code),
  2014: dataForCourseCode('year13', code),
})
