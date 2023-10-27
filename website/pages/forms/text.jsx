import React     from 'react'
import Example   from '../../site/Example.jsx'
import Text      from '../../snippets/form/text.html?raw'
import TextWide  from '../../snippets/form/text-wide.html?raw'
import TextGrid  from '../../snippets/form/text-grid.html?raw'
import TextTypes from '../../snippets/form/text-types.html?raw'
import Link from '../../ui/Link.jsx'

const TextInputs = () =>
  <div className="prose">
    <h1>Text Input</h1>
    <p>
      Text inputs are perhaps the most common kind of input.
    </p>
    <Example
      html={Text}
      language="html"
      caption="Text Input"
    />
    <p>
      Add the <code>wide</code> class to make it stretch to fill the container.
    </p>
    <Example
      html={TextWide}
      language="html"
      caption="Wide Text Input"
    />
    <p>
      You can use the <Link to="/utilities/grid" text="grid"/> utility classes
      to group inputs together on the same line.
    </p>
    <Example
      html={TextGrid}
      language="html"
      caption="Text Grid"
    />
    <p>
      You can set the <code>type</code> to one of the other text-based input
      types (e.g. <code>password</code>, <code>number</code>,{' '}
      <code>telephone</code>, <code>date</code>, <code>time</code>, etc).
      There&apos;s also some styling provided for the <code>color</code> type
      although it&apos;s notoriously hard to style and the appearance can
      vary on different browsers, devices and operating systems.
    </p>
    <Example
      html={TextTypes}
      language="html"
      caption="Other Input Types"
    />

  </div>

export default TextInputs