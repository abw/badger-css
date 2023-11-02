import React from 'react'

const CheckOption = ({checked, toggle, label}) =>
  <label className="checkbox border no-focus">
    <input
      type="checkbox"
      checked={checked}
      onChange={toggle}
    />
    {label}
  </label>

export default CheckOption