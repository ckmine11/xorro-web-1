export function roundToNearest(
  numberToRound: number,
  numberToRoundTo: number,
): number {
  return Math.round(numberToRound / numberToRoundTo) * numberToRoundTo
}

export function roundDownToNearest(
  numberToRound: number,
  numberToRoundTo: number,
): number {
  return Math.floor(numberToRound / numberToRoundTo) * numberToRoundTo
}

export function roundUpToNearest(
  numberToRound: number,
  numberToRoundTo: number,
): number {
  return Math.ceil(numberToRound / numberToRoundTo) * numberToRoundTo
}
