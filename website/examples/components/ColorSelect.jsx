import React from 'react'
import colors from '../../config/colors.js'

const ColorSelect = ({ color, setColor }) =>
  <select
    name="color"
    required
    value={color}
    onChange={ e => setColor(e.target.value) }
  >
    <option value="" hidden disabled selected>Color</option>
    <option value="">Default</option>
    { colors.map(
      color =>
        <option
          key={color}
          value={color}
        >
          {color}
        </option>
    )}
  </select>

export default ColorSelect