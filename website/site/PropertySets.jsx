import React from 'react'
import Properties from './Properties.jsx'

const PropertySets = ({sets}) =>
  <div className={`grid-${sets.length} gap-8 stack-desktop mar-b-8`}>
    { sets.map(
      set =>
        <div key={set.title}>
          <h4 className="mar-b-2">{set.title}</h4>
          <Properties properties={set.properties}/>
          { Boolean(set.notes) &&
            <div className="smallish info alert">
              {set.notes}
            </div>
          }
        </div>
    )}
  </div>

export default PropertySets
