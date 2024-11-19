import { expect, test } from 'bun:test'

import { isNumber } from './isNumber'

test('isNumber', () => {
  expect(isNumber('')).toBe(false)
  expect(isNumber('0')).toBe(true)
  expect(isNumber('1')).toBe(true)
  expect(isNumber('1.1')).toBe(true)
  expect(isNumber('1.1.1')).toBe(false)
  expect(isNumber('a')).toBe(false)
  expect(isNumber('1a')).toBe(false)
  expect(isNumber('a1')).toBe(false)
  expect(isNumber('1a1')).toBe(false)
  expect(isNumber('1.1a')).toBe(false)
  expect(isNumber('1.1a1')).toBe(false)
  expect(isNumber('1.1.1')).toBe(false)
  expect(isNumber('-0')).toBe(true)
  expect(isNumber('-1')).toBe(true)
  expect(isNumber('-1.1')).toBe(true)
  expect(isNumber('-1.1.1')).toBe(false)
})
