import React, { useState } from 'react'
import Controls from './Controls.jsx'
import Div from './Div.jsx'

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
    <div className="grid gap-8">
      <Controls
        options={options}
        setOption={setOption}
        toggleOption={toggleOption}
      />
      <Div options={options}/>
    </div>
  )
}

export default Demo