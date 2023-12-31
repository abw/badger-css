import React from 'react'

const Checkbox = ({label, checked, toggle}) =>
  <label className="checkbox no-focus inline">
    <input
      type="checkbox"
      checked={checked}
      onChange={toggle}
    />
    {label}
  </label>

export default Checkbox