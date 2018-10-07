import {
  orderedHeaders, orderedHeadersStyled, orderedHeadersFiltered, orderedHeadersStyledFiltered,
  latestData, courseHistoryYears,
  xAxArray, nameByCourse,
  isNeg, isLess,
} from './OldDataManagement'

/* tableHeaders: object with headers for table. */
export const tableHeaders = {
  headers: orderedHeaders,
  styledHeaders: orderedHeadersStyled,
}
/* graphHeaders: object with headers for graph. */
export const graphHeaders = {
  headers: orderedHeadersFiltered,
  styledHeaders: orderedHeadersStyledFiltered,
}
/* excludedHeaders: list of Headers that is excluded from  */
export const excludedHeaders = ['year', 'code']

/* recentData: gives data from last year */
export const recentData = latestData

/* Takes course code, gives courseData */
export const courseData = courseCode => (
  {
    name: nameByCourse(courseCode),
    history: courseHistoryYears(courseCode),
    xAxis: xAxArray(courseCode),
    isNeg: isNeg(courseCode),
    isLess: isLess(courseCode),
  }
)
