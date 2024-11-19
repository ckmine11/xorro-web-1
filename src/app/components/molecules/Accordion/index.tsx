import clsx from 'clsx'
import {
  createContext,
  type PropsWithChildren,
  type ReactNode,
  useContext,
  useState,
} from 'react'

import { Icon } from '~/components/atoms/Icon'

export interface IAccordionProps extends PropsWithChildren {
  isInitiallyExpanded?: boolean
  testId?: string
}

type TAccordionContext = {
  isExpanded: boolean
  testId?: string
  toggle: () => void
}

const AccordionContext = createContext<TAccordionContext>({
  isExpanded: false,
  toggle: () => {},
  testId: undefined,
})

// Implement a react context that tracks the state of the accordion
export function Accordion({
  children,
  testId,
  isInitiallyExpanded = false,
}: IAccordionProps): ReactNode {
  const [isExpanded, setIsExpanded] = useState(isInitiallyExpanded)

  function toggle(): void {
    setIsExpanded((prev) => {
      return !prev
    })
  }

  return (
    <AccordionContext.Provider value={{ testId, isExpanded, toggle }}>
      {children}
    </AccordionContext.Provider>
  )
}

Accordion.Content = function AccordionContent({
  children,
}: PropsWithChildren): ReactNode {
  const { isExpanded } = useContext(AccordionContext)

  return (
    <div
      className={clsx({
        hidden: !isExpanded,
      })}
    >
      {children}
    </div>
  )
}

Accordion.Toggler = function AccordionToggler({
  fill,
  size,
}: {
  fill?: string
  size?: number
}): ReactNode {
  const { toggle, testId, isExpanded } = useContext(AccordionContext)

  return (
    <div
      onClick={toggle}
      data-testid={`accordion-${testId}-toggler`}
      className={clsx('inline-flex cursor-pointer', {
        'rotate-180': isExpanded,
      })}
    >
      <Icon name="chevronDownCircle" size={size} fill={fill} stroke={fill} />
    </div>
  )
}

Accordion.useAccordion = function useAccordion(): TAccordionContext {
  return useContext(AccordionContext)
}
