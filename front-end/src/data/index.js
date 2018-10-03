import {
  orderedHeaders, orderedHeadersStyled, orderedHeadersFiltered, orderedHeadersStyledFiltered,
  latestData, courseHistory, courseHistoryYears,
  xAxArray, nameByCourse,
  isNeg, isLess,
} from './DataManagement'

/* orderedHeaders/orderedHeadersStyled: Column headers for data fetching or visual use orderedHeadersStyled.
orderedHeadersFiltered/orderedHeadersStyledFiltered: from headers not used in graphs */
export {
  orderedHeaders, orderedHeadersStyled, orderedHeadersFiltered, orderedHeadersStyledFiltered,
}
/* latestData: returns data from last year.
    courseHistory: takes course code returns data from one course
    courseHistoryYears: takes course code parses years */
export {
  latestData, courseHistory, courseHistoryYears,
}

/* xAxArray: takes course code and gives years for x axis.
    nameByCourse takes course code and gives name */
export {
  xAxArray, nameByCourse,
}

/* isNeg: takes course code and gives boolean if course code has negative values in its array
    isLess: takes course code and checks if number of registered is less than 100
    */
export {
  isNeg, isLess,
}

/* Color scheme  */
export const colorArray = ['#3F2A36', '#DB2580', '#C5E1A0', '#75BBC0', '#117D69', '#FAE8C4', '#66D594', '#3F2A36', '#DB2580', '#C5E1A0', '#75BBC0', '#117D69', '#FAE8C4', '#66D594']
