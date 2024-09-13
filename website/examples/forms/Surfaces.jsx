import React from 'react'
import Surfaces from './surfaces.html?raw'

const FormSurfaces = () =>
  <div className="grid-3 gap-4 stack-widescreen mar-b-8">
    { ['surface', 'surface-1', 'surface-2', 'surface-3', 'surface-4', 'surface-5'].map(
      n =>
        <div className={`${n} pad-6 border shadow-2`} key={n}>
          <h3 className="font-mono mar-b-3">{n}</h3>
          <div dangerouslySetInnerHTML={{__html:Surfaces}}></div>
        </div>
    )}
  </div>

export default FormSurfaces