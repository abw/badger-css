import React, { useState } from 'react'
import ColorSelect from './ColorSelect.jsx'
import SizeSelect from './SizeSelect.jsx'
import RadiusSelect from './RadiusSelect.jsx'
import CodeBlock from '../../site/CodeBlock.jsx'
import { classNames, classes } from './Utils.js'
import CheckOption from './CheckOption.jsx'

const Table = () => {
  const [options, setOptions] = useState({
    head1: true,
    body:  true,
    foot1: true,
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
  const toggleHead1   = toggleOption('head1')
  const toggleHead2   = toggleOption('head2')
  const toggleBody    = toggleOption('body')
  const toggleFoot1   = toggleOption('foot1')
  const toggleFoot2   = toggleOption('foot2')
  const toggleWide    = toggleOption('wide')
  const toggleCelled  = toggleOption('celled')
  const toggleShaded  = toggleOption('shaded')
  const toggleLined   = toggleOption('lined')
  const toggleStriped = toggleOption('striped')
  const setSize       = setOption('size')
  const setColor      = setOption('color')
  const setRadius     = setOption('radius')
  const classes       = classNames(
    options,
    'wide celled shaded lined striped',
    options.color, options.size,
    options.radius && `bdr-${options.radius}`
  )
  const output = `<table class="${classes}">\n  ...\n</table>`

  return (
    <div>
      <h3 className="mar-b-2">Options</h3>
      <div className="grid-4 gap-4 top stack-tablet">
        <CheckOption
          checked={options.wide}
          toggle={toggleWide}
          label="Wide"
        />
        <ColorSelect
          color={options.color}
          setColor={setColor}
        />
        <SizeSelect
          size={options.size}
          setSize={setSize}
        />
        <RadiusSelect
          radius={options.radius}
          setRadius={setRadius}
        />
        <CheckOption
          checked={options.lined}
          toggle={toggleLined}
          label="Lined"
        />
        <CheckOption
          checked={options.celled}
          toggle={toggleCelled}
          label="Celled"
        />
        <CheckOption
          checked={options.shaded}
          toggle={toggleShaded}
          label="Shaded"
        />
        <CheckOption
          checked={options.striped}
          toggle={toggleStriped}
          label="Striped"
        />
      </div>
      <div className="grid-3 gap-4 stack-tablet mar-t-4">
        <CheckOption
          checked={options.head1}
          toggle={toggleHead1}
          label="Header"
        />
        <CheckOption
          checked={options.body}
          toggle={toggleBody}
          label="Body"
        />
        <CheckOption
          checked={options.foot1}
          toggle={toggleFoot1}
          label="Footer"
        />
      </div>
      <div className="grid-2 gap-4 stack-tablet mar-t-4">
        <CheckOption
          checked={options.head2}
          toggle={toggleHead2}
          label="Pre-header"
        />
        <CheckOption
          checked={options.foot2}
          toggle={toggleFoot2}
          label="Post-footer"
        />
      </div>
      <div className="grid-5 gap-4 stack-tablet mar-t-4">
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

const Output = ({ options }) => {
  const cls = classes(
    options,
    { },
    options.color,
    options.size,
    options.radius && `bdr-${options.radius}`
  )
  return (
    <table className={cls}>
      { (options.head1 || options.head2) &&
      <thead>
        { options.head2 &&
        <tr>
          <th colSpan="3" className="text-center">Spinal Tap</th>
        </tr>
        }
        { options.head1 &&
        <tr>
          <th>Name</th>
          <th>Instrument</th>
          <th>Danger Level</th>
        </tr>
        }
      </thead>
      }
      { options.body &&
      <tbody>
        <tr>
          <td>Nigel</td>
          <td>Tufnel</td>
          <td>Guitar</td>
        </tr>
        <tr>
          <td>David</td>
          <td>St.Hubbins</td>
          <td>Guitar</td>
        </tr>
        <tr>
          <td>Derek</td>
          <td>Smalls</td>
          <td>Bass</td>
        </tr>
        <tr>
          <td>Viv</td>
          <td>Savage</td>
          <td>Keyboards</td>
        </tr>
        <tr>
          <td>Mick</td>
          <td>Shrimpton</td>
          <td>Drums</td>
        </tr>
      </tbody>
      }
      { (options.foot1 || options.foot2) &&
      <tfoot>
        { options.foot1 &&
        <tr>
          <th colSpan="2" className="text-right">Total</th>
          <th>5</th>
        </tr>
        }
        { options.foot2 &&
        <tr>
          <th colSpan="3" className="text-center">Tap into America!</th>
        </tr>
        }
      </tfoot>
      }
    </table>
  )

}
export default Table

