import React from 'react'
import Swatch from './Swatch.jsx'
import { hasValue } from '@abw/badger-utils'

const sizes = [
  'smallest', 'smaller', 'small',
  'medium',
  'large', 'larger', 'largest'
]
const SizeSelect = ({
  size, setSize,
  title='Size',
  range
}) =>
  <div>
    <div className="flex space mar-b-2">
      <h3>{title}</h3>
      <h3>
        { hasValue(size) &&
          <code>{size}</code>
        }
      </h3>
    </div>
    <div className={`grid-fit gap-2`} style={{ '--min-width': '2em' }}>
      { sizes.map(
        s =>
          <Swatch
            key={s}
            color={range}
            className="wide"
            alt={<span className="font-mono">{s}</span>}
            selected={size === s}
            select={() => setSize(s)}
          />
      )}
    </div>
  </div>

export default SizeSelect