import { type PropsWithChildren, type ReactElement } from 'react'

export function PageContent({ children }: PropsWithChildren): ReactElement {
  return <div className="flex flex-1 flex-col p-4 sm:p-8">{children}</div>
}
