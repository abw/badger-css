import React, { useState } from 'react'
import ColorSelect from './ColorSelect.jsx'
import SizeSelect from './SizeSelect.jsx'
import RadiusSelect from './RadiusSelect.jsx'
import CodeBlock from '../../site/CodeBlock.jsx'
import { joinClasses } from './Utils.js'
import ShadowSelect from './ShadowSelect.jsx'
import CheckOption from './CheckOption.jsx'
import BorderWidthSelect from './BorderWidthSelect.jsx'

const Details = () => {
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
  const toggleBorder   = toggleOption('border')
  const toggleShaded   = toggleOption('shaded')
  const toggleLined    = toggleOption('lined')
  const setSize        = setOption('size')
  const setColor       = setOption('color')
  const setRadius      = setOption('radius')
  const setShadow      = setOption('shadow')
  const setBorderWidth = setOption('borderWidth')
  const classes        = ClassNames(options)
  const output         = `<details class="${classes}">\n  ...\n</details>`

  return (
    <div>
      <h3 className="mar-b-2">Options</h3>
      <div className="grid-3 gap-4 stack-tablet start">
        <CheckOption
          checked={options.lined}
          toggle={toggleLined}
          label="Lined"
        />
        <CheckOption
          checked={options.shaded}
          toggle={toggleShaded}
          label="Shaded"
        />
      </div>
      <div className="grid-3 gap-4 stack-tablet start mar-t-4">
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
      <div className="grid-3 gap-4 stack-tablet mar-t-4">
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
      <CodeBlock
        code={output}
        language="html"
        expand
      />
    </div>
  )
}

const ClassNames = options => joinClasses([
  options.color,
  options.size,
  options.lined && 'lined',
  options.shaded && 'shaded',
  options.border && 'border',
  options.radius && `bdr-${options.radius}`,
  options.shadow && `shadow-${options.shadow}`,
  options.borderWidth && `bdw-${options.borderWidth}`,
])

const Output = ({ options }) => {
  const cls = ClassNames(options)
  return (
    <details className={cls}>
      <summary>This is a demo details widget - click to reveal</summary>
      <p>
        I do not, for one, think that the problem was that the band was down. I think
        that the problem may have been...that there was a Stonehenge monument on the
        stage that was in danger of being crushed by a dwarf. Alright? That tended to
        understate the hugeness of the object.
      </p>
      <p>
        I really think you&apos;re just making a much too big thing out of it.
      </p>
      <p>
        Making a big thing out of it would&apos;ve been a good idea.
      </p>
    </details>
  )
}

export default Details

