import clsx from 'clsx'
import { cva, type VariantProps } from 'cva'
import { type ReactElement } from 'react'
import { twMerge } from 'tailwind-merge'

import { Spinner } from '~/components/atoms/Spinner'

const buttonStyles = cva(
  'relative flex items-center justify-center text-sm font-gilroy-bold rounded-full',
  {
    variants: {
      variant: {
        primary: 'bg-[#FA4F33] text-white hover:bg-[#FF1E00]',
        secondary: 'bg-[#EFF1F2] text-[#001018] hover:bg-[#D9DDE1]',
        tertiary:
          'bg-white text-[#001018] border border-[#FA4F33] hover:border-[#FF1E00]',
      },
      size: {
        large: 'h-14 px-12',
        medium: 'h-12 px-10',
        small: 'h-8 px-5',
      },
      isDisabled: {
        true: 'cursor-not-allowed',
      },
      isLoading: {
        true: 'pointer-events-none',
      },
      inline: {
        false: 'w-full',
      },
    },
    compoundVariants: [
      {
        variant: 'primary',
        isDisabled: true,
        className: 'bg-[#FADBD3] text-[#FF8958]  hover:bg-[#FADBD3]',
      },
      {
        variant: 'secondary',
        isDisabled: true,
        className: 'bg-[#F7F8F9] text-[#BAC2CA]  hover:bg-[#F7F8F9]',
      },
      {
        variant: 'tertiary',
        isDisabled: true,
        className: 'border-[#FCB5A2] text-[#BAC2CA]  hover:border-[#FCB5A2]',
      },
      {
        variant: 'primary',
        isLoading: true,
        className: 'bg-[#FF1E00]',
      },
      {
        variant: 'secondary',
        isLoading: true,
        className: 'bg-[#D9DDE1]',
      },
      {
        variant: 'tertiary',
        isLoading: true,
        className: 'border-[#FA4F33]',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'large',
      inline: true,
    },
  },
)

export interface IButtonProps extends VariantProps<typeof buttonStyles> {
  isDisabled?: boolean
  isLoading?: boolean
  onPress?: () => void
  text: string
  type?: HTMLButtonElement['type']
}

export function Button({
  variant = 'primary',
  size = 'large',
  text,
  onPress,
  isDisabled,
  isLoading,
  type = 'button',
  inline,
}: IButtonProps): ReactElement {
  return (
    <button
      type={type}
      className={twMerge(
        buttonStyles({
          isDisabled,
          isLoading,
          variant,
          size,
          inline,
        }),
      )}
      disabled={isDisabled}
      onClick={isDisabled || isLoading ? undefined : onPress}
    >
      <span
        className={clsx({
          'opacity-0': !isDisabled && isLoading,
        })}
      >
        {text}
      </span>
      {!isDisabled && isLoading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <Spinner variant={variant === 'primary' ? 'secondary' : 'tertiary'} />
        </span>
      )}
    </button>
  )
}
