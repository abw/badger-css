import React         from 'react'
import Example       from '@/site/Example.jsx'
import SplitBlock    from '@/site/SplitCode.jsx'
import Sizes         from '@/snippets/html/sizes.html?raw'
import SizeMultiples from '@/snippets/html/size-multiples.html?raw'
import SizesSCSS     from '@/snippets/sass/sizes.scss?raw'
import SizesTable    from '../../table/Sizes.jsx'
import Split from '@/site/Split.jsx'

const SizesExamples = () =>
  <div className="prose flow">
    <h1>Text Sizes</h1>
    <h2>Size Classes</h2>
    <p>
      Use the <code>smallest</code>, <code>smaller</code>,{' '}
      <code>small</code>, <code>medium</code> (default){' '}
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

    <h2>Default Sizes</h2>
    <Split>
      <p>
        The pre-defined values for the sizes are shown here.
      </p>
      <SizesTable
        rows={[
          ['smallest', '0.625rem', '10px' ],
          ['smaller', '0.75rem', '12px' ],
          ['small', '0.875rem', '14px' ],
          ['medium', '1rem', '16px' ],
          ['large', '1.25rem', '20px' ],
          ['larger', '1.5rem', '24px' ],
          ['largest', '2rem', '32px' ],
        ]}
      />
    </Split>

    <h2>Custom Sizes</h2>
    <SplitBlock
      code={SizesSCSS}
      caption="Custom Sizes"
      language="scss"
      expand
    >
      <p>
        You can set the <code>$sizes</code> SCSS variable if you want to
        define a different set of sizes, either to give them different names
        or values.
      </p>
      <p>
        In the example shown here the generated CSS classes would be{' '}
        <code>xxs</code>, <code>xs</code>, <code>s</code>,{' '}
        <code>m</code>, <code>l</code>, <code>xl</code> and <code>xxl</code>.
      </p>
    </SplitBlock>

    <h2>Size Multipliers</h2>
    <p>
      For larger text sizes you can use the size multiple classes:{' '}
      <code>x2</code>, <code>x3</code>, etc., up to <code>x10</code>.
      These are all multiples of <code>1rem</code>.
    </p>
    <Example
      html={SizeMultiples}
      caption="Text Sizes"
      expand
    />
  </div>

export default SizesExamples
