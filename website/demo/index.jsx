import React, { useState } from 'react'
import Controls from './Controls.jsx'
import Div from './Div.jsx'

const Demo = () => {
  const [options, setOptions] = useState({
    range: 'brand',
    bgc: 90,
    fgc: 30,
    hdc: 20,
    bdc: 60,
    bdr: 3,
    bdw: 2,
    pad: 4,
    mar: 6,
    shadow: 2,
    border: true
  })
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
    <div className="grid gap-8">
      <Div options={options}/>
      <Controls
        options={options}
        setOption={setOption}
        toggleOption={toggleOption}
      />
    </div>
  )
}

export default Demo