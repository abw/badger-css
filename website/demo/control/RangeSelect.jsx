import React from 'react'
import { colors } from '../../config/colors.js'
import Icon from '../../ui/Icon.jsx'

const RangeSelect = ({ range, setRange }) =>
  <div className={`grid-${colors.length} gap-2`}>
    { colors.map(
      color =>
        <button
          key={color}
          className={`${color} icon`}
          onClick={() => setRange(color)}
        >
          <Icon
            name={range === color ? 'checked' : 'unchecked'}
          />
        </button>
    )}
  </div>

export default RangeSelect