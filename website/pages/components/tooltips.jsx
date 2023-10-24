import React     from 'react'
import Example   from '../../site/Example.jsx'
import Tooltip   from '../../snippets/html/tooltip.html?raw'
import Position  from '../../snippets/html/tooltip-position.html?raw'
import Corners   from '../../snippets/html/tooltip-corner.html?raw'
import Custom    from '../../snippets/html/tooltip-custom.html?raw'

const TooltipsPage = () =>
  <div className="prose">
    <h1>Tooltips</h1>
    <p>
      Add the <code>data-tooltip</code> attribute to an element to enable a
      tooltip.  The tooltip text should be defined in the <code>aria-label</code>{' '}
      property so that it&apos;s also accessible to screen readers.
    </p>
    <Example
      html={Tooltip}
      language="html"
      caption="Tooltip"
    />
    <h2>Tooltip Position</h2>
    <p>
      You can set the <code>data-tooltip</code> attribute to any of{' '}
      <code>left</code>, <code>right</code>, <code>top</code> or{' '}
      <code>bottom</code> to set the tooltip position.
    </p>
    <Example
      html={Position}
      language="html"
      caption="Tooltip Position"
    />
    <p>
      You can also combine them as {' '}
      <code>top left</code>, <code>top right</code>, <code>bottom left</code>{' '}
      and <code>bottom right</code>.
    </p>
    <Example
      html={Corners}
      language="html"
      caption="Tooltip Corners"
    />

    <p>
      There are a number of SCSS variables that can be used to set the
      defaults, or you can use CSS variables to create custom tooltip styles.
    </p>
    <Example
      html={Custom}
      language="html"
      caption="Custom Tooltips"
    />
  </div>

export default TooltipsPage