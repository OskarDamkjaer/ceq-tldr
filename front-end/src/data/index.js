import {
  historyListForCourseCode, getDataForYearAndProgram, isNeg, y2018, DATA,
} from './dataFetcher'

/* Takes course code, gives courseData */
export const courseData = (courseCode, program) => {
  const history = historyListForCourseCode(courseCode, program)
  return ({
    name: history[0].name,
    history,
    xAxis: history.map(item => parseInt(item.year, 10)),
    isNeg: isNeg(history),
    isLess: history.filter(item => item.registered < 100).length > 0,
  })
}

export const lastYearForProgram = program => getDataForYearAndProgram(y2018, program)

export { DATA, INFOCOM, MASTER } from './dataFetcher'

export const excludedHeaders = ['code', 'registered', 'year', 'comments', 'category']
const graphExclude = ['name', 'code', 'comments', 'year', 'points', 'category', 'registered']
const styleMap = item => item.replace(/([A-Z])/g, ' $1').toUpperCase()
export const dataHeaders = Object.keys(getDataForYearAndProgram(y2018, DATA)[0])
export const dataHeadersStyled = dataHeaders.map(styleMap)
export const graphHeaders = dataHeaders.filter(item => !graphExclude.includes(item))
export const graphHeadersStyled = graphHeaders.map(styleMap)
