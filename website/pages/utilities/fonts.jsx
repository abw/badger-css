import React            from 'react'
import Example          from '../../site/Example.jsx'
import CodeBlock        from '../../site/CodeBlock.jsx'
import Fonts            from '../../snippets/html/fonts.html?raw'
import FontFaces        from '../../snippets/sass/font-faces.scss?raw'
import FontsSCSS        from '../../snippets/sass/fonts.scss?raw'
import FontVarsSCSS     from '../../snippets/sass/font-vars.scss?raw'
import FontVarsCSS      from '../../snippets/sass/font-vars.css?raw'
//import FontWeight       from '../../examples/styles/FontWeight.jsx'
//import FontWeightSrc    from '../../examples/styles/FontWeight.jsx?raw'

const FontsExamples = () =>
  <div className="prose">
    <h1>Fonts</h1>
    <h2>Font Classes</h2>
    <p>
      The <code>font-sans</code> CSS class can be used to select a sans-serif
      font, <code>font-serif</code> for a serif font, <code>font-system</code>{' '}
      for the system font, or <code>font-mono</code> for a monospaced font.
    </p>
    <Example
      html={Fonts}
      caption="Fonts"
      expand
    />
    <h2>Font Variables</h2>
    <p>
      Each of the above fonts is defined by a SASS variable which you can
      override to define your own font stacks.
    </p>
    <CodeBlock
      code={FontFaces}
      caption="Customising Fonts"
      language="scss"
      className="mar-b-8"
      expand
    />
    <p>
      These variables are exposed as the corresponding CSS custom properties:{' '}
      <code>--font-sans</code>, <code>--font-serif</code>,{' '}
      <code>--font-system</code> and <code>--font-mono</code>.
    </p>
    <div className="grid-2 gap-4 stack-laptop mar-b-8">
      <CodeBlock
        code={FontVarsSCSS}
        caption="Font Variables in SCSS"
        language="scss"
        expand
      />
      <CodeBlock
        code={FontVarsCSS}
        caption="Font Variables in CSS"
        language="css"
        expand
      />
    </div>
    <p>
      Or you can define your own names for fonts.
    </p>
    <CodeBlock
      code={FontsSCSS}
      caption="Font Aliases"
      language="scss"
      className="mar-b-8"
      expand
    />
    <p>
      In this case the CSS classes created will be <code>font-body</code>,{' '}
      <code>font-head</code> and <code>font-code</code>.  The fonts will also
      be defined as the <code>--font-body</code>, <code>--font-head</code>,{' '}
      and <code>--font-code</code> CSS custom properties.
    </p>
    {/*
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
    */}

  </div>

export default FontsExamples
