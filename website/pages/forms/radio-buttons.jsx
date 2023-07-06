import React       from 'react'
import Example     from '../../site/Example.jsx'
import Radios      from '../../snippets/form/radio-buttons.html?raw'
import RadioWide   from '../../snippets/form/radio-wide.html?raw'
import RadioBorder from '../../snippets/form/radio-border.html?raw'
import RadioCustom from '../../snippets/form/radio-custom.html?raw'
import Link from '../../ui/Link.jsx'

const RadioButtons = () =>
  <div>
    <h1>Radio Buttons</h1>
    <h2>Radio Class</h2>
    <p>
      Radio buttons are implemented much like{' '}
      <Link to="/forms/checkboxes" text="checkboxes"/>.  Create a{' '}
      <code>label</code> enclosing an <code>input</code> with the{' '}
      <code>type=&quot;radio&quot;</code> attribute.
    </p>
    <p>
      The same warning about Firefox applies.  The current version (v115)
      doesn&apos;t support the <code>:has()</code> CSS selector that this
      depends on so you have to manually add the <code>radio</code> class
      to the <code>label</code> as a work-around.
    </p>
    <Example
      html={Radios}
      language="html"
      caption="Radio Buttons"
    />
    <h2>Wide Radio Buttons</h2>
    <p>
      Add the <code>wide</code> class for full-width radio buttons.
    </p>
    <Example
      html={RadioWide}
      language="html"
      caption="Wide Radio Buttons"
    />
    <h2>Radio Button Borders</h2>
    <p>
      Add the <code>border</code> class for borders.
    </p>
    <Example
      html={RadioBorder}
      language="html"
      caption="Border Radio Buttons"
    />
    <h2>Custom Radio Buttons</h2>
    <Example
      html={RadioCustom}
      language="html"
      caption="Custom Checkboxes"
    />
  </div>

export default RadioButtons