const { getProgram, isCourse } = require('../')

test('Test getProgram', () => {
  expect(getProgram('MAMF50')).toBe('MASTER')
})

test('Test getProgram', () => {
  expect(getProgram('MAMF5')).toBe('')
})

test('Test isCourse', () => {
  expect(isCourse('MAMF50')).toBe(true)
})

test('Test isCourse', () => {
  expect(isCourse('MAMF5')).toBe(false)
})
