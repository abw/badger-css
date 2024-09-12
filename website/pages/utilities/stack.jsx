import React      from 'react'
import SplitCode  from '@/site/SplitCode.jsx'
import Split      from '@/site/Split.jsx'
import Note       from '@/site/Note.jsx'
import BreakSCSS  from '@/snippets/sass/breakpoints.scss?raw'
import { useWindow } from '@abw/badger-react-ui'
import { BreakpointRems } from './_examples/Breakpoints.jsx'
import { FlexLink, GridLink, SplitLink } from '@/site/Links.jsx'

const Stack = () =>
  <div>
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
      <p className="mar-b-4">
        This example shows how adding a <code>stack-*</code> class to an
        element that has one of the <code>grid-*</code> classes will cause
        the columns to be stacked at different breakpoints.
      </p>
      <Note title="Try it out!">
        Try resizing your browser window and see how the grid
        elements below get stacked.
      </Note>
    </Split>
    <div className="grid-1 gap-4">
      <ScreenSize/>
      <GridElements stack="widescreen"/>
      <GridElements stack="desktop"/>
      <GridElements stack="laptop"/>
      <GridElements stack="tablet"/>
      <GridElements stack="mobile"/>
    </div>

    <h2>Flexbox Stacking</h2>
    <p>
      This example shows the same thing for <code>flex</code> containers.
    </p>
    <div className="grid-1 gap-4">
      <ScreenSize/>
      <FlexElements stack="widescreen"/>
      <FlexElements stack="desktop"/>
      <FlexElements stack="laptop"/>
      <FlexElements stack="tablet"/>
      <FlexElements stack="mobile"/>
    </div>

    <h2>Container Query Stacking</h2>
    <Split>
      <div>
        <p>
          The stacking examples shown above use media queries that are based on
          the width of the browser viewport.  The problem with this is that your
          content may be inside a container that doesn&apos;t extend to the
          full width of the viewport.  This is the problem that container queries
          were designed to solve.
        </p>
        <p>
          All you need to do is add the <code>container</code> class to a container
          element.  Any elements contained within that have <code>stack-*</code>
          classes will then use the width of the container element instead of the
          browser window.
        </p>
      </div>
      <div>
        <p>
          You can have multiple <code>.container</code> elements
          nested and the <code>stack-*</code> elements will use the width
          of the closest parent with a <code>container</code> class.
        </p>
        <p>
          In this example the container is set to a maximum width of 35rem which
          is below the 45rem that triggers the <code>stack-tablet</code> breakpoint,
          but above the 30rem that triggers the <code>stack-mobile</code> breakpoint.
          Of course, your mileage may vary depending on what size screen you&apos;re
          using, but if you have a window size wide enough to display the 35rem
          container then you should see the first set of elements stacking and
          the second set displayed in a grid.
        </p>
      </div>
    </Split>

    <Container width="35rem" breakpoint="tablet">
      <GridElements stack="tablet"/>
      <GridElements stack="mobile"/>
    </Container>

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
    <SplitCode
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
    </SplitCode>
  </div>

const ScreenSize = () => {
  const { width, breakpoint } = useWindow()
  return (
    <div className="flex start center gap-4 stack-mobile">
      <div className="inverse pad-a-2 bdr-1 mar-b-2 text-center">
        Screen width: <span className="font-mono">{width}px</span>
      </div>
      <div className="inverse pad-a-2 bdr-1 mar-b-2 text-center">
        Breakpoint: <span className="font-mono">{breakpoint}</span>
      </div>
    </div>
  )
}

const Container = ({ width, breakpoint, children }) =>
  <div className={`grid-1 gap-4 container block-center max-width-${width}`}>
    <div className="flex start center gap-4 stack-mobile">
      <div className="inverse pad-a-2 bdr-1 mar-b-2 text-center">
        Container max width: <span className="font-mono">{width}</span>
      </div>
      <div className="inverse pad-a-2 bdr-1 mar-b-2 text-center">
        Breakpoint: <span className="font-mono">{breakpoint}</span>
      </div>
    </div>
    {children}
  </div>

const FlexElements = ({stack}) =>
  <StackableElements className="flex center gap-4 wrap" stack={stack}/>

const GridElements = ({stack}) =>
  <StackableElements className="grid-fit gap-4" stack={stack}/>

const StackableElements = ({className, stack}) =>
  <div className="border bdr-2 pad-a-4 paper">
    <div className="text-center font-mono small mar-b-2 ">.{className.split(' ').join('.')}.<b>stack-{stack}</b></div>
    <div className={`${className} stack-${stack}`}>
      <div className="inverse pad-a-2 bdr-1 red    ">Red</div>
      <div className="inverse pad-a-2 bdr-1 brown  ">Brown</div>
      <div className="inverse pad-a-2 bdr-1 orange ">Orange</div>
      <div className="inverse pad-a-2 bdr-1 yellow ">Yellow</div>
      <div className="inverse pad-a-2 bdr-1 olive  ">Olive</div>
      <div className="inverse pad-a-2 bdr-1 green  ">Green</div>
      <div className="inverse pad-a-2 bdr-1 teal   ">Teal</div>
      <div className="inverse pad-a-2 bdr-1 blue   ">Blue</div>
      <div className="inverse pad-a-2 bdr-1 indigo ">Indigo</div>
      <div className="inverse pad-a-2 bdr-1 violet ">Violet</div>
      <div className="inverse pad-a-2 bdr-1 purple ">Purple</div>
      <div className="inverse pad-a-2 bdr-1 pink   ">Pink</div>
      <div className="inverse pad-a-2 bdr-1 maroon ">Maroon</div>
    </div>
  </div>


// export default Context.Consumer(Stack)
export default Stack
