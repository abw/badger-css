import React from 'react'

const sizes = [
  'smallest', 'smaller', 'small',
  'medium',
  'large', 'larger', 'largest'
]

const SizeRadio = ({ size, setSize }) =>
  <div>
    { sizes.map(
      s =>
        <label key={s}>
          <input
            type="radio"
            name="size"
            value={s}
            checked={s === size}
            onChange={e => setSize(e.target.value)}
          />
          {s}
        </label>
    )}
  </div>

export default SizeRadio