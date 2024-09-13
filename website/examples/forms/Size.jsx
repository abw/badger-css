import React, { useState } from 'react'
import SizeRadio from '../components/SizeRadio.jsx'
import { classNames, classes } from '../components/Utils.js'
import { Source } from '@abw/badger-website'

const FormSize = () => {
  const [options, setOptions] = useState({  })
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
    <div className="example flex gap-8 stack-desktop">
      <div className="split-4">
        <Controls
          options={options}
          setOption={setOption}
          toggleOption={toggleOption}
        />
      </div>
      <div className="split-3-4">
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

const Controls = ({ options, setOption }) => {
  const setSize       = setOption('size')
  const classes       = classNames(
    options,
    { },
    options.size,
  )
  const output = `<form class="${classes}">\n  ...\n</form>`

  return (
    <div>
      <h3 className="mar-b-2">Select Size</h3>
      <div className="border bgc-100 bgd-0 pad-4 bdr-1">
        <SizeRadio
          size={options.size}
          setSize={setSize}
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

const Output = ({ options }) => {
  const cls = classes(
    options,
    { },
    options.size,
  )
  return (
    <form className={cls}>
      <div className="field">
        <label>Text Input</label>
        <div className="flex end gap-4">
          <input type="text" name="input-1" className="wide" placeholder="Search"/>
          <button className="brand outline">Search</button>
        </div>
      </div>
      <div className="field">
        <label>Radio Buttons</label>
        <div className="flex gap-4 stack-tablet">
          <label className="radio border">
            <input type="radio" name="color"/>
            Nigel
          </label>
          <label className="radio border">
            <input type="radio" name="color"/>
            David
          </label>
          <label className="radio border">
            <input type="radio" name="color"/>
            Derek
          </label>
        </div>
      </div>

      <div className="grid-2 gap-4 stack-tablet">
        <div className="field">
          <label>Select Input</label>
          <select name="animal" className="wide" required>
            <option value="" hidden disabled selected>Choose an animal</option>
            <option value="ant">Ant</option>
            <option value="badger">Badger</option>
            <option value="cat">Cat</option>
            <option value="dog">Dog</option>
            <option value="elephant">Elephant</option>
            <option value="ferret">Ferret</option>
            <option value="goldfish">Goldfish</option>
          </select>
        </div>

        <div className="field">
          <label>Checkbox</label>
          <label className="checkbox border">
            <input type="checkbox"/>
            I like badgers
          </label>
        </div>
      </div>
      <label className="checkbox inline">
        <input type="checkbox" role="switch"/>
        Turn it on
      </label>
      <label className="checkbox inline">
        <input type="checkbox" role="switch"/>
        Turn it on again
      </label>
      <div className="text-right">
        <button className="solid brand">Submit</button>
      </div>
    </form>
  )
}

export default FormSize
