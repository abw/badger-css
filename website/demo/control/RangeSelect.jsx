import React from 'react'
import Swatch from './Swatch.jsx'
import { rangeNames, greyscaleNames } from '../../config/colors.js'
import { hasValue } from '@abw/badger-utils'

const RangeSelect = ({ range, setRange }) =>
  <div>
    <div className="flex space mar-b-2">
      <h3>Color Range</h3>
      <h3>
        { hasValue(range) &&
          <code>{range||''}</code>
        }
      </h3>
    </div>
    <div className={`grid-fit gap-2`} style={{ '--min-width': '2em' }}>
      <Swatches colors={rangeNames} range={range} setRange={setRange}/>
      <div>&nbsp;</div>
      <Swatch color="brand" selected={range === 'brand'} select={() => setRange('brand')}/>
      <Swatches colors={greyscaleNames} range={range} setRange={setRange}/>
    </div>
  </div>

const Swatches = ({range, setRange, colors}) =>
  colors.map(
    color =>
      <Swatch
        key={color}
        color={color}
        select={() => setRange(color)}
        selected={range == color}
      />
  )


export default RangeSelect

