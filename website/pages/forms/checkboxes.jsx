import React      from 'react'
import Example    from '@/site/Example.jsx'
import Checkboxes from '@/snippets/checkbox/checkboxes.html?raw'
import Inline     from '@/snippets/checkbox/inline.html?raw'
import Border     from '@/snippets/checkbox/border.html?raw'
import Switch     from '@/snippets/checkbox/switch.html?raw'
import Custom     from '@/snippets/checkbox/custom.html?raw'
import Link       from '@/ui/Link.jsx'

const CheckboxExamples = () =>
  <div className="prose">
    <h1>Checkboxes</h1>
    <h2>Checkbox Class</h2>
    <p>
      The usual approach to creating a checkbox is to define a{' '}
      <code>label</code> that contains an <code>input</code> with a
      <code>type=&quot;label&quot;</code> attribute.  This has the benefit
      that clicking on the label will toggle the checkbox input.
    </p>
    <p>
      Badger-CSS identifies labels that include a checkbox input using
      the <code>:has()</code> CSS selector. All the major browsers currently
      support it, although Firefox was a bit late to the party, only adding
      support in v121 released on 19th December 2023.
    </p>
    <p>
      As a work-around to support older versions of Firefox,
      you can add the <code>checkbox</code> class to the <code>label</code>.
    </p>
    <Example
      html={Checkboxes}
      language="html"
      caption="Checkboxes"
    />

    <h2>Inline Checkboxes</h2>
    <p>
      Checkboxes are full-width by default. Add the <code>inline</code> class
      to give it a fluid width.
    </p>
    <Example
      html={Inline}
      language="html"
      caption="Inline Checkboxes"
    />

    <h2>Checkbox Borders</h2>
    <p>
      Add the <code>border</code> class for borders.  You may need to manually
      add margins using the <Link to="/utilities/spacing" text="margin"/> utility
      classes, or contain multiple checkboxes using the {' '}
      <Link to="/utilities/flexbox" text="flexbox"/> or {' '}
      <Link to="/utilities/grid" text="grid"/> container classes and set the
      gap between elements.
    </p>
    <Example
      html={Border}
      language="html"
      caption="Border Checkboxes"
    />

    <h2>Checkbox Switches</h2>
    <p>
      Set the <code>role</code> to <code>switch</code> to display the
      checkbox as a switch.  Add the <code>round</code> class for a fully
      rounded switch or <code>square</code> for square corners.
    </p>
    <p>
      The background color for enabled switches will be based on your
      brand color.  There are a number of CSS properties you can set to
      customise the style.
    </p>
    <Example
      html={Switch}
      language="html"
      caption="Checkbox Switch"
    />

    <h2>Custom Checkboxes</h2>
    <Example
      html={Custom}
      language="html"
      caption="Custom Checkboxes"
    />
  </div>

export default CheckboxExamples