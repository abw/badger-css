import React from 'react'
import { joinClasses } from '../examples/components/Utils.js'
import { hasValue } from '@abw/badger-utils'

const Div = ({options}) => {
  const classes = classNames(options)
  return (
    <div>
      <div className="flex space mar-b-2">
        <h3>Output</h3>
        <code className="smallish" style={{ lineHeight: 1.8 }}>
          class=&quot;{classes}&quot;
        </code>
      </div>
      <div className="surface-5 border" style={{ borderColor: 'transparent' }}>
        <div className={classes}>
          You see, most... most blokes, you know, will be playing at ten.
          You&apos;re on ten here... all the way up... all the way up...
          all the way up. You&apos;re on ten on your guitar...where can you go
          from there? Where? Nowhere. Exactly. What we do is if we need that
          extra... push over the cliff... you know what we do? Put it up to
          eleven. Eleven. Exactly. One louder.
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
  hasValue(options.bdw) ? `bdw-${options.bdw}` : '',
  hasValue(options.bdr) ? `bdr-${options.bdr}` : '',
  options.size,
  hasValue(options.mar) ? `mar-${options.mar}` : '',
  hasValue(options.pad) ? `pad-${options.pad}` : '',
  hasValue(options.shadow) ? `shadow-${options.shadow}` : '',
  options.border ? 'border' : '',
])

export default Div