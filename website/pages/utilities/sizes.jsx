import React         from 'react'
import Example       from '../../site/Example.jsx'
import Sizes         from '../../snippets/html/sizes.html?raw'
import SizeMultiples from '../../snippets/html/size-multiples.html?raw'

const SizesExamples = () =>
  <div>
    <h1>Text Sizes</h1>
    <p>
      Use the <code>smallest</code>, <code>smaller</code>,{' '}
      <code>small</code>, <code>smallish</code>, <code>largish</code>,{' '}
      <code>large</code>, <code>larger</code> and <code>largest</code> CSS
      classes to set the text size. These are defined as SASS variables which
      you can override (e.g. <code>$size-large</code>) and CSS custom properties
      which you can use in your own stylesheets or inline styles
      (e.g. <code>--size-large</code>).
    </p>
    <Example
      html={Sizes}
      caption="Text Sizes"
      expand
    />
    <p>
      For larger text sizes use the size multiples: <code>x2</code>,{' '}
      <code>x3</code>, etc., up to <code>x10</code>.
    </p>
    <Example
      html={SizeMultiples}
      caption="Text Sizes"
      expand
    />
  </div>

export default SizesExamples
