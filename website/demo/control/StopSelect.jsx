import React from 'react'
import Swatch from './Swatch.jsx'
import { hasValue, range as numberRange } from '@abw/badger-utils'

const StopSelect = ({
  stop, setStop,
  className,
  title,
  prefix
}) =>
  <div>
    <div className="flex space mar-b-2">
      <h3>{title}</h3>
      <h3>
        { hasValue(stop) &&
          <code>{prefix}-{stop}</code>
        }
      </h3>
    </div>
    <div className={`${className} grid-fit gap-2`} style={{ '--min-width': '2em' }}>
      { numberRange(0, 100, 5).map(
        n =>
          <Swatch
            key={n}
            color={`bgc-${n} bdc-${n} fgc-${n > 50 ? '0' : '100'} bgd-${n} bdd-${n} fgd-${n > 50 ? '0' : '100'}`}
            iconColor={n > 50 ? 'black' : 'white'}
            selected={stop === n}
            select={() => setStop(n)}
          />

      )}
    </div>
  </div>

export default StopSelect

