import React    from 'react'
import Example  from '../../site/Example.jsx'
import Checkboxes     from '../../snippets/form/checkboxes.html?raw'
import CheckboxWide   from '../../snippets/form/checkbox-wide.html?raw'
import CheckboxBorder from '../../snippets/form/checkbox-border.html?raw'
import CheckboxCustom from '../../snippets/form/checkbox-custom.html?raw'

const CheckboxExamples = () =>
  <div className="prose">
    <h1>Checkboxes</h1>
    <h2>Checkbox Class</h2>
    <p>
      The usual approach to creating a checkbox is to define a{' '}
      <code>label</code> that contains an <code>input</code> with a
      <code>type=&quot;label&quot;</code> attribute.
    </p>
    <p>
      That will work fine on most browsers.  However at the time of writing
      (July 2023), Firefox (v115) still doesn&apos;t support the{' '}
      <code>:has()</code> CSS selector that this depends upon.  Although the
      other major browsers currently support it and we&apos;re expecting it to
      be implemented in Firefox soon.
    </p>
    <p>
      As a work-around you can add the <code>checkbox</code> class to the{' '}
      <code>label</code>.
    </p>
    <Example
      html={Checkboxes}
      language="html"
      caption="Checkboxes"
    />
    <h2>Wide Checkboxes</h2>
    <p>
      Checkboxes are rendered inline by default and will only be as wide as
      necessary. Add the <code>wide</code> class for full-width checkboxes.
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