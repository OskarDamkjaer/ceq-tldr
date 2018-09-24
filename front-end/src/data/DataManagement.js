import pureData from './pureScrapeData'

const scrapeData = Object.values(pureData).filter((item, index) => index !== 2)
const scrapeKeys = Object.keys(pureData[0]).filter((item, index) => index !== 2)

export const orderedHeaders = [scrapeKeys[4], ...scrapeKeys.slice(0, 4), ...scrapeKeys.slice(5)]
export const latestData = scrapeData.reduce((acc, processing) => {
  const containsCurrCourse = acc.filter(item => item.code === processing.code).length > 0

  if (containsCurrCourse) {
    const processingYear = parseInt(processing.year.slice(-2), 10)
    const notInteresting = acc.filter(current => current.code !== processing.code)
    const interesting = acc.filter(current => current.code === processing.code)
    return interesting
      .map(current => (
        parseInt(current.year.slice(-2), 10) > processingYear ? current : processing))
      .concat(notInteresting)
  }
  return acc.concat(processing)
}, [])
