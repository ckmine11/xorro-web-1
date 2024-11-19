import { cva, type VariantProps } from 'cva'
import { type ReactElement } from 'react'
import { twMerge } from 'tailwind-merge'

import { Icon, type TIconNames } from '~/components/atoms/Icon'
import { Text } from '~/components/atoms/Text'

const tagStyles = cva('inline-flex items-center gap-1 rounded border', {
  variants: {
    variant: {
      success: 'bg-[#C6F3F1] text-[#00A198] border-[#0DCDC1]',
      warning: 'bg-[#FCEDD7] text-[#AD7B00] border-[#D69900]',
      danger: 'bg-[#FADBD3] text-[#FA4F33] border-[#FF8958]',
      ended: 'bg-[#F7F8F9] text-[#7B858F] border-[#BAC2CA]',
    },
    size: {
      default: 'py-1 px-2',
      small: 'py-1 px-2',
    },
  },
  defaultVariants: {
    variant: 'success',
    size: 'default',
  },
})

export interface ITagProps extends VariantProps<typeof tagStyles> {
  iconName?: TIconNames
  text: string
}

export function Tag({
  variant,
  text,
  iconName,
  size,
}: ITagProps): ReactElement {
  return (
    <div
      className={twMerge(
        tagStyles({
          variant,
          size,
        }),
      )}
    >
      {iconName && (
        <Icon
          name={iconName}
          fill="currentColor"
          size={size === 'small' ? 12 : 16}
        />
      )}
      <Text
        text={text}
        variant={size === 'small' ? 'caption3-bold' : 'caption2-bold'}
        color="currentColor"
      />
    </div>
  )
}
