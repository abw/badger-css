import React      from 'react'
import Example    from '@/site/Example.jsx'
import GridBreak  from '@/snippets/stack/grid-breakpoint.html?raw'
import FlexBreak  from '@/snippets/stack/flex-breakpoint.html?raw'
import Container  from '@/snippets/stack/container.html?raw'
import BreakSCSS  from '@/snippets/sass/breakpoints.scss?raw'
import SplitBlock from '@/site/SplitCode.jsx'
import Split      from '@/site/Split.jsx'
import Note       from '@/site/Note.jsx'
import { FlexLink, GridLink, SplitLink } from '@/site/Links.jsx'
import { BreakpointRems } from './breakpoints.jsx'

const Stack = () =>
  <div className="prose flow">
    <h1>Stacking Split Columns</h1>

    <p>
      One of the problems with creating columns using{' '}
      <GridLink/>, <FlexLink/> and  <SplitLink/> is
      that sometimes a user&apos;s screen size isn&apos;t large
      enough to accommodate them.
    </p>
    <p>
      The <code>stack-*</code> classes can be used to stack columns
      when the screen size is narrower than a threshold breakpoint.
      These are <code>stack-mobile</code>, <code>stack-tablet</code>,{' '}
      <code>stack-laptop</code>, <code>stack-desktop</code> and{' '}
      <code>stack-widescreen</code>.
    </p>

    <h2>Grid Stacking</h2>
    <Split>
      <p>
        This example shows how adding a <code>stack-*</code> class to an
        element that has one of the <code>grid-*</code> classes will cause
        the columns to be stacked at different breakpoints.
      </p>
      <Note title="Try it out!">
        Try resizing your browser window and see how the grid
        elements below get stacked.
      </Note>
    </Split>
    <Example
      html={GridBreak}
      caption="Stacking Grids"
    />

    <h2>Flexbox Stacking</h2>
    <p>
      This example shows the same thing for <code>flex</code> containers.
    </p>

    <Example
      html={FlexBreak}
      caption="Stacking Flexbox"
    />

    <h2>Container Query Stacking</h2>
    <p>
      The stacking examples shown above use media queries that are based on
      the width of the browser viewport.  The problem with this is that your
      content may be inside a container that doesn&apos;t extend to the
      full width of the viewport.  This is the problem that container queries
      were designed to solve.
    </p>
    <p>
      If you add the <code>stack</code> class to a container element then any
      elements contained within that have <code>stack-*</code> classes will
      instead use the width of the container element.  Technically speaking,
      they will use the width of the closest parent with a <code>stack</code>{' '}
      class.
    </p>

    <Example
      html={Container}
      caption="Container"
    />

    {/*
    <h2>Rem/Px Width Stacking</h2>
    <p>
      The <code>stack-Nrem</code> and <code>stack-Npx</code>classes can be
      used to enable stacking
      based on the width of the container.  Unlike the classes shown
      above which use <code>@media</code> queries, these use{' '}
      <code>@container</code> queries.
    </p>
    <Example
      html={Width}
      caption="Stacking Width"
    />
    */}

    <h2>Breakpoint Names</h2>
    <Split>
      <p>
        The breakpoint names and their corresponding widths in rems and
        pixels (assuming 1rem = 16px) are shown below.
      </p>
      <p>
        You can set the <code>$breakpoints</code> SASS variable if you want to
        define a different set of breakpoints.
      </p>
    </Split>
    <SplitBlock
      code={BreakSCSS}
      caption="Custom Breakpoints"
      language="scss"
      expand
    >
      <table className="brand celled striped properties small wide mar-b-2">
        <thead>
          <tr>
            <th>Class</th>
            <th>Rems</th>
            <th>Pixels</th>
          </tr>
        </thead>
        <tbody>
          { Object.entries(BreakpointRems).map(
            ([name, rems]) =>
              <tr key={name}>
                <td><code>{name}</code></td>
                <td>{rems}rem</td>
                <td>{rems * 16}px</td>
              </tr>
          )}
        </tbody>
      </table>
    </SplitBlock>


  </div>

export default Stack
