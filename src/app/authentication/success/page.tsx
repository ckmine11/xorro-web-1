import Image from 'next/image'
import { type ReactElement } from 'react'

import { Button } from '~/components/atoms/Button'
import { Text } from '~/components/atoms/Text'

function Page(): ReactElement {
  return (
    <div className="flex min-h-screen flex-col items-center bg-black sm:flex-row sm:bg-white">
      <div className="hidden w-1/2 flex-col gap-5 bg-black p-20 pt-[90px] text-white sm:flex">
        <Text text="Hello there," variant="title3" color="white" />
        <Text text="Welcome to Xorro!" variant="body1" color="white" />
        <Text
          text=" Thank you for creating your account with us and sharing the success of your creators"
          variant="body1"
          color="white"
        />

        <div className="relative aspect-square">
          <Image
            src="/media/images/successLogo.png"
            alt="Success Logo"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>

      {/* Right Section (Shared for both mobile and desktop) */}
      <div className="flex w-full flex-col items-center bg-white p-6 sm:w-1/2 sm:items-start sm:p-12 sm:pt-[100px]">
        <Text
          text="You successfully created your account with us"
          variant="title2"
          color="black"
        />

        {/* Image is only visible on larger screens, hidden on mobile */}
        <Image
          src="/media/images/successLogo.png"
          alt="Success Logo"
          width={250}
          height={250}
          className="block sm:hidden"
        />

        <div className="mt-6 flex flex-col items-center gap-4 sm:items-start">
          <Text
            text="We are pleased to welcome you, before we get started we need the following documents from you"
            variant="body3-bold"
            color="black"
          />

          <ul className="list-disc space-y-2 text-left">
            <li>
              <Text
                text="Verifying your identity"
                variant="body3"
                color="black"
              />
            </li>
            <li>
              <Text
                text="Financial details and assets"
                variant="body3"
                color="black"
              />
            </li>
            <li>
              <Text
                text="Risk and financial assessment"
                variant="body3"
                color="black"
              />
            </li>
            <li>
              <Text
                text="Document verification"
                variant="body3"
                color="black"
              />
            </li>
          </ul>
        </div>

        <Button text="Continue" />
      </div>
    </div>
  )
}

export default Page
