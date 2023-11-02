import React      from 'react'
import Example    from '@/site/Example.jsx'
import Wide       from '@/snippets/widths/wide.html?raw'
import WidthRem   from '@/snippets/widths/width-rem.html?raw'
import WidthPx    from '@/snippets/widths/width-px.html?raw'
import MaxWidth   from '@/snippets/widths/max-width.html?raw'
import WidthsSCSS from '@/snippets/sass/widths.scss?raw'
import SplitBlock from '@/site/SplitCode.jsx'
import Split      from '@/site/Split.jsx'

const RemSizes = [
  2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 25,
  30, 35, 40, 45, 50, 60, 70, 80, 90, 100
]

const WidthsExamples = () =>
  <div className="prose flow">
    <h1>Widths</h1>

    <h2>Wide</h2>
    <p>
      Use the <code>wide</code> CSS class to set an inline element to expand
      to the full width of the container.
    </p>
    <Example
      html={Wide}
      caption="Wide"
      expand
    />

    <h2>Width Classes</h2>
    <Split>
      <p>
        The <code>width-Nrem</code> classes can be used to set the width of
        an element to a number of rem units.
      </p>
      <p>
        The values for <code>N</code> can be
        <code>2</code>, <code>4</code>,{' '}
        <code>6</code>, <code>8</code>, <code>10</code>, <code>12</code>,{' '}
        <code>14</code>, <code>16</code>, <code>18</code>, <code>20</code>,{' '}
        <code>25</code>, <code>30</code>, <code>35</code>, <code>40</code>,{' '}
        <code>45</code>, <code>50</code>, <code>60</code>,{' '}
        <code>70</code>, <code>80</code>, <code>90</code> or <code>100</code>.
      </p>
    </Split>
    <Example
      html={WidthRem}
      caption="Widths"
      expand
    />
    <h2>Pixel Width Classes</h2>
    <p>
      If you prefer to think in pixels, you can use the corresponding{' '}
      <code>width-Npx</code> classes instead.
    </p>
    <Example
      html={WidthPx}
      caption="Widths in Px"
      expand
    />
    <h2>Max Width Classes</h2>
    <Split>
      <p>
        The <code>max-width-Nrem</code> classes can be used to set the maximum
        width of an element to a number of rem units.  In this case the width
        of the element will be constrained to the width of the parent element.
        You can also use the corresponding <code>max-width-Npx</code> classes
        if you prefer to think in pixels.
      </p>
      <p>
        The <code>width-*</code> and <code>max-width-*</code> classes work
        by using the <code>--width</code> custom property which is set to the
        appropriate number of rem units based on the <code>-Nrem</code>{' '}
        or <code>-Npx</code> suffix.
      </p>
    </Split>
    <Example
      html={MaxWidth}
      caption="Widths"
      expand
    />

    <h2>Rem/Pixel Sizes</h2>
    <Split>
      <p>
        The corresponding pixel widths (assuming 1rem = 16px) for each of the
        classes are shown below.
      </p>
      <p>
        You can set the <code>$rem-widths</code> SASS variable if you want to
        define a different set of width classes.
      </p>
    </Split>
    <SplitBlock
      code={WidthsSCSS}
      caption="Custom Sizes"
      language="scss"
      expand
    >
      <table className="brand celled striped properties small wide mar-b-2">
        <thead>
          <tr>
            <th>Rem Class</th>
            <th>Pixel Class</th>
            <th>Rems</th>
            <th>Pixels</th>
          </tr>
        </thead>
        <tbody>
          { RemSizes.map(
            rem =>
              <tr key={rem}>
                <td><code>width-{rem}rem</code></td>
                <td><code>width-{rem * 16}px</code></td>
                <td>{rem}</td>
                <td>{rem * 16}</td>
              </tr>
          )}
        </tbody>
      </table>
    </SplitBlock>

  </div>


export default WidthsExamples