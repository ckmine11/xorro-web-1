const SHORTENING_THRESHOLD = 10000

// Takes any string and formats it as a number, or, as a short number with K, M, B, T, etc.
// with commas and decimals
type TOptions = {
  isMoney?: boolean
  precision?: number
}

export function formatNumber(text: string, options?: TOptions): string {
  const precision = options?.precision ?? 0
  const isMoney = options?.isMoney ?? false
  const number = Number(text)

  // Add decimals
  const numberWithDecimals = number.toFixed(precision)

  const shouldShorten = number >= SHORTENING_THRESHOLD

  if (isMoney) {
    if (shouldShorten) {
      return new Intl.NumberFormat('en', {
        style: 'currency',
        currency: 'USD',
        notation: 'compact',
        compactDisplay: 'short',
        minimumFractionDigits: precision,
        maximumFractionDigits: precision,
      }).format(Number(numberWithDecimals))
    }

    return new Intl.NumberFormat('en', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: precision,
      maximumFractionDigits: precision,
    }).format(Number(numberWithDecimals))
  }

  // Shorten number 50000 -> 50K
  if (shouldShorten) {
    return new Intl.NumberFormat('en', {
      notation: 'compact',
      compactDisplay: 'short',
      minimumFractionDigits: precision,
      maximumFractionDigits: precision,
    }).format(Number(numberWithDecimals))
  }

  // Add commas by using Intl
  return new Intl.NumberFormat('en', {
    minimumFractionDigits: precision,
    maximumFractionDigits: precision,
  }).format(Number(numberWithDecimals))
}
