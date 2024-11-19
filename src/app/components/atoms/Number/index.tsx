import { type ReactElement } from 'react'

import { Text, type TTextProps } from '~/components/atoms/Text'
import { formatNumber } from '~/utils/numbers/formatNumber'
import { isNumber } from '~/utils/numbers/isNumber'

type TPrecisionConfig = {
  magnitude: number
  precision: number
}

export type TNumberProps = {
  isMoney?: boolean
  precision?: number | TPrecisionConfig[]
  testId?: string
  text: string | number
  textProps?: Omit<TTextProps, 'text'>
}

export function Number({
  text,
  textProps,
  testId,
  precision = 0,
  isMoney,
}: TNumberProps): ReactElement {
  if (!isNumber(text.toString())) {
    return (
      <Text
        testId={testId}
        text="0"
        variant={textProps?.variant}
        align={textProps?.align}
        color={textProps?.color}
      />
    )
  }

  let newPrecision = precision

  if (Array.isArray(newPrecision)) {
    const order = newPrecision.reverse().find((config) => {
      return parseInt(text.toString(), 10) >= config.magnitude
    })

    if (order) {
      newPrecision = order.precision
    } else {
      newPrecision = 0
    }
  }

  const formattedString = formatNumber(text.toString(), {
    precision: newPrecision,
    isMoney: !!isMoney,
  })

  return (
    <Text
      testId={testId}
      text={formattedString}
      variant={textProps?.variant}
      align={textProps?.align}
      color={textProps?.color}
    />
  )
}
