import React    from 'react'
import Example  from '@/site/Example.jsx'
import Input    from '@/snippets/input/input.html?raw'
import Inline   from '@/snippets/input/inline.html?raw'
import NoHover  from '@/snippets/input/no-hover.html?raw'
import GridFlex from '@/snippets/input/grid-flex.html?raw'
import Disabled from '@/snippets/input/disabled.html?raw'
import Link     from '@/ui/Link.jsx'

const FakeInputs = () =>
  <div className="prose">
    <h1>Fake Input</h1>
    <p>
      If you want something that isn&apos;t an input to look like an input then
      you can add the <code>input</code> CSS class.
    </p>
    <Example
      html={Input}
      language="html"
      caption="Inline Text Input"
    />

    <h2>Inline Input</h2>
    <p>
      Just like regular inputs, they are full-width by default. Add
      the <code>inline</code> class to give it a fluid width.
    </p>
    <Example
      html={Inline}
      language="html"
      caption="Inline Text Input"
    />

    <h2>No Hover</h2>
    <p>
      Add the <code>no-hover</code> class if you don&apos;t want it to change
      appearance on hover.
    </p>
    <Example
      html={NoHover}
      language="html"
      caption="No Hover"
    />

    <h2>Grid and Flex Layout</h2>
    <p>
      You can also use the <Link to="/utilities/grid" text="grid"/> and{' '}
      <Link to="/utilities/flexbox" text="flexbox"/> classes to control layout.
    </p>
    <Example
      html={GridFlex}
      language="html"
      caption="Grid and Flex"
    />

    <h2>Disabled Inputs</h2>
    <p>
      Add the <code>disabled</code> attribute or CSS class if you want it to
      look disabled.
    </p>
    <Example
      html={Disabled}
      language="html"
      caption="Not an Input"
    />
  </div>

export default FakeInputs