import React, { useState } from 'react'
import { palette, colors }  from '../../config/colors.js'
import { range as numberRange } from '@abw/badger-utils'
import { dark } from '../../utils/color.js'
import Checkbox from '../../ui/Checkbox.jsx'
import CodeBlock from '../../site/CodeBlock.jsx'
import hues from '../../snippets/sass/color-hues.scss?raw'
import greys from '../../snippets/sass/grey-hues.scss?raw'
import Link from '../../ui/Link.jsx'
import SplitBlock from '../../site/SplitCode.jsx'

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
        The following standard color ranges are defined.  This palette was
        created using <a href="https://abw.github.io/badger-color">Badger Color</a>,
        a companion to this library.  You can use it to clone and update this
        palette or to create your own palettes from scratch.
      </p>
      <p>
        Each color range is divided into color <em>stops</em>.  They range in
        increments of 5 from <code>0</code> which is very close to black, up to{' '}
        <code>100</code>, which is very close to white.
      </p>
      <Ranges
        title="Color Ranges"
        colors={colors.filter( c => ! palette.ranges[c].greyscale )}
        options={options}
        toggleNames={toggleNames}
        toggleInfo={toggleInfo}
        toggleShow5s={toggleShow5s}
      />
      <p>
        Each range of colors is built from a base hue.  These are defined in
        SASS variables using the SASS <code>!default</code> flag.  If you want
        to adjust the hues you can set any of these SASS variables
        before importing the main <code>badger.scss</code> component.
      </p>
      <CodeBlock
        code={hues}
        caption="Customising Hues"
        language='scss'
        expand
      />

      <Ranges
        title="Greyscale Ranges"
        colors={colors.filter( c => palette.ranges[c].greyscale )}
        options={options}
        toggleNames={toggleNames}
        toggleInfo={toggleInfo}
        toggleShow5s={toggleShow5s}
      />
      <SplitBlock
        code={greys}
        caption="Customising Greyscale Hues"
        language='scss'
        className="mar-t-8"
        expand
      >
        <p>
          Three greyscale color ranges are also defined.  They are designed to
          be based on your primary brand color.
          The <code>grey</code> range is desaturated to around 5%.  The{' '}
          <code>grey20</code> and <code>grey40</code> ranges are saturated to
          around 20% and 40% respectively.
        </p>
        <p>
          The brand color for this website is <code>violet</code> which is why
          these greyscales have a violet tinge to them.  You can set the hues
          for these color ranges using the <code>$grey-hue</code>,{' '}
          <code>$grey20-hue</code> and <code>$grey40-hue</code> variables.
        </p>
      </SplitBlock>
      <p className="mar-t-4">
        <Link to="/colors/brand" text="Read on"/> to see how you can define
        your own brand color and automatically get greyscales to match.
      </p>
    </div>
  )
}

const Ranges = ({
  title,
  colors,
  options,
  toggleNames, toggleInfo, toggleShow5s
}) =>
  <>
    <div className="flex space end">
      <h2>{title}</h2>
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
