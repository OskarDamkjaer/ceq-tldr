import pureData from './pureScrapeData'

const scrapeData = Object.values(pureData).filter((item, index) => index !== 2)
const scrapeKeys = Object.keys(pureData[0]).filter((item, index) => index !== 2)

export const orderedHeaders = [scrapeKeys[4], ...scrapeKeys.slice(0, 4), ...scrapeKeys.slice(5)]
export const orderedHeadersStyled = orderedHeaders.map(item => item.replace(/([A-Z])/g, ' $1').toUpperCase())


const excludedHeaders = ['CODE', 'YEAR', 'POINTS']
const excludedHeadersData = ['code', 'year', 'points']
export const orderedHeadersFiltered = orderedHeaders.filter(header => !excludedHeadersData.includes(header))
export const orderedHeadersStyledFiltered = orderedHeadersStyled.filter(header => !excludedHeaders.includes(header))

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
  for (let i = 1; i < tempArray.length; i++) {
    if (parseInt(`20${tempArray[i].year.substring(3, 5)}`, 10) < parseInt(`20${tempArray[i - 1].year.substring(3, 5)}`, 10)) {
      break
    }
    resultArray.push(tempArray[i])
  }
  console.log(tempArray)
  console.log(resultArray)

  return resultArray
}
export const courseHistoryYearsTEMP = courseCode => courseHistory(courseCode)
  .filter((item, index) => item.year < courseHistory(courseCode)[index].year)

export const nameByCourse = courseCode => scrapeData
  .filter(item => item.code === courseCode)[0].name
