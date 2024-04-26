import { identity } from '@abw/badger-utils'
import React from 'react'

export const arrayMapCommasOr = (array, fn=identity, or='or') =>
  <>
    { array.slice(0, array.length - 2)
      .map(
        item => <>{fn(item)}, </>
      )
    }
    {fn(array.at(-2))} {or} {fn(array.at(-1))}
  </>

