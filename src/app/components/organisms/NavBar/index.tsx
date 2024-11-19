import Link from 'next/link'
import { $path } from 'next-typesafe-url'
import { type ReactElement } from 'react'

import { Icon } from '~/components/atoms/Icon'
import { NavBarItem } from '~/components/atoms/NavBarItem'
import { Text } from '~/components/atoms/Text'

export function NavBar({
  currentPath,
  isAuthenticated = false,
}: {
  currentPath: string
  isAuthenticated: boolean
}): ReactElement {
  return (
    <div className="flex h-20 bg-black">
      <div className="container flex flex-1 items-center justify-between gap-6 px-8">
        <div className="flex flex-1 items-center">
          <Icon name="logo" size={52} />
          <div className="ml-5 flex items-center gap-8">
            <NavBarItem
              text="Campaigns"
              href={$path({ route: '/campaigns' })}
              iconName="rocket"
              isSelected={currentPath === '/campaigns'}
            />
            <NavBarItem
              text="Wallet"
              href={$path({ route: '/wallet' })}
              iconName="wallet"
              isSelected={currentPath === '/wallet'}
            />
            <NavBarItem
              text="Portfolio"
              href={$path({ route: '/portfolio' })}
              iconName="lineChart"
              isSelected={currentPath === '/portfolio'}
            />
          </div>
        </div>
        <div className="flex flex-shrink-0 items-center gap-6">
          <Icon name="bell" fill="white" size={24} />
          <Icon name="magnifyingGlass" fill="white" size={24} />
          {isAuthenticated && (
            <>
              <div className="h-8 w-8 rounded-full bg-gray-600" />
              <Link href={$path({ route: '/authentication/log-out' })}>
                <Text text="Log out" variant="body4-bold" color="white" />
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
