import React     from 'react'
import Example   from '@/site/Example.jsx'
import Text      from '@/snippets/text/text.html?raw'
import Inline    from '@/snippets/text/inline.html?raw'
import GridFlex  from '@/snippets/text/grid-flex.html?raw'
import Types     from '@/snippets/text/types.html?raw'
import Disabled  from '@/snippets/text/disabled.html?raw'
import { FlexLink, GridLink } from '@/site/Links.jsx'

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

    <h2>Inline Text Input</h2>
    <p>
      Inputs are full-width by default. Add the <code>inline</code> class
      to give it a fluid width.
    </p>
    <Example
      html={Inline}
      language="html"
      caption="Inline Text Input"
    />

    <h2>Grid and Flex Layout</h2>
    <p>
      You can also use the <GridLink/> and <FlexLink/> classes to control layout.
    </p>
    <Example
      html={GridFlex}
      language="html"
      caption="Grid and Flex"
    />

    <h2>Other Input Types</h2>
    <p>
      You can set the <code>type</code> to one of the other text-based input
      types (e.g. <code>password</code>, <code>number</code>,{' '}
      <code>telephone</code>, <code>date</code>, <code>time</code>, etc).
      There&apos;s also some styling provided for the <code>color</code> type
      although it&apos;s notoriously hard to style and the appearance can
      vary on different browsers, devices and operating systems.
    </p>
    <Example
      html={Types}
      language="html"
      caption="Other Input Types"
    />

    <h2>Disabled Text Input</h2>
    <p>
      Add the <code>disabled</code> attribute to disable the input or
      the <code>disabled</code> CSS class.
    </p>
    <Example
      html={Disabled}
      language="html"
      caption="Disabled Text Input"
    />

  </div>

export default TextInputs