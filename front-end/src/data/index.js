import {
  historyListForCourseCode, getDataForYearAndProgram, isNeg, isLess, y2018, DATA, INFOCOM, MASTER, courseHelper,
} from './dataFetcher'


export const lastYearForProgram = program => getDataForYearAndProgram(y2018, program)

export { DATA, INFOCOM, MASTER } from './dataFetcher'
export const filterList = [DATA, INFOCOM, MASTER]

export const excludedHeaders = ['code', 'registered', 'year', 'comments', 'category']
const graphExclude = ['name', 'code', 'comments', 'year', 'points', 'category', 'registered']
const styleMap = item => item.replace(/([A-Z])/g, ' $1').toUpperCase()
export const dataHeaders = Object.keys(getDataForYearAndProgram(y2018, DATA)[0])
export const dataHeadersStyled = dataHeaders.map(styleMap)
export const graphHeaders = dataHeaders.filter(item => !graphExclude.includes(item))
export const graphHeadersStyled = graphHeaders.map(styleMap)

/* Takes course code and gives program for course, gives empty string if no match */
export const getProgram = course => (courseHelper(course) !== '' ? courseHelper(course) : '')

/* Takes course code and gives true or false if is course, gives empty string if no match */
export const isCourse = course => courseHelper(course) !== ''

/* Takes course start and gives suggested course code */
export const courseSuggestion = (courseStart) => 
  // todo
   courseStart


/* Takes course code, gives courseData */
export const courseData = (courseCode) => {
  const history = historyListForCourseCode(courseCode.toUpperCase(), getProgram(courseCode))
  return ({
    name: history[0].name,
    history,
    xAxis: history.map(item => parseInt(item.year, 10)),
    isNeg: isNeg(history),
    isLess: isLess(history),
  })
}
