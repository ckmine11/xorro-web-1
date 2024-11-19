import { type ReactElement, useEffect, useState } from 'react'

import { Tab } from '~/components/atoms/Tab'

type TTabProps = {
  activeTabIndex: number
  onTabPress: (tabIndex: number) => void
  tabs: string[]
}

export function Tabs({
  tabs,
  activeTabIndex,
  onTabPress,
}: TTabProps): ReactElement {
  const [currentActiveIndex, setCurrentActiveIndex] = useState(
    activeTabIndex < tabs.length && activeTabIndex >= 0 ? activeTabIndex : 0,
  )

  useEffect(() => {
    if (activeTabIndex < tabs.length && activeTabIndex >= 0) {
      setCurrentActiveIndex(activeTabIndex)
    } else {
      console.error('Invalid activeTabIndex prop')
      setCurrentActiveIndex(0)
    }
  }, [activeTabIndex, tabs.length])

  const handleTabPress = (index: number): void => {
    if (index < tabs.length && index !== currentActiveIndex && index >= 0) {
      setCurrentActiveIndex(index)
      onTabPress(index)
    } else {
      console.error('Invalid tab index')
      setCurrentActiveIndex(0)
      onTabPress(0)
    }
  }

  return (
    <div className="flex touch-pan-x space-x-2 overflow-x-auto">
      {tabs.map((tabTitle, index) => {
        return (
          <Tab
            key={tabTitle}
            text={tabTitle}
            isActive={currentActiveIndex === index}
            onPress={() => {
              return handleTabPress(index)
            }}
          />
        )
      })}
    </div>
  )
}
