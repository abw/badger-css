import React, { useState } from 'react'
import ColorSelect from './ColorSelect.jsx'
import SizeSelect from './SizeSelect.jsx'
import RadiusSelect from './RadiusSelect.jsx'
import ShadowSelect from './ShadowSelect.jsx'
import CheckOption from './CheckOption.jsx'
import BorderWidthSelect from './BorderWidthSelect.jsx'
import { joinClasses } from './Utils.js'
import { Source } from '@abw/badger-website'

const Alert = () => {
  const [options, setOptions] = useState({
    body:  true,
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
    <div className="example grid-2 gap-8 stack-desktop">
      <Controls
        options={options}
        setOption={setOption}
        toggleOption={toggleOption}
      />
      <div>
        <h3 className="mar-b-2">Output</h3>
        <div className="output">
          <Output
            options={options}
          />
        </div>
      </div>
    </div>
  )
}

const Controls = ({ options, toggleOption, setOption }) => {
  const toggleHeadline = toggleOption('headline')
  const toggleHeading  = toggleOption('heading')
  const toggleBorder   = toggleOption('border')
  const toggleStripe   = toggleOption('stripe')
  const setType        = setOption('type')
  const setSize        = setOption('size')
  const setColor       = setOption('color')
  const setRadius      = setOption('radius')
  const setShadow      = setOption('shadow')
  const setBorderWidth = setOption('borderWidth')
  const classes        = ClassNames(options)
  const output         = `<div class="${classes}">\n  ...\n</div>`

  return (
    <div>
      <h3 className="mar-b-2">Options</h3>
      <div className="grid-3 gap-4 stack-tablet top">
        <CheckOption
          checked={options.headline}
          toggle={toggleHeadline}
          label="Headline"
        />
        <CheckOption
          checked={options.head}
          toggle={toggleHeading}
          label="Heading"
        />
        <CheckOption
          checked={options.stripe}
          toggle={toggleStripe}
          label="Stripe"
        />
        <CheckOption
          checked={options.border}
          toggle={toggleBorder}
          label="Border"
        />
        <BorderWidthSelect
          borderWidth={options.borderWidth}
          setBorderWidth={setBorderWidth}
        />
        <RadiusSelect
          radius={options.radius}
          setRadius={setRadius}
        />
      </div>
      <div className="grid-4 gap-4 stack-tablet mar-t-4">
        <TypeSelect
          type={options.type}
          setType={setType}
        />
        <ColorSelect
          color={options.color}
          setColor={setColor}
        />
        <SizeSelect
          size={options.size}
          setSize={setSize}
        />
        <ShadowSelect
          radius={options.shadow}
          setShadow={setShadow}
        />
      </div>
      <h3 className="mar-b-2 mar-t-4">Markup</h3>
      <Source
        code={output}
        language="html"
        expand
      />
    </div>
  )
}

const ClassNames = options => joinClasses([
  options.color,
  options.type,
  options.size,
  options.border && 'border',
  options.stripe && 'stripe',
  options.radius && `bdr-${options.radius}`,
  options.shadow && `shadow-${options.shadow}`,
  options.borderWidth && `bdw-${options.borderWidth}`,
  'alert'
])

const Output = ({ options }) => {
  const cls = ClassNames(options)
  return (
    <div className={cls}>
      { options.headline &&
      <div className="headline">This is a headline</div>
      }
      { options.heading &&
        <h3>Hello World!</h3>
      }
      <p>
        This is an alert.  This is some <b>bold text</b>.
        This is a <a href="/">link</a>.
      </p>
      <button>Default Button</button>
      <button className="red mar-l-2">Red Button</button>
    </div>
  )
}

const TypeSelect = ({ type, setType }) =>
  <select
    name="type"
    required
    value={type}
    onChange={ e => setType(e.target.value) }
  >
    <option value="" hidden disabled selected>Type</option>
    <option value="">Default</option>
    { ['info', 'warning', 'success', 'error'].map(
      type =>
        <option
          key={type}
          value={type}
        >
          {type}
        </option>
    )}
  </select>

export default Alert

