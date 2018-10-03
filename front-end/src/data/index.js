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

/* Color scheme  */
export const colorArray = ['#3F2A36', '#DB2580', '#C5E1A0', '#75BBC0', '#117D69', '#FAE8C4', '#66D594', '#3F2A36', '#DB2580', '#C5E1A0', '#75BBC0', '#117D69', '#FAE8C4', '#66D594']

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
