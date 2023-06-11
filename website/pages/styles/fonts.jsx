import React            from 'react'
import Example          from '../../site/Example.jsx'
import CodeBlock        from '../../site/CodeBlock.jsx'
import Fonts            from '../../examples/styles/Fonts.jsx'
import FontsSrc         from '../../examples/styles/Fonts.jsx?raw'
import FontWeight       from '../../examples/styles/FontWeight.jsx'
import FontWeightSrc    from '../../examples/styles/FontWeight.jsx?raw'
import fonts            from '../../snippets/sass/fonts.scss?raw'

const FontsExamples = () =>
  <>
    <h1>Fonts</h1>
    <p>
      The <code>font-sans</code> CSS class can be used to select a sans-serif
      font, <code>font-serif</code> for a serif font, <code>font-system</code>{' '}
      for the system font, or <code>font-mono</code> for a monospaced font.
    </p>
    <Example
      Component={Fonts}
      code={FontsSrc}
      caption="Fonts"
      expand
    />
    <p>
      Each of the above fonts is defined by a SASS variable which you can
      override to define your own font stacks. These variable are also
      exposed as the corresponding CSS custom properties:{' '}
      <code>--font-sans</code>, <code>--font-serif</code>,{' '}
      <code>--font-system</code> and <code>--font-mono</code>.
    </p>
    <CodeBlock
      code={fonts}
      caption="Customising Fonts"
      language="scss"
      className="mar-b-8"
      expand
    />
    <p>
      Three font weights are defined and can be selected using the CSS
      classes <code>weight-light</code>, <code>weight-normal</code> and{' '}
      <code>weight-bold</code>.  These are also defined using SASS variables
      which you can override: <code>$weight-light</code> defaulting to 300,{' '}
      <code>$weight-normal</code> defaulting the 400 and <code>$weight-bold</code>{' '}
      defaulting to 700.  They also have corresponding CSS custom properties:{' '}
      <code>--weight-light</code>, <code>--weight-normal</code> and{' '}
      <code>--weight-bold</code>.  The the sake of brevity, the{' '}
      <code>bold</code> CSS class is also defined as an alias for{' '}
      <code>weight-bold</code>.  There&apos;s also an <code>italic</code> CSS
      class for italicised text.
    </p>
    <Example
      Component={FontWeight}
      code={FontWeightSrc}
      caption="Font Weight"
      expand
    />

  </>

export default FontsExamples
