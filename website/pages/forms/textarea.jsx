import React    from 'react'
import Example  from '../../site/Example.jsx'
import TextArea from '../../snippets/textarea/textarea.html?raw'
import Inline   from '../../snippets/textarea/inline.html?raw'
import GridFlex from '../../snippets/textarea/grid-flex.html?raw'
import Disabled from '../../snippets/textarea/disabled.html?raw'
import Link     from '../../ui/Link.jsx'

const TextAreaInputs = () =>
  <div>
    <h1>Text Area Input</h1>
    <p>
      Text area inputs are much like <Link to="/form/text" text="text inputs"/>.
    </p>
    <p>
      One thing to note (that always catches me out) - if you want placeholder
      text to appear then you have to make sure there is <em>nothing</em>{' '}
      (not even a newline) between the opening and closing <code>textarea</code> tags.
    </p>
    <Example
      html={TextArea}
      language="html"
      caption="Text Area Input"
      expand
    />
    <h2>Inline Text Area Input</h2>
    <p>
      Text area inputs are full-width by default.  Add the{' '}
      <code>inline</code> class to give them a fluid width.
    </p>
    <Example
      html={Inline}
      language="html"
      caption="Inline Text Area Input"
      expand
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

    <h2>Disabled Text Area Input</h2>
    <p>
      Add the <code>disabled</code> attribute to disabled the input or
      the <code>disabled</code> CSS class.
    </p>
    <Example
      html={Disabled}
      language="html"
      caption="Disabled Text Area Input"
    />

  </div>

export default TextAreaInputs