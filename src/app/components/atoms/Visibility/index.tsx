import { type PropsWithChildren, type ReactElement } from 'react'

export function Visibility(): void {}

Visibility.Sx = function ({ children }: PropsWithChildren): ReactElement {
  return <span className="contents md:hidden">{children}</span>
}

Visibility.Md = function ({ children }: PropsWithChildren): ReactElement {
  return <span className="hidden md:contents">{children}</span>
}
