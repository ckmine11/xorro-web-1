export function orderOfMagnitude(number: number): number {
  const order = Math.floor(Math.log(number) / Math.LN10 + 0.000000001) // because float math sucks like that

  return Math.pow(10, order)
}
