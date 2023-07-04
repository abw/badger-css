import React from 'react'

const widths = [
  0, 1, 2, 3, 4, 5, 6, 8, 10
]

const BorderWidthSelect = ({ borderWidth, setBorderWidth }) =>
  <select
    name="borderWidth"
    required
    value={borderWidth}
    onChange={ e => setBorderWidth(e.target.value) }
  >
    <option value="" hidden disabled selected>Border</option>
    <option value="">Default</option>
    { widths.map(
      width =>
        <option
          key={width}
          value={width}
        >
          width: {width}
        </option>
    )}
  </select>

export default BorderWidthSelect