import React, { useState }      from 'react'
import Checkbox                 from '@/ui/Checkbox.jsx'
import { dark }                 from '@/utils/color.js'
import { Snippet }              from '@abw/badger-website'
import { range as numberRange } from '@abw/badger-utils'
import { palette, colors }      from '@/config/colors.js'

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
        The following greyscale ranges are also defined.
      </p>
      <div className="flex space end">
        <h2>Greyscale Ranges</h2>
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
      </div>
      <div className={`ranges ${options.names ? 'names' : 'nameless'}`}>
        { colors.filter( c => palette.ranges[c].greyscale ).map(
          uri =>
            <Range
              key={uri}
              uri={uri}
              range={palette.ranges[uri]}
              options={options}
            />
        )}
      </div>

      <h2>Brand Hue</h2>
      <p>
        The greyscale ranges are designed to based on your primary brand color.
        The <code>grey</code> range is desaturated to around 5%.  The{' '}
        <code>grey20</code> and <code>grey40</code> ranges are saturated to
        around 20% and 40% respectively.
      </p>
      <p>
        The brand color for this website is <code>violet</code> which is why
        these greyscales have a violet tinge to them.
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
      <Snippet
        file="sass/color-hues.scss"
        caption="Customising Hues"
        expand output
      />

      <h2>TODO</h2>
      <ul>
        <li>Editing or updating a palette using Badger Color</li>
        <li>Expanding the palette into SCSS files</li>
        <li>Customising the palette using SCSS variables</li>
        <li>Customising the color hues</li>
        <li>Defining your brand color</li>
        <li>Adding/editing CSS scopes</li>
        <li>Including or omitting colors</li>
      </ul>
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
