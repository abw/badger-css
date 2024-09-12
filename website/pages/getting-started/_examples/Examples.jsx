import React from 'react'
import Icon from '@/ui/Icon.jsx'
import { capitalise } from '@abw/badger-utils'

export const Examples = ({theme}) =>
  <div>
    <div className="surface pad-4 border">
      <h3 className="mar-t-0">{capitalise(theme)} Theme</h3>
      <div className="field mar-t-4">
        <label>Form Field</label>
        <input type="text" name="a"/>
        <div className="help">Field help</div>
      </div>
      <div className="field valid">
        <label>Valid Field</label>
        <input type="text" name="b"/>
        <div className="help">This is fine</div>
      </div>
      <div className="field invalid">
        <label>Invalid Field</label>
        <input type="text" name="c"/>
        <div className="help">This is not so good</div>
      </div>
      <div className="field mar-t-4">
        <label>Input Prefix/Suffix</label>
        <div className="inputs">
          <div className="prefix">
            £
          </div>
          <input type="text" name="d"/>
          <div className="suffix">
            .00
          </div>
        </div>
      </div>
      <div className="field mar-t-4">
        <label>Shaded and Lined Prefix/Suffix</label>
        <div className="inputs">
          <div className="prefix shaded lined">
            <Icon name="unlock"/>
          </div>
          <input type="text" name="e"/>
          <div className="suffix shaded lined">
            <Icon name="check"/>
          </div>
        </div>
      </div>
      <div className="field">
        <label>Select</label>
        <select name="animal" required>
          <option value="" hidden disabled selected>Choose an animal</option>
          <option value="ant">Ant</option>
          <option value="badger">Badger</option>
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
        </select>
      </div>
      <label className="inline radio">
        <input type="radio" name="radio1"/>
        Radio
      </label>
      <label className="inline radio">
        <input type="radio" name="radio1"/>
        Buttons
      </label>
      <label>
        <input type="checkbox"/>
        Checkbox
      </label>
      <div className="mar-t-4 grid-2 gap-4">
        <label className="inline radio border">
          <input type="radio" name="radio2"/>
          Radio
        </label>
        <label className="inline radio border">
          <input type="radio" name="radio2"/>
          Buttons
        </label>
      </div>
      <div className="mar-t-4">
        <label className="border">
          <input type="checkbox"/>
          Checkbox
        </label>
      </div>
      <label className="mar-t-4">
        <input type="checkbox" role="switch"/>
        Turn it on again
      </label>
      <div className="flex space mar-t-4">
        <button className="grey outline">
          Reset
        </button>
        <button className="blue">
          Submit
        </button>
      </div>
      <div className="success alert border mar-t-4">
        Success alert
      </div>
      <div className="error alert border">
        Error alert!
      </div>
      <div className="info alert border">
        Info alert
      </div>
      <details className="shaded lined border orange bdr-1">
        <summary>Revealable Details</summary>
        <p>
          Hello World!
        </p>
      </details>
      <div
        data-tooltip="top left" aria-label="This is a tooltip!"
        className="violet border pad-2 pad-h-4 bgc-95 bgd-5 bdc-80 bdd-20 mar-t-4 Xtext-center bdr-1"
      >
        Hover here for tooltip
      </div>
      <table className="wide striped celled mar-t-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Instrument</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nigel</td>
            <td>Guitar</td>
          </tr>
          <tr>
            <td>David</td>
            <td>Guitar</td>
          </tr>
          <tr>
            <td>Derek</td>
            <td>Bass</td>
          </tr>
          <tr>
            <td>Viv</td>
            <td>Keyboards</td>
          </tr>
          <tr>
            <td>Mick</td>
            <td>Drums</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

export default Examples