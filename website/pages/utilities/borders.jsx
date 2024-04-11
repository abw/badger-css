import React        from 'react'
import Example      from '@/site/Example.jsx'
import Border       from '@/snippets/border/border.html?raw'
import Width        from '@/snippets/border/width.html?raw'
import Color        from '@/snippets/border/color.html?raw'
import Radius       from '@/snippets/border/radius.html?raw'
import Square       from '@/snippets/border/square.html?raw'
import Corners      from '@/snippets/border/corners.html?raw'
import Custom       from '@/snippets/border/custom.html?raw'
import WidthsSCSS   from '@/snippets/sass/border-widths.scss?raw'
import RadiusSCSS   from '@/snippets/sass/border-radius.scss?raw'
import Borderless   from '@/snippets/html/borderless-radius.html?raw'
import PropertySets from '@/site/PropertySets.jsx'
import CodeBlock    from '@/site/CodeBlock.jsx'
import Note         from '@/site/Note.jsx'

const BorderExamples = () =>
  <div className="prose flow">
    <h1>Borders</h1>

    <h2>Border Class</h2>
    <p>
      Add the <code>border</code> CSS class to an element to give it a border.
    </p>
    <Example
      html={Border}
      caption="Border"
      expand
    />

    <h2>Border Width</h2>
    <p>
      Add the <code>bdw-N</code> CSS class to set the border width, where{' '}
      <code>N</code> is in pixel units.
    </p>
    <Example
      html={Width}
      caption="Border Width"
      expand
    />
    <div className="grid-2 gap-8 stack-desktop">
      <div className="wide">
        <p>
          The pre-defined values for <code>N</code> are{' '}
          <code>0</code>, <code>1</code>, <code>2</code>, <code>3</code>,{' '}
          <code>4</code>, <code>5</code>, <code>6</code>, <code>8</code> and{' '}
          <code>10</code>.
        </p>
        <p>
          You can set the <code>$border-width-values</code> SCSS
          variable if you want to define a different set of values.
          You can also use the <code>$border-width-prefix</code> to define
          a different prefix for the border width classes if you don&apos;t
          like <code>bdw</code>.
        </p>
        <p>
          In the example shown here the generated CSS classes would be{' '}
          <code>br-wd-1</code>, <code>br-wd-2</code>,{' '}
          <code>br-wd-3</code>, <code>br-wd-5</code> and so on.
        </p>
      </div>
      <CodeBlock
        code={WidthsSCSS}
        caption="Custom Border Widths"
        language="scss"
        className="mar-b-8"
        expand
      />
    </div>

    <h2>Border Color</h2>
    <p>
      Add the <code>bdc-N</code> CSS class to set the border color, where{' '}
      <code>N</code> is a color stop (0, 5, 10, etc) for the current color
      range.  Use <code>bdd-N</code> to set a different color for dark mode.
    </p>
    <Example
      html={Color}
      caption="Border Color"
    />

    <h2>Border Radius</h2>
    <p>
      Add the <code>bdr-N</code> classes to set the radius of borders.
      The <code>-N</code> multiplier is a multiple of the base unit radius
      (0.25rem by default).
    </p>
    <Example
      html={Radius}
      caption="Border Radius"
      expand
    />

    <p>
      The <code>bdr-0</code> class can be used to <i>explicitly</i> set the
      border radius to 0. The <code>square</code> class is an alias for{' '}
      <code>bdr-0</code> with the added benefit of having the{' '}
      <code>!important</code> flag set for when you really need to drive the
      point home.
    </p>
    <p>
      They can be used to remove the corner radius from components which
      have them by default, like buttons and form fields.
    </p>
    <Example
      html={Square}
      caption="Square Corners"
      expand
    />

    <div className="grid-2 gap-8 stack-desktop">
      <div className="wide">
        <p>
          The pre-defined values for <code>N</code> are{' '}
          <code>0</code>, <code>1</code>, <code>2</code>, <code>3</code>,{' '}
          <code>4</code>, <code>5</code>, <code>6</code>, <code>8</code> and{' '}
          <code>10</code>.
        </p>
        <p>
          You can set the <code>$border-radius-values</code> SCSS
          variable if you want to define a different set of values.
          You can also use the <code>$border-radius-prefix</code> to define
          a different prefix for the border radius classes if you don&apos;t
          like <code>bdr</code>.
        </p>
        <p>
          In the example shown here the generated CSS classes would be{' '}
          <code>br-rd-1</code>, <code>br-rd-2</code>,{' '}
          <code>br-rd-3</code>, <code>br-rd-5</code> and so on.
        </p>
      </div>
      <CodeBlock
        code={RadiusSCSS}
        caption="Custom Border Radius"
        language="scss"
        className="mar-b-8"
        expand
      />
    </div>


    <h2>Border Radius Corners</h2>
    <p>
      You can independently set the radius for different corners using these
      classes.
    </p>
    <div className="grid-2 gap-8 stack-desktop">
      <table className="brand border lined striped mar-b-8">
        <thead>
          <tr>
            <th>Class</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>bdr-t-N</code></td><td>Top left and top right corner radius</td></tr>
          <tr><td><code>bdr-b-N</code></td><td>Bottom left and bottom right corner radius</td></tr>
          <tr><td><code>bdr-l-N</code></td><td>Top left and bottom left corner radius</td></tr>
          <tr><td><code>bdr-r-N</code></td><td>Top right and bottom right corner radius</td></tr>
          <tr><td><code>bdr-tl-N</code></td><td>Top left corner radius</td></tr>
          <tr><td><code>bdr-tr-N</code></td><td>Top right corner radius</td></tr>
          <tr><td><code>bdr-bl-N</code></td><td>Bottom left corner radius</td></tr>
          <tr><td><code>bdr-br-N</code></td><td>Bottom right corner radius</td></tr>
        </tbody>
      </table>
      <div>
        <Note>
          If you set a custom <code>$border-radius-prefix</code> as shown
          above then your CSS classes will start with your chosen prefix
          instead of <code>bdr</code> as shown here.
        </Note>
      </div>
    </div>

    <Example
      html={Corners}
      caption="Border Radius Corners"
      expand
    />

    <h2>No Border Required!</h2>
    <p>
      You don&apos;t need to have a border displayed to set the border
      radius. The <code>bdr-N</code> classes can be used to set the
      border radius on various components.
    </p>
    <Example
      html={Borderless}
      caption="Radius Components"
      expand
    />


    <h2>Border Properties</h2>
    <p>
      The following properties are used to define the border style.
    </p>
    <PropertySets
      sets={[
        {
          title: 'Defaults',
          properties: [
            [ '--border-width',
              <code key="1px">1px</code>,
              'Border width'
            ],
            [ '--border-style',
              <code key="solid">solid</code>,
              <span key="desc">Border style: <code>solid</code>, <code>dotted</code>, <code>dashed</code>, etc.</span>
            ],
            [ '--border-radius',
              <code key="radius">var(--unit-radius)</code>,
              'Border radius'
            ],
            [ '--border-color',
              <code key="color">var(--color-75)</code>,
              'Border color from current color range'
            ],
          ]
        },
        {
          title: 'Dark Theme',
          properties: [
            [ '--border-color',
              <code key="color">var(--color-25)</code>,
              'Border color from current color range'
            ]
          ]
        }
      ]}
    />
    <h2>Setting Custom Properties</h2>
    <Example
      html={Custom}
      caption="Custom Border Style"
      expand
    />
  </div>

export default BorderExamples
