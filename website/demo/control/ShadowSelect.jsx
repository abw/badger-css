import React from 'react'
import Swatch from './Swatch.jsx'
import { hasValue } from '@abw/badger-utils'
import { range as numberRange } from '@abw/badger-utils'

const ShadowSelect = ({
  shadow, setShadow,
  className,
  title='Shadow',
  prefix='shadow',
  range
}) =>
  <div>
    <div className="flex space mar-b-2">
      <h3>{title}</h3>
      <h3>
        { hasValue(shadow) &&
          <code>{prefix}-{shadow}</code>
        }
      </h3>
    </div>
    <div className={`${className} grid-fit gap-2`} style={{ '--min-width': '2em' }}>
      { numberRange(0, 5).map(
        n =>
          <Swatch
            key={n}
            color={range}
            className="wide"
            alt={<span className="font-mono">{n}</span>}
            selected={shadow === n}
            select={() => setShadow(n)}
          />
      )}
    </div>
  </div>

export default ShadowSelect