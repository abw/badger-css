import React    from 'react'
import Example  from '../../site/Example.jsx'
import Select       from '../../snippets/form/select.html?raw'
import SelectPlace  from '../../snippets/form/select-placeholder.html?raw'
import SelectText   from '../../snippets/form/select-text.html?raw'
import SelectGroup  from '../../snippets/form/select-group.html?raw'
import SelectCustom from '../../snippets/form/select-custom.html?raw'
import SelectOptions from '../../snippets/select/options.html?raw'
import Split from '@/site/Split.jsx'
import Note from '@/site/Note.jsx'
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
    <h2>Custom Icon</h2>
    <p>
      You can define your own drop down arrow icon using the{' '}
      <code>--arrow-down</code> property.  It&apos;s a little bit tricky
      because you have to URI encode the SVG and define it as shown in this
      example.  If you&apos;ve got an SVG icon with a simple path and your
      icon is 16px square then you can copy the definition from this example
      and insert your path data into the <code>path d=&apos;...&apos;</code> part.
    </p>
    <p>
      Note that you can&apos;t use <code>currentColor</code> to set the
      stroke or fill color.  You can define separate <code>--arrow-down</code>{' '}
      properties for you light and dark themes, or you can use a neutral color
      like <code>#888</code> which works well in both cases.
    </p>
    <Example
      html={SelectCustom}
      language="html"
      caption="Custom Icon"
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

    <h2>Option Groups</h2>
    <p>
      You can group options using the <code>optgroup</code> element.
    </p>
    <Example
      html={SelectGroup}
      language="html"
      caption="Option Groups"
    />

    <h2>Select Options</h2>
    <Split align="end">
      <div>
        <p>
          Sometimes the builtin <code>select</code> element just isn&apos;t enough.
          If you want to define your own select component with more advanced
          functionality then you can piggy-back off the provided styles.
        </p>
        <p>
          Add the <code>select</code> CSS class to a container element.
          Then define an element with an <code>input</code> class with
          either <code>placeholder</code> for placeholder text or{' '}
          <code>value</code> to designated a selected value.  Options should
          be defined in elements with the <code>option</code> class, all in
          a container element having the <code>options</code> class.
        </p>
      </div>
      <Note>
        The examples below don&apos;t have any interactivity.  They&apos;re
        just for show.
      </Note>
    </Split>
    <Example
      html={SelectOptions}
      language="html"
      caption="Custom Select"
    />

  </div>

export default SelectInputs