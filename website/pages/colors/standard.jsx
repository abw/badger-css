import React, { useState } from 'react'
import { palette, colors }  from '../../config/colors.js'
import { range as numberRange } from '@abw/badger-utils'
import { dark } from '../../utils/color.js'
import Checkbox from '../../ui/Checkbox.jsx'

const Standard = () => {
  const [options, setOptions] = useState({
    names: false,
    info: false,
    show5s: false
  })
  const toggleOption = option => setOptions(
    options => ({ ...options, [option]: ! options[option ]})
  )
  const toggleNames  = () => toggleOption('names')
  const toggleInfo   = () => toggleOption('info')
  const toggleShow5s = () => toggleOption('show5s')

  return (
    <>
      <h1>Standard Colors</h1>
      <p>
        The following standard color ranges are defined.
      </p>
      <div className="text-right">
        <Checkbox
          label="Show Names"
          checked={options.names}
          toggle={toggleNames}
        />
        <Checkbox
          label="Show Info"
          checked={options.info}
          toggle={toggleInfo}
        />
        <Checkbox
          label="Show 5s"
          checked={options.show5s}
          toggle={toggleShow5s}
        />
      </div>
      <div className={`ranges ${options.names ? 'names' : 'nameless'}`}>
        { colors.map(
          uri =>
            <Range
              key={uri}
              uri={uri}
              range={palette.ranges[uri]}
              options={options}
            />
        )}
      </div>
    </>
  )
}

const Range = ({ uri, range, options }) =>
  <div className="range">
    { options.names && <h3>{range.name}</h3> }
    <div className="swatches">
      { numberRange(0, 100, options.show5s ? 5 : 10).map(
        stop =>
          <Color
            key={stop}
            uri={uri}
            range={range}
            stop={stop}
            options={options}
          />
      )}
    </div>
  </div>

const Color = ({ uri, range, stop, options }) => {
  const color = range.stops[stop]
  return (
    <div
      className={`swatch ${dark(color) ? 'dark' : 'light'}`}
      style={{ backgroundColor: `var(--${uri}-${stop})` }}
    >
      { options.info &&
        <Info
          uri={uri}
          stop={stop}
          color={color}
        />
      }
    </div>
  )
}

export const Info = ({ uri, stop, color }) =>
  <div>
    <div className="stop">
      {uri}-{stop}
    </div>
    <div className="specs">
      {color.hex}<br/>
      h:{color.h}&deg;<br/>
      s:{color.s}%<br/>
      l:{color.l}%
    </div>
  </div>

export default Standard
