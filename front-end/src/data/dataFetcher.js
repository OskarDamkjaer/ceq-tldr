import pureData from './lastFiveYears'

export const DATA = 'D'
export const INFOCOM = 'C'
export const MASTER = 'MASTER'

// USE LAST OF YEAR PAIR IN JS.
export const y2018 = 'year17'
export const y2017 = 'year16'
export const y2016 = 'year15'
export const y2015 = 'year14'
export const y2014 = 'year13'

const flatten = (obj, add) => (Object.keys(obj)
  .map(category => add(category, obj[category]))
  .reduce((prev, curr) => prev.concat(curr), []))

const addCategoryToObj = (category, obj) => [...obj].map(obj => ({ ...obj, category }))
const addYearToObj = (year, obj) => [...obj].map(obj => ({ ...obj, year }))

const containsCourseCode = (arr, code) => arr.filter(course => course.code === code).length !== 0
const reduceCodeDuplicates = (prev, curr) =>
  (containsCourseCode(prev, curr.code) ? prev : prev.concat(curr))

const containsIshSame = (arr, curr) =>
  arr.filter(course => JSON.stringify(course) === JSON.stringify(curr)).length !== 0
const reduceExactSameBestEffort = (prev, curr) =>
  (containsIshSame(prev, curr) ? prev : prev.concat(curr))

const onlyMastersFilter = item => !item.category.includes('Årskurs')
const onlyBachelorsFilter = item => item.category.includes('Årskurs')

const getMastersForYear = (year) => {
  const latestC = pureData[year].C
  const latestD = pureData[year].D

  return flatten(latestC, addCategoryToObj)
    .filter(onlyMastersFilter)
    .concat(flatten(latestD, addCategoryToObj).filter(onlyMastersFilter))
    .reduce(reduceCodeDuplicates, [])
}

export const getDataForYearAndProgram = (year, program) => {
  if (program === MASTER) return getMastersForYear(year)

  const data = pureData[year][program]
  return flatten(data, addCategoryToObj)
    .filter(onlyBachelorsFilter)
}

export const dataForCourseCode = (year, code, program) => {
  const relevantData = getDataForYearAndProgram(year, program)

  return relevantData
    .filter(item => item.code === code)
    .reduce(reduceExactSameBestEffort, [])
}

const allHistoryForCourseCode = (code, program) => ({
  2018: dataForCourseCode('year17', code, program),
  2017: dataForCourseCode('year16', code, program),
  2016: dataForCourseCode('year15', code, program),
  2015: dataForCourseCode('year14', code, program),
  2014: dataForCourseCode('year13', code, program),
})

export const historyListForCourseCode = (code, program) =>
  flatten(allHistoryForCourseCode(code, program), addYearToObj)

export const isNeg = history => history
  .reduce((acc, current) => acc.concat(Object.values(current)), [])
  .filter(item => parseInt(item, 10))
  .map(item => parseInt(item, 10))
  .filter(number => number < 0)
  .length !== 0


export const isLess = history => history.filter(item => item.registered > 100).length === 0
