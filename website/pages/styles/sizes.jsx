import React            from 'react'
import Example          from '../../site/Example.jsx'
import TextSizes        from '../../examples/styles/TextSizes.jsx'
import TextSizesSrc     from '../../examples/styles/TextSizes.jsx?raw'
import SizeMultiples    from '../../examples/styles/SizeMultiples.jsx'
import SizeMultiplesSrc from '../../examples/styles/SizeMultiples.jsx?raw'

const Sizes = () =>
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
      Component={TextSizes}
      code={TextSizesSrc}
      caption="Text Sizes"
      expand
    />
    <p>
      For larger text sizes use the size multiples: <code>x2</code>,{' '}
      <code>x3</code>, etc., up to <code>x10</code>.
    </p>
    <Example
      Component={SizeMultiples}
      code={SizeMultiplesSrc}
      caption="Text Sizes"
      expand
    />
  </div>

export default Sizes
