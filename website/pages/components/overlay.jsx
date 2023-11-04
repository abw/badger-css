import React        from 'react'
import Absolute     from '@/snippets/overlay/absolute.html?raw'
import Fixed        from '@/snippets/overlay/fixed.html?raw'
import OverlayDemo  from '@/examples/components/Overlay.jsx'
import RelativeDemo from '@/examples/components/RelativeOverlay.jsx'
import Split        from '@/site/Split.jsx'
import CodeBlock    from '@/site/CodeBlock.jsx'

const Overlay = () =>
  <div className="prose">
    <h1>Overlay</h1>
    <p>
      Add the <code>overlay</code> class to an element to make it an overlay.
      The default positioning is <code>absolute</code> so it will fill to
      cover the nearest parent that has positioning set
      to <code>relative</code>.
    </p>
    <Split>
      <CodeBlock
        code={Absolute}
        language="html"
        caption="Overlay"
      />
      <div className="output">
        <RelativeDemo/>
      </div>
    </Split>

    <h2>Fixed Viewport</h2>
    <p>
      Add the <code>fixed</code> class to set the overlay position to{' '}
      <code>fixed</code> so that it covers the entire viewport.
    </p>
    <Split>
      <CodeBlock
        code={Fixed}
        caption="Fixed"
        language="html"
        className="mar-b-8"
      />
      <div className="output">
        <OverlayDemo/>
      </div>
    </Split>
  </div>

export default Overlay
