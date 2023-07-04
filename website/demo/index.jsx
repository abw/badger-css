import React, { useState } from 'react'
import RangeSelect from './control/RangeSelect.jsx'

const Demo = () => {
  const [options, setOptions] = useState({ })
  const toggleOption = name => () => setOptions(
    options => ({
      ...options,
      [name]: ! options[name]
    })
  )
  const setOption = name => value => setOptions(
    options => ({
      ...options,
      [name]: value
    })
  )

  return (
    <div>
      <RangeSelect
        range={options.range}
        setRange={setOption('range')}
      />
    </div>
  )
}

export default Demo