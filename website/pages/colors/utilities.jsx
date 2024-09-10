import React      from 'react'
import Example    from '@/site/Example.jsx'
import Classes    from '@/snippets/color/classes.html?raw'
import Dark       from '@/snippets/color/dark.html?raw'
import Inverse    from '@/snippets/color/inverse.html?raw'
import Inherit    from '@/snippets/color/inherit.html?raw'
import Comps      from '@/snippets/color/components.html?raw'
import Custom     from '@/snippets/color/custom.html?raw'
import Note       from '@/site/Note.jsx'
import ScopeVars  from '@/site/ScopeVars.jsx'
import Split      from '@/site/Split.jsx'
import { BorderLink } from '@/site/Links.jsx'

const colorSelection1 =  ['red', 'brown', 'orange']

const Colors = () =>
  <div className="prose flow">
    <h1>Color Utilities</h1>
    <h2>Color Classes</h2>
    <Split>
      <p>
        Each of the color ranges defined in your palette has a corresponding
        class. For example, the <code>red</code> class can be used to select
        the red color range.  Some of the colors also have semantic aliases,
        e.g. <code>error</code> and <code>invalid</code> are aliases for{' '}
        <code>red</code>.
      </p>
      <p>
        Selecting a color range doesn&apos;t have much of a visible effect by
        itself.  The important things is that it maps the <code>--color-N</code>{' '}
        CSS custom properties to the equivalent stops from the selected color
        range.  For example, in the scope of the <code>red</code> CSS class, the{' '}
        <code>--color-0</code> property is mapped to <code>--red-0</code>,{' '}
        <code>--color-5</code> is mapped to <code>--red-5</code>,{' '}
        <code>--color-10</code> to <code>--red-10</code> and so on up to 100.
      </p>
    </Split>
    <div className="small flex gap-4">
      { colorSelection1.map(
        col =>
          <div key={col}>
            <h3 className="font-mono mar-b-2">.{col} {'{'} ... {'}'}</h3>
            <ScopeVars
              scope={col}
              to={col}
              abbreviate={true}
            />
          </div>
      )}
      <div>
        <h3 className="font-mono mar-b-2">...etc</h3>
      </div>
    </div>

    <h2>Foreground, Background and Border Colors</h2>
    <Split>
      <p>
        The <code>fgc-N</code>, <code>bgc-N</code>, <code>hdc-N</code> and{' '}
        <code>bdc-N</code> classes can be used to select a stop from the color
        range for the foreground color, background color, heading color and border
        color, respectively.
      </p>
      <p>
        For example, the <code>bgc-80</code> CSS class will set the background
        color to whatever color is mapped to <code>--color-80</code>.  In the scope
        of the <code>red</code> CSS class, that will be <code>--red-80</code>.
      </p>
    </Split>
    <div className="grid-2 gap-8 stack-desktop">
      <ClassMap
        classes={[
          ['fgc-N', '--color',            <><b>f</b>ore<b>g</b>round <b>c</b>olor stop <code>N</code></>],
          ['bgc-N', '--background-color', <><b>b</b>ack<b>g</b>round <b>c</b>olor stop <code>N</code></>],
          ['hdc-N', '--heading-color',    <><b>h</b>ea<b>d</b>ing <b>c</b>olor stop <code>N</code></>],
          ['bdc-N', '--border-color',     <><b>b</b>or<b>d</b>er <b>c</b>olor stop <code>N</code></>]
        ]}
      />
      <div>
        <Note>
          The <code>bdc-N</code> classes are designed to be used in
          conjunction with the <code>border</code> class and other classes for
          setting <BorderLink/>.  A <code>bdc-N</code> class will set the color
          border, but you won&apos;t see any effect unless you also add
          the <code>border</code> class.
        </Note>
      </div>
    </div>

    <Example
      html={Classes}
      caption="Color Classes"
      expand
    />

    <h2>Dark Theme</h2>
    <p>
      The <code>fgd-N</code>, <code>bgd-N</code>, <code>hdd-N</code> and{' '}
      <code>bdd-N</code> classes are equivalents of the above for when a dark
      theme is selected.  You can set foreground, background, heading and
      border colors for both light and dark themes and they will be switched
      in automatically.
    </p>
    <Split>
      <ClassMap
        classes={[
          ['fgd-N', '--color',            <><b>f</b>ore<b>g</b>round <b>d</b>ark theme color stop <code>N</code></>],
          ['bgd-N', '--background-color', <><b>b</b>ack<b>g</b>round <b>d</b>ark theme color stop <code>N</code></>],
          ['hdd-N', '--heading-color',    <><b>h</b>ea<b>d</b>ing <b>d</b>ark theme color stop <code>N</code></>],
          ['bdd-N', '--border-color',     <><b>b</b>or<b>d</b>er <b>d</b>ark theme color stop <code>N</code></>]
        ]}
      />
      <Note>
        The same rule applies for <code>bdd-N</code> as it does for{' '}
        <code>bdc-N</code> - it selects the border color but you still need
        to add the <code>border</code> class to make the border visible.
      </Note>
    </Split>

    <Example
      html={Dark}
      caption="Dark Theme"
      expand
    />

    <h2>Color Inheritance</h2>
    <p>
      CSS custom properties are inherited by child elements.  This means you
      can select a color range on an element and all children will inherit
      that color range.
    </p>
    <Example
      html={Inherit}
      caption="Color Inheritance"
      expand
    />

    <h2>Easy Component Coloring</h2>
    <p>
      This effect is used by various badger-css components. They use the
      generic <code>--color-N</code> properties to define colors and can then
      be rendered using any color range.
    </p>
    <Example
      html={Comps}
      caption="Color Components"
    />
    <h2>Creating Your Own Colored Components</h2>
    <Split>
      <p>
        You can employ this in your own components by using the{' '}
        <code>--color-N</code> CSS custom properties to define your component
        colours.
      </p>
      <p>
        This is particularly useful when implementing components for both light
        and dark themes.  You only need to specify which <code>--color-N</code> stops
        you want to use in each case.  You don&apos;t need to write separate CSS
        rules for each of the colors you might want to use.
      </p>
    </Split>
    <Example
      html={Custom}
      caption="Custom Components"
    />

    <h2>Inverse Colors</h2>
    <p>
      The <code>inverse</code> CSS class can be added as a shortcut to
      define an inverse color block.
    </p>
    <Example
      html={Inverse}
      caption="Inverse Colors"
      expand
    />


  </div>

const ClassMap = ({classes}) =>
  <table className="brand celled striped mar-b-8">
    <thead>
      <tr>
        <th>Class</th>
        <th>Property</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      { classes.map(
        cls =>
          <tr key={cls[0]}>
            <td><code className="nowrap">{cls[0]}</code></td>
            <td><code className="nowrap">{cls[1]}</code></td>
            <td>{cls[2]}</td>
          </tr>
      ) }
    </tbody>
  </table>



export default Colors
