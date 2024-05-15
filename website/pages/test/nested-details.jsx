import React   from 'react'
import Nested  from '@/snippets/test/nested-details.html?raw'
import Example from '@/site/Example.jsx'

const NestedDetails = () =>
  <div className="flow">
    <h1>Nested Details</h1>
    <p>
      When details are nested inside each other the icons are wrong.
    </p>
    <Example
      html={Nested}
      caption="Nested Details"
    />
  </div>

export default NestedDetails