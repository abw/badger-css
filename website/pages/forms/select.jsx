import React    from 'react'
import Example  from '../../site/Example.jsx'
import Select       from '../../snippets/form/select.html?raw'
import SelectPlace  from '../../snippets/form/select-placeholder.html?raw'
import SelectText   from '../../snippets/form/select-text.html?raw'
import SelectCustom from '../../snippets/form/select-custom.html?raw'
// import Link from '../../ui/Link.jsx'

const SelectInputs = () =>
  <div className="prose">
    <h1>Select Input</h1>
    <p>
      Select inputs are the bane of web developers and designers everywhere.
      There are notoriously difficult to style.  They don&apos;t want to
      align with other elements.  Their size is often wrong.  And just when
      you think you&apos;ve finally cracked it, you look at it on another
      browser and see that it&apos;s all on the wonk.
    </p>
    <p>
      I have wasted far too many hours of my life starting at forms like
      this one trying to get everything the same size and aligned properly.
    </p>
    <Example
      html={SelectText}
      language="html"
      caption="Select Alignment"
    />
    <p>
      The least bad solution is to set <code>appearance: none</code> to
      remove the browser-specific rendering quirks.  The problem then is that
      you also lose drop down arrow indicating that it&apos;s a select
      input.  So we have to put that back in using an SVG background image.
      But you don&apos;t need to worry about that - I did so you don&apos;t
      have to.
    </p>
    <Example
      html={Select}
      language="html"
      caption="Select Input"
    />
    <h2>Placeholder</h2>
    <p>
      Another annoying thing about select inputs is that they don&apos;t
      support the <code>placeholder</code> attribute.  You can work around
      the problem by adding the <code>required</code> attribute to the{' '}
      <code>select</code> input and the <code>hidden</code>,{' '}
      <code>disabled</code> and <code>selected</code> attributes to the first
      option which contains your placeholder text.
    </p>
    <Example
      html={SelectPlace}
      language="html"
      caption="Select Placeholder"
    />

    <h2>Custom Icon</h2>
    <p>
      You can define your own drop down arrow icon using the{' '}
      <code>--arrow-down</code> property.  It&apos;s a little bit tricky
      because you have to URI encode the SVG and define it as shown in this
      example.  If you&apos;ve got an SVG icon with a simple path and your
      icon is 16px square then you can copy the definition from this example
      and insert your path data into the <code>path d=&apos;...&apos;</code> part.
    </p>
    <Example
      html={SelectCustom}
      language="html"
      caption="Custom Icon"
    />
  </div>

export default SelectInputs