import React        from 'react'
import Absolute     from '@/snippets/overlay/absolute.html?raw'
import Fixed        from '@/snippets/overlay/fixed.html?raw'
import Light        from '@/snippets/overlay/light.html?raw'
import Dark         from '@/snippets/overlay/dark.html?raw'
import OverlayDemo  from '@/examples/components/Overlay.jsx'
import Overlay2     from '@/examples/components/Overlay2.jsx'
import RelativeDemo from '@/examples/components/RelativeOverlay.jsx'
import Split        from '@/site/Split.jsx'
import { Source }   from '@abw/badger-website'

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
      <Source
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
      <Source
        code={Fixed}
        caption="Fixed"
        language="html"
        className="mar-b-8"
      />
      <div className="output">
        <OverlayDemo/>
      </div>
    </Split>

    <h2>Light and Dark</h2>
    <p>
      The default overlay color is white for a light theme and black for a
      dark theme.  You can explicitly add the <code>light</code> or{' '}
      <code>dark</code> CSS class if you want a particular color overlay
      regardless of the theme.
    </p>
    <Split>
      <Source
        code={Light}
        language="html"
        caption="Light Overlay"
      />
      <div className="output">
        <Overlay2 className="light" title="Show Light Overlay"/>
      </div>
    </Split>
    <Split align="mar-t-8">
      <Source
        code={Dark}
        language="html"
        caption="Dark Overlay"
      />
      <div className="output">
        <Overlay2 className="dark" title="Show Dark Overlay"/>
      </div>
    </Split>

  </div>

export default Overlay
