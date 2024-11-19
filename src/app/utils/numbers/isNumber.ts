export function isNumber(text: string): boolean {
  // Empty string special case
  if (text === '') {
    return false
  }

  return !isNaN(Number(text))
}
