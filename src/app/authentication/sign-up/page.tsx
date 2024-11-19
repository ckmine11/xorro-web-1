'use client'

import Link from 'next/link'
import { type ReactElement } from 'react'

import { Icon } from '~/components/atoms/Icon'
import { Text } from '~/components/atoms/Text'
import { HalfAndHalfLayout } from '~/components/layout/HalfAndHalfLayout'
import { SignUpForm } from '~/components/organisms/forms/SignUpForm'

function Page(): ReactElement {
  const leftComponent = (
    <div className="hidden flex-col gap-5 p-20 pt-[150px] text-white sm:flex">
      <Text text="Create your account" variant="title3" color="white" />
      <Text
        text="We’ll need your name, email address, and a unique password. You’ll use this login to access your account next time."
        variant="body1"
        color="white"
      />
      <div className="absolute bottom-0 left-10 h-[436px] overflow-hidden opacity-25">
        <Icon name="logo" fill="#f6f" width={400} height={500} />
      </div>
    </div>
  )

  const rightComponent = (
    <div className="flex flex-col p-5 sm:p-12 sm:pt-[150px]">
      <div className="mb-6 flex flex-col gap-6">
        <Link href="/">
          <Icon name="chevronLeft" fill="#f6f" size={25} />
        </Link>
        <Text text="Getting to know you" variant="headline4" color="black" />
        <Text
          text="Enter your first and last name as they appear on your government ID."
          variant="body3"
          color="black"
        />
      </div>
      <SignUpForm />
    </div>
  )

  return (
    <HalfAndHalfLayout
      theme="blue"
      leftComponent={leftComponent}
      rightComponent={rightComponent}
    />
  )
}

export default Page
