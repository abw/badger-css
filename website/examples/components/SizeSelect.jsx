import React from 'react'

const sizes = [
  'smallest', 'smaller', 'small', 'smallish',
  'medium',
  'largish', 'large', 'larger', 'largest'
]

const SizeSelect = ({ size, setSize }) =>
  <select
    name="size"
    required
    value={size}
    onChange={ e => setSize(e.target.value) }
  >
    <option value="" hidden disabled selected>Size</option>
    <option value="">Default</option>
    { sizes.map(
      size =>
        <option
          key={size}
          value={size}
        >
          {size}
        </option>
    )}
  </select>

export default SizeSelect