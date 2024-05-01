import React        from 'react'
import BreakSCSS    from '@/snippets/sass/breakpoints.scss?raw'
import SplitBlock   from '@/site/SplitCode.jsx'
import Split        from '@/site/Split.jsx'
import Note         from '@/site/Note.jsx'

export const BreakpointRems = {
  mobile:     30,
  tablet:     45,
  laptop:     60,
  desktop:    75,
  widescreen: 90,
}

const Breakpoints = () =>
  <div className="prose flow">
    <h1>Breakpoints</h1>

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

    <h2>Breakpoint Widths</h2>
    <Split>
      <div>
        <p>
          You can add one of the breakpoint classes to an element to give it
          a maximum width.
        </p>
        <p>
          Add the <code>block-center</code> class to center a block,
          or <code>block-right</code> to right align it.
        </p>
      </div>
      <Note title="Try it out!">
        Try resizing your browser window and see how the elements below
        respond.
      </Note>
    </Split>
    <div className="mobile surface-2 border pad-4">
      <h3 className="font-mono">.mobile</h3>
    </div>
    <div className="tablet surface-2 border pad-4">
      <h3 className="font-mono">.tablet</h3>
    </div>
    <div className="laptop surface-2 border pad-4">
      <h3 className="font-mono">.laptop</h3>
    </div>
    <div className="desktop surface-2 border pad-4">
      <h3 className="font-mono">.desktop</h3>
    </div>
    <div className="widescreen surface-2 border pad-4">
      <h3 className="font-mono">.widescreen</h3>
    </div>

    <div className="mobile block-center surface-2 border pad-4">
      <h3 className="font-mono">.mobile.block-center</h3>
    </div>
    <div className="tablet block-right surface-2 border pad-4">
      <h3 className="font-mono">.tablet.block-right</h3>
    </div>
  </div>

export default Breakpoints
