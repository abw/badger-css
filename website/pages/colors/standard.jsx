import React, { useState } from 'react'
import { palette, colors }  from '../../config/colors.js'
import { range as numberRange } from '@abw/badger-utils'
import { dark } from '../../utils/color.js'
import Checkbox from '../../ui/Checkbox.jsx'
import CodeBlock from '../../site/CodeBlock.jsx'
import hues from '../../snippets/sass/color-hues.scss?raw'

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
    <div className="prose">
      <h1>Standard Colors</h1>
      <p>
        The following standard color ranges are defined.
      </p>
      <div className="text-right color-options">
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

      <h2>Color Variables</h2>
      <p>
        The color names are <code>red</code>, <code>brown</code>,{' '}
        <code>orange</code>, <code>yellow</code>, <code>olive</code>,{' '}
        <code>green</code>, <code>blue</code>, <code>indigo</code>,{' '}
        <code>violet</code>, <code>purple</code>, <code>pink</code> and{' '}
        <code>maroon</code>.
        The <code>$color-names</code> SASS variable is defined as a list of
        these color names.
      </p>
      <p>
        The color stops are <code>0</code> (very close to black) ranging to{' '}
        <code>100</code> (very close to white) in increments of 10.  The{' '}
        <code>$color-stops</code> SASS variable is defined as a list of these
        color stops.
      </p>
      <p>
        Each of the colours show above has a corresponding SCSS variable composed
        of the color name and stop delimited by a hyphen, e.g.{' '}
        <code>$red-0</code> through to <code>$grey-100</code>.  They are also
        defined as CSS custom properties, e.g. <code>--red-0</code> through
        to <code>--grey-100</code>.
      </p>
      <p>
        Each range of colors is built from a base hue.  These are defined in
        SASS variables using the SASS <code>!default</code> flag.  If you want
        to adjust the hues you can set any of these SASS variables
        before importing the main <code>badger-ui.scss</code> component.
      </p>
      <CodeBlock
        code={hues}
        caption="Customising Hues"
        language='scss'
        expand
      />
    </div>
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
