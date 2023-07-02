import React    from 'react'
import Example  from '../../site/Example.jsx'
import Text     from '../../snippets/form/text.html?raw'
import TextWide from '../../snippets/form/text-wide.html?raw'
import TextGrid from '../../snippets/form/text-grid.html?raw'
import Link from '../../ui/Link.jsx'

const TextInputs = () =>
  <div>
    <h1>Text Input</h1>
    <p>
      Text inputs are perhaps the most common kind of input.
    </p>
    <Example
      html={Text}
      language="html"
      caption="Text Input"
    />
    <p>
      Add the <code>wide</code> class to make it stretch to fill the container.
    </p>
    <Example
      html={TextWide}
      language="html"
      caption="Wide Text Input"
    />
    <p>
      You can use the <Link to="/utilities/grid" text="grid"/> utility classes
      to group inputs together on the same line.
    </p>
    <Example
      html={TextGrid}
      language="html"
      caption="Text Grid"
    />

  </div>

export default TextInputs