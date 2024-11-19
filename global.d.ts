// Allow TypeScript to import SVG files using Webpack's `svgr` loader.
declare module '*.svg' {
  import React from 'react'

  const content: React.FC<React.SVGProps<SVGSVGElement>>
  export default content
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_HOST: string
      NEXT_PUBLIC_API_URL: string
      NEXT_PUBLIC_AUTH0_DOMAIN: string
      NEXT_PUBLIC_AUTH0_CLIENT_ID: string
    }
  }
}

// https://stackoverflow.com/a/53981706/451945
// We need to export an empty object to make the global module augmentation work
export {};
