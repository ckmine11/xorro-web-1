import Link from 'next/link'
import { type ReactElement } from 'react'

import { Text, type TTextProps } from '~/components/atoms/Text'

export type TTextLinkProps = {
  path: string
  target?: HTMLAnchorElement['target']
  testId?: string
  text: string
  textProps?: Pick<TTextProps, 'variant' | 'color'>
}

export function TextLink({
  path,
  text,
  textProps,
  testId,
  target,
}: TTextLinkProps): ReactElement {
  return (
    <Link href={path} id={testId} target={target}>
      <Text
        text={text}
        variant={textProps?.variant || 'body4-bold'}
        color={textProps?.color || 'blue-300'}
      />
    </Link>
  )
}
