import { memo, type ReactElement, useEffect, useState } from 'react'

import { Number } from '~/components/atoms/Number'
import { Text } from '~/components/atoms/Text'
import { orderOfMagnitude } from '~/utils/numbers/orderOfMagnitude'
import { roundUpToNearest } from '~/utils/numbers/rounding'

const YAxisLabels = memo(function ({
  numberOfLabels = 6,
  min,
  max,
}: {
  max: number
  min: number
  numberOfLabels?: number
}): ReactElement {
  const [labels, setLabels] = useState<string[]>([])

  useEffect(() => {
    const newLabels: string[] = [min.toString()]
    const distance = max - min
    // Each label should jump this amount
    //
    // Example:
    // Max 300, min 100, numberOfLabels 5
    // Distance 200
    // Interval 200 / 4 = 50
    // Labels: 100, 150, 200, 250, 300
    const interval = distance / (numberOfLabels - 1)

    for (let i = 0; i < numberOfLabels - 2; i++) {
      // Calculate the point in the middle of the interval
      const point = interval * (i + 1) + min
      newLabels.push(point.toString())
    }
    newLabels.push(max.toString())

    setLabels(newLabels.reverse())
  }, [min, max, numberOfLabels])

  return (
    <>
      {labels.map((label) => {
        return (
          <div className="flex flex-1 items-end" key={label}>
            <Number
              text={label.toString()}
              precision={[
                {
                  magnitude: 1_000_000,
                  precision: 1,
                },
              ]}
              textProps={{
                variant: 'caption',
                color: 'grey-400',
              }}
            />
          </div>
        )
      })}
    </>
  )
})

const YAxisDividers = memo(function ({
  numberOfLabels = 6,
}: {
  numberOfLabels?: number
}): ReactElement {
  return (
    <>
      {Array.from({ length: numberOfLabels }).map((_, i) => {
        // No other way to fix this in this cae
        // eslint-disable-next-line react/no-array-index-key
        return <div key={i} className="flex-1 border-b border-[#EFF1F3]" />
      })}
    </>
  )
})

function Bars({ max, data }: { data: number[]; max: number }): ReactElement {
  return (
    <>
      {data.map((val) => {
        return (
          <div key={val} className="group flex h-full flex-1 items-end">
            <div
              key={val}
              className="relative flex flex-1 justify-center"
              style={{ height: `${(val / max) * 100}%` }}
            >
              <div className="absolute -top-2 left-[50%] z-10 hidden -translate-x-[50%] -translate-y-full rounded bg-black/75 px-1 group-hover:block">
                <Number
                  text={val}
                  textProps={{
                    variant: 'caption',
                    color: 'white',
                  }}
                  precision={[
                    {
                      magnitude: 1_000_000,
                      precision: 1,
                    },
                  ]}
                />
                <div className="t-full absolute left-[50%] -translate-x-[50%] border-[5px] border-b-0 border-transparent border-t-black/75" />
              </div>
              <div key={val} className="h-full w-1 rounded bg-[#687787]" />
            </div>
          </div>
        )
      })}
    </>
  )
}

function XAxisLabels({ labels }: { labels: string[] }): ReactElement {
  return (
    <>
      {labels.map((label) => {
        return (
          <div key={label} className="flex flex-1 justify-center">
            <Text text={label} variant="caption" />
          </div>
        )
      })}
    </>
  )
}

export function BarChart({
  numberOfYLabels = 6,
  data,
  xLabels,
  useZeroAsMin,
}: {
  data: number[]
  numberOfYLabels?: number
  useZeroAsMin?: boolean
  xLabels: string[]
}): ReactElement {
  const max = Math.max(...data)
  const chosenMin = useZeroAsMin ? 0 : Math.min(...data)
  const roundedUpMax = roundUpToNearest(max, orderOfMagnitude(max))

  return (
    <div className="grid grid-cols-[fit-content(1px)_1fr]">
      <div className="mr-2">
        <div className="flex h-full flex-col items-end">
          <YAxisLabels
            min={chosenMin}
            max={roundedUpMax}
            numberOfLabels={numberOfYLabels}
          />
        </div>
      </div>
      <div className="col-span-1 h-40">
        <div className="relative flex h-full items-end gap-2">
          <div className="absolute inset-0 z-10 flex flex-col">
            <YAxisDividers numberOfLabels={numberOfYLabels} />
          </div>
          <div className="relative z-20 flex h-full flex-1 items-end">
            <Bars max={roundedUpMax} data={data} />
          </div>
        </div>
      </div>
      <div className="col-start-2 mt-2 flex">
        <XAxisLabels labels={xLabels} />
      </div>
    </div>
  )
}
