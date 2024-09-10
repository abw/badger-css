import React    from 'react'
import Radios   from '@/snippets/radio-buttons/buttons.html?raw'
import Inline   from '@/snippets/radio-buttons/inline.html?raw'
import Border   from '@/snippets/radio-buttons/border.html?raw'
import Custom   from '@/snippets/radio-buttons/custom.html?raw'
import { Example } from '@abw/badger-website'
import { CheckboxLink, FlexLink, GridLink, SpacingLink } from '@/site/Links.jsx'

const RadioButtons = () =>
  <div className="prose">
    <h1>Radio Buttons</h1>
    <h2>Radio Class</h2>
    <p>
      Radio buttons are implemented much like{' '}
      <CheckboxLink text="checkboxes"/>.  Create a{' '}
      <code>label</code> enclosing an <code>input</code> with the{' '}
      <code>type=&quot;radio&quot;</code> attribute.
    </p>
    <p>
      Badger-CSS identifies labels that include a radio button input using
      the <code>:has()</code> CSS selector. All the major browsers currently
      support it, although Firefox was a bit late to the party, only adding
      support in v121 released on 19th December 2023.
    </p>
    <p>
      As a work-around to support older versions of Firefox,
      you can add the <code>radio</code> class to the <code>label</code>.
    </p>
    <Example
      html={Radios}
      language="html"
      caption="Radio Buttons"
    />

    <h2>Inline Radio Buttons</h2>
    <p>
      Radio buttons are full-width by default. Add the <code>inline</code> class
      to give them a fluid width.
    </p>
    <Example
      html={Inline}
      language="html"
      caption="Inline Radio Buttons"
    />

    <h2>Radio Button Borders</h2>
    <p>
      Add the <code>border</code> class for borders.  You may need to manually
      add margins using the <SpacingLink text="margin"/> utility
      classes, or contain multiple checkboxes using the {' '}
      <FlexLink/> or <GridLink/> container classes and set the
      gap between elements.
    </p>
    <Example
      html={Border}
      language="html"
      caption="Border Radio Buttons"
    />

    <h2>Custom Radio Buttons</h2>
    <Example
      html={Custom}
      language="html"
      caption="Custom Checkboxes"
    />
  </div>

export default RadioButtons