import {
  historyListForCourseCode, getDataForYearAndProgram, isNeg, isLess, y2018, DATA, INFOCOM, MASTER,
} from './dataFetcher'

/* Takes course code, gives courseData */
export const courseData = (courseCode, program) => {
  const history = historyListForCourseCode(courseCode, program)
  return ({
    name: history[0].name,
    history,
    xAxis: history.map(item => parseInt(item.year, 10)),
    isNeg: isNeg(history),
    isLess: isLess(history),
  })
}

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
