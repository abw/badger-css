import React from 'react'
import { joinClasses } from '../examples/components/Utils.js'
import { hasValue } from '@abw/badger-utils'

const Div = ({options}) => {
  const classes = classNames(options)
  return (
    <div>
      <div className="flex space mar-b-2">
        <h3>Output</h3>
        <h3><code>{classes}</code></h3>
      </div>
      <div className="surface-5 border" style={{ borderColor: 'transparent' }}>
        <div className={classes}>
          Body
        </div>
      </div>
    </div>
  )
}

const classNames = options => joinClasses([
  options.range,
  hasValue(options.bgc) ? `bgc-${options.bgc}` : '',
  hasValue(options.fgc) ? `fgc-${options.fgc}` : '',
  hasValue(options.bdc) ? `bdc-${options.bdc}` : '',
  options.size,
  hasValue(options.mar) ? `mar-${options.mar}` : '',
  hasValue(options.pad) ? `pad-${options.pad}` : '',
  hasValue(options.bdw) ? `bdw-${options.bdw}` : '',
  hasValue(options.bdr) ? `bdr-${options.bdr}` : '',
  options.border ? 'border' : '',
])

export default Div