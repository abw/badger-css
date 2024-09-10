import React     from 'react'
import Position  from '@/snippets/position/position.html?raw'
import { Example } from '@abw/badger-website'

const PositionPage = () =>
  <div className="prose flow">
    <h1>Position</h1>

    <h2>Position Classes</h2>
    <p>
      Add the <code>absolute</code>, <code>relative</code> and{' '}
      <code>fixed</code> CSS classes to set the position type.
    </p>
    <p>
      For elements that are set to <code>absolute</code> or <code>fixed</code>{' '}
      position, the <code>top</code>, <code>bottom</code>, <code>left</code>{' '}
      and <code>right</code> classes can be used to position them against the
      corresponding edge of the closest parent element with the{' '}
      <code>relative</code> position type.
    </p>
    <Example
      html={Position}
      caption="Position"
      expand
    />
  </div>

export default PositionPage
