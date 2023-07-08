import React from 'react'
import Swatch from './Swatch.jsx'
import { hasValue } from '@abw/badger-utils'

const multiples = [0, 1, 2, 3, 4, 6, 8, 10, 12, 16, 20, 24, 28, 32]
const SpacingSelect = ({
  spacing, setSpacing,
  className,
  title,
  prefix,
  range
}) =>
  <div>
    <div className="flex space mar-b-0">
      <h3>{title}</h3>
      <h4>
        { hasValue(spacing) &&
          <code>{prefix}-{spacing}</code>
        }
      </h4>
    </div>
    <div className={`${className} grid-fit gap-2`} style={{ '--min-width': '2em' }}>
      { multiples.map(
        n =>
          <Swatch
            key={n}
            color={range}
            className="wide"
            alt={<span className="font-mono">{n}</span>}
            selected={spacing === n}
            select={() => setSpacing(n)}
          />
      )}
    </div>
  </div>

export default SpacingSelect