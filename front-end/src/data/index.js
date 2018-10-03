import {
  orderedHeaders, orderedHeadersStyled, orderedHeadersFiltered, orderedHeadersStyledFiltered,
  latestData, courseHistoryYears,
  xAxArray, nameByCourse,
  isNeg, isLess,
} from './DataManagement'

/* tableHeaders: gives object with headers for table. */
export const tableHeaders = () => (
  {
    headers: orderedHeaders,
    styledHeaders: orderedHeadersStyled,
  }
)
/* graphHeaders: gives object with headers for graph. */
export const graphHeaders = () => (
  {
    headers: orderedHeadersFiltered,
    styledHeaders: orderedHeadersStyledFiltered,
  }
)
/* latestData: returns data from last year */
export {
  latestData,
}
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
