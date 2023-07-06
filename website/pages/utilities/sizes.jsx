import React         from 'react'
import Example       from '../../site/Example.jsx'
import Sizes         from '../../snippets/html/sizes.html?raw'
import SizeMultiples from '../../snippets/html/size-multiples.html?raw'
import SplitBlock    from '../../site/SplitCode.jsx'
import SizesSCSS     from '../../snippets/sass/sizes.scss?raw'

const SizesExamples = () =>
  <div className="prose">
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

    <h2>Custom Sizes</h2>
    <p>
      The pre-defined values for the sizes are shown in the table below.
    </p>
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
    <SplitBlock
      code={SizesSCSS}
      caption="Custom Sizes"
      language="scss"
      expand
    >
      <table className="brand celled striped properties small wide mar-b-2">
        <thead>
          <tr>
            <th>Class</th>
            <th>Rem Size</th>
            <th>Pixel Size <span className="smaller">(when 1rem=16px)</span></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>smallest</code></td>
            <td>0.625rem</td>
            <td>10px</td>
          </tr>
          <tr>
            <td><code>smaller</code></td>
            <td>0.75rem</td>
            <td>12px</td>
          </tr>
          <tr>
            <td><code>small</code></td>
            <td>0.875rem</td>
            <td>14px</td>
          </tr>
          <tr>
            <td><code>medium</code></td>
            <td>1rem</td>
            <td>16px</td>
          </tr>
          <tr>
            <td><code>large</code></td>
            <td>1.25rem</td>
            <td>20px</td>
          </tr>
          <tr>
            <td><code>larger</code></td>
            <td>1.5rem</td>
            <td>24px</td>
          </tr>
          <tr>
            <td><code>largest</code></td>
            <td>2rem</td>
            <td>32px</td>
          </tr>
        </tbody>
      </table>
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
