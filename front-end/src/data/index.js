import {
  historyListForCourseCode, getDataForYearAndProgram, isNeg, isLess, y2018,
  DATA, INFOCOM, MASTER, courseHelper,
} from './dataFetcher'


export const lastYearForProgram = program => getDataForYearAndProgram(y2018, program)

export { DATA, INFOCOM, MASTER } from './dataFetcher'
export const filterList = [DATA, INFOCOM, MASTER]

export const excludedHeaders = ['code', 'registered', 'year', 'comments', 'category']
const graphExclude = ['name', 'code', 'comments', 'year', 'points', 'category', 'registered']
const styleMap = item => item.replace(/([A-Z])/g, ' $1').toUpperCase()
export const dataHeaders = Object.keys(getDataForYearAndProgram(y2018, DATA)[0])
export const dataHeadersStyled = dataHeaders.map(styleMap)
export const headers = dataHeaders.filter(item => !graphExclude.includes(item))
export const headersStyled = headers.map(styleMap)

/* Takes course code and gives program for course, gives empty string if no match */
export const getProgram = course => (courseHelper(course) !== '' ? courseHelper(course) : '')

/* Takes course code and gives true or false if is course, gives empty string if no match */
export const isCourse = course => courseHelper(course) !== ''

/* Takes course start and gives suggested course code */
export const courseSuggestion = (courseStart) => {
  const relevantData = getDataForYearAndProgram(y2018, DATA)
    .concat(getDataForYearAndProgram(y2018, INFOCOM))
    .concat(getDataForYearAndProgram(y2018, MASTER))
  let tempData = relevantData.filter(obj => obj.code.includes(courseStart.toUpperCase())
  && courseStart.length > 0)
  if (!tempData[0] && courseStart.length > 0) {
    tempData = relevantData
      .filter(obj => obj.name.toUpperCase().includes(courseStart.toUpperCase()))
  }
  return tempData[0] ? { name: tempData[0].name, code: tempData[0].code } : ''
}

/* Takes course code, gives courseData */
export const courseData = (courseCode, filter) => {
  const history = filter
    ? historyListForCourseCode(courseCode.toUpperCase(), filter)
    : historyListForCourseCode(courseCode.toUpperCase(), getProgram(courseCode))
  return ({
    name: history[0].name,
    history,
    xAxis: history.map(item => parseInt(item.year, 10)),
    isNeg: isNeg(history),
    isLess: isLess(history),
  })
}
