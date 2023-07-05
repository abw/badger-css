import React from 'react'
import Swatch from './Swatch.jsx'
import { hasValue } from '@abw/badger-utils'

const multiples = [0, 1, 2, 3, 4, 5, 6, 8, 10]

const BorderSelect = ({
  border, setBorder,
  className,
  title,
  prefix,
  range
}) =>
  <div>
    <div className="flex space mar-b-2">
      <h3>{title}</h3>
      <h3>
        { hasValue(border) &&
          <code>{prefix}-{border}</code>
        }
      </h3>
    </div>
    <div className={`${className} grid-fit gap-2`} style={{ '--min-width': '2em' }}>
      { multiples.map(
        n =>
          <Swatch
            key={n}
            color={range}
            className="wide"
            alt={<span className="font-mono">{n}</span>}
            selected={border === n}
            select={() => setBorder(n)}
          />
      )}
    </div>
  </div>

export default BorderSelect