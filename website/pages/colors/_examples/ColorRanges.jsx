import React from 'react'
import ScopeVars  from '@/site/ScopeVars.jsx'

const colorSelection1 =  ['red', 'brown', 'orange']

const ColorRanges = () =>
  <div className="small flex gap-4 mar-t-8">
    { colorSelection1.map(
      col =>
        <div key={col}>
          <h3 className="font-mono mar-b-2">.{col} {'{'} ... {'}'}</h3>
          <ScopeVars
            scope={col}
            to={col}
            abbreviate={true}
          />
        </div>
    )}
    <div>
      <h3 className="font-mono mar-b-2">...etc</h3>
    </div>
  </div>

export default ColorRanges