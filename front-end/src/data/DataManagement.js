import pureData from './pureScrapeData'

const scrapeData = Object.values(pureData).filter((item, index) => index !== 2)
const scrapeKeys = Object.keys(pureData[0]).filter((item, index) => index !== 2)

export const orderedHeaders = [scrapeKeys[4], ...scrapeKeys.slice(0, 4), ...scrapeKeys.slice(5)]
export const orderedHeadersStyled = orderedHeaders.map(item => item.replace(/([A-Z])/g, ' $1').toUpperCase())


const excludedHeaders = ['NAME', 'CODE', 'COMMENTS', 'YEAR', 'POINTS', 'REGISTERED']
const excludedHeadersData = ['name', 'code', 'comments', 'year', 'points', 'registered']
export const orderedHeadersFiltered = orderedHeaders
  .filter(header => !excludedHeadersData.includes(header))
export const orderedHeadersStyledFiltered = orderedHeadersStyled
  .filter(header => !excludedHeaders.includes(header))

export const latestData = scrapeData.reduce((acc, processing) => {
  const containsCurrCourse = acc.filter(item => item.code === processing.code).length > 0
  if (containsCurrCourse) {
    const processingYear = parseInt(processing.year.slice(-2), 10)
    const notInteresting = acc.filter(current => current.code !== processing.code)
    const interesting = acc.filter(current => current.code === processing.code)
    return interesting
      .map(current =>
        (parseInt(current.year.slice(-2), 10) > processingYear ? current : processing))
      .concat(notInteresting)
  }
  return acc.concat(processing)
}, [])

export const courseHistory = courseCode => scrapeData
  .filter(item => item.code === courseCode)

export function courseHistoryYears(courseCode) {
  const tempArray = courseHistory(courseCode).concat()
  const resultArray = []
  resultArray.push(tempArray[0])
  for (let i = 1; i < tempArray.length; i += 1) {
    if (parseInt(`20${tempArray[i].year.substring(3, 5)}`, 10) < parseInt(`20${tempArray[i - 1].year.substring(3, 5)}`, 10)) {
      break
    }
    resultArray.push(tempArray[i])
  }
  return resultArray
}

export function xAxArray(courseCode) {
  const yearsArray = []
  courseHistoryYears(courseCode).map(item => yearsArray.push(parseInt(`20${item.year.substring(3, 5)}`, 10)))
  return yearsArray
}

export const nameByCourse = courseCode => scrapeData
  .filter(item => item.code === courseCode)[0].name


export const isNeg = (courseCode) => {
  const allArray = []
  courseHistoryYears(courseCode).map(item => allArray.push(...Object.values(item)))
  return Math.sign(Math.min(...allArray.map(item => parseInt(item, 10)).filter(Boolean))) <= 0
}
export const isLess = (courseCode) => {
  const allArray = []
  courseHistoryYears(courseCode).map(item => allArray.push(item.registered))
  return Math.max(...allArray) < 100
}
