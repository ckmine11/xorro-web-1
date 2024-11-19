import { expect, test } from 'bun:test'

import { formatNumber } from './formatNumber'

test('formatNumber', () => {
  expect(formatNumber('0')).toBe('0')
  expect(formatNumber('-0')).toBe('0')

  expect(formatNumber('-1234')).toBe('-1,234')
  expect(formatNumber('1234', { precision: 2 })).toBe('1,234.00')
  expect(formatNumber('1234.567', { precision: 0 })).toBe('1,235') // Rounded up
  expect(formatNumber('1234.567', { precision: 1 })).toBe('1,234.6') // Rounded up
  expect(formatNumber('1234.567', { precision: 2 })).toBe('1,234.57') // Rounded up last digit

  expect(formatNumber('9999')).toBe('9,999')
  expect(formatNumber('10000')).toBe('10K')
  expect(formatNumber('10400', { precision: 1 })).toBe('10.4K')

  // K
  expect(formatNumber('500000')).toBe('500K')
  expect(formatNumber('500000', { precision: 2 })).toBe('500.00K')
  expect(formatNumber('520900', { precision: 1 })).toBe('520.9K')
  expect(formatNumber('520930', { precision: 2 })).toBe('520.93K')

  // M
  expect(formatNumber('214000000')).toBe('214M')
  expect(formatNumber('214000000.00', { precision: 2 })).toBe('214.00M')
  expect(formatNumber('96400000', { precision: 1 })).toBe('96.4M')
  expect(formatNumber('96400000', { precision: 2 })).toBe('96.40M')

  // Fractions
  expect(formatNumber('0.9123')).toBe('1')
  expect(formatNumber('-0.9123')).toBe('-1')
  expect(formatNumber('0.9123', { precision: 1 })).toBe('0.9')
  expect(formatNumber('0.9123', { precision: 2 })).toBe('0.91')
  expect(formatNumber('-0.9123', { precision: 2 })).toBe('-0.91')

  // Money
  expect(formatNumber('0.91', { precision: 2, isMoney: true })).toBe('$0.91')
  expect(formatNumber('9000', { precision: 0, isMoney: true })).toBe('$9,000')
  expect(formatNumber('-9000', { precision: 0, isMoney: true })).toBe('-$9,000')
  expect(formatNumber('500000', { precision: 0, isMoney: true })).toBe('$500K')
  expect(formatNumber('520930', { precision: 2, isMoney: true })).toBe(
    '$520.93K',
  )
})
