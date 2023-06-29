import React    from 'react'
import Example  from '../../site/Example.jsx'
import Radios  from '../../snippets/html/radio-buttons.html?raw'
import RadioWide from '../../snippets/html/radio-wide.html?raw'
import RadioBorder from '../../snippets/html/radio-border.html?raw'
import RadioCustom from '../../snippets/html/radio-custom.html?raw'

const RadioButtons = () =>
  <div>
    <h1>Radio Buttons</h1>
    <h2>Option Class</h2>
    <p>
      The <code>option</code> class is used for both checkboxes and
      radio button options.  Add it to a <code>label</code> element that
      encloses the radio <code>input</code>.
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