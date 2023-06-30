import React    from 'react'
import Example  from '../../site/Example.jsx'
import Checkboxes  from '../../snippets/html/checkboxes.html?raw'
import CheckboxWide from '../../snippets/html/checkbox-wide.html?raw'
import CheckboxBorder from '../../snippets/html/checkbox-border.html?raw'
import CheckboxCustom from '../../snippets/html/checkbox-custom.html?raw'

const CheckboxExamples = () =>
  <div>
    <h1>Checkboxes</h1>
    <h2>Checkbox Class</h2>
    <p>
      Add the <code>checkbox</code> class to a <code>label</code> element that
      encloses a checkbox <code>input</code>.
    </p>
    <Example
      html={Checkboxes}
      language="html"
      caption="Checkboxes"
    />
    <h2>Wide Checkboxes</h2>
    <p>
      Add the <code>wide</code> class for full-width checkboxes.
    </p>
    <Example
      html={CheckboxWide}
      language="html"
      caption="Wide Checkboxes"
    />
    <h2>Checkbox Borders</h2>
    <p>
      Add the <code>border</code> class for borders.
    </p>
    <Example
      html={CheckboxBorder}
      language="html"
      caption="Border Checkboxes"
    />
    <h2>Custom Checkboxes</h2>
    <Example
      html={CheckboxCustom}
      language="html"
      caption="Custom Checkboxes"
    />
  </div>

export default CheckboxExamples