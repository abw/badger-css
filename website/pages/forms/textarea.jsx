import React    from 'react'
import Example  from '../../site/Example.jsx'
import TextArea from '../../snippets/form/textarea.html?raw'
import TextWide from '../../snippets/form/textarea-wide.html?raw'
import Link from '../../ui/Link.jsx'

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
    <p>
      Add the <code>wide</code> class to make it stretch to fill the container.
    </p>
    <Example
      html={TextWide}
      language="html"
      caption="Wide Text Area Input"
      expand
    />

  </div>

export default TextAreaInputs