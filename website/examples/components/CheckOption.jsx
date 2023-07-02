import React from 'react'

const CheckOption = ({checked, toggle, label}) =>
  <div className="field">
    <label className="checkbox border no-focus wide">
      <input
        type="checkbox"
        checked={checked}
        onChange={toggle}
      />
      {label}
    </label>
  </div>

export default CheckOption