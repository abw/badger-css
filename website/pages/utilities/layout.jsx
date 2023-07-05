import React        from 'react'
import Example      from '../../site/Example.jsx'
import Display      from '../../snippets/layout/display.html?raw'
import TextAlign    from '../../snippets/layout/text.html?raw'
import TextLeft     from '../../snippets/layout/text-left.html?raw'
import Position     from '../../snippets/layout/position.html?raw'
import Scroll       from '../../snippets/layout/scroll.html?raw'
import Wide         from '../../snippets/layout/wide.html?raw'
import Link from '../../ui/Link.jsx'

const Layout = () =>
  <div className="prose">
    <h1>Layout</h1>

    <h2>Display Modes</h2>
    <p>
      The <code>inline</code>, <code>block</code> and{' '}
      <code>inline-block</code> CSS classes can be used to set the{' '}
      <code>display</code> mode.   These are useful when you have an element
      that would normally have one display type that you want displayed in
      a different way.
    </p>
    <p>
      See the{' '}
      <Link to="/utilities/flexbox" text="flexbox"/> and{' '}
      <Link to="/utilities/grid" text="grid"/> pages for information about
      using flex and grid display modes.
    </p>
    <Example
      html={Display}
      caption="Display Modes"
      expand
    />

    <h2>Text Alignment</h2>
    <p>
      Add the <code>text-left</code>, <code>text-center</code> and{' '}
      <code>text-right</code> CSS classes to set the text alignment.
    </p>
    <Example
      html={TextAlign}
      caption="Text Alignment"
      expand
    />
    <p>
      Text is aligned left by default making the <code>text-left</code>{' '}
      class <em>mostly</em> redundant.  However it can be useful to reset the
      alignment to the left for a block that would otherwise be aligned
      centrally or to the right
    </p>
    <Example
      html={TextLeft}
      caption="Text Left"
      expand
    />

    <h2>Position</h2>
    <p>
      Add the <code>absolute</code>, <code>relative</code> and{' '}
      <code>fixed</code> CSS classes to set the position type.
    </p>
    <p>
      For elements that are set to <code>absolute</code> or <code>fixed</code>{' '}
      position, the <code>top</code>, <code>bottom</code>, <code>left</code>{' '}
      and <code>right</code> classes can be used to position them against the
      corresponding edge of the closest parent element with the{' '}
      <code>relative</code> position type.
    </p>
    <Example
      html={Position}
      caption="Position"
      expand
    />

    <h2>Scroll</h2>
    <p>
      Add the <code>scroll-x</code> or <code>scroll-y</code> CSS classes to
      set <code>overflow-x</code> or <code>overflow-y</code> to <code>scroll</code>,
      respectively.
    </p>
    <p>
      Be warned that you&apos;ll also need to set widths and/or heights as
      appropriate to stop the layout engine from doing the &quot;right&quot;
      thing and expanding the containers to fit the content.
    </p>
    <Example
      html={Scroll}
      caption="Scroll"
      expand
    />

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

    {/*
    <h2>Block Alignment</h2>
    <p>
      Add the <code>block-left</code>, <code>block-center</code> and{' '}
      <code>block-right</code> CSS classes to set the block alignment.
    </p>
    <Example
      html={Block}
      caption="Block Alignment"
      expand
    />
    */}
  </div>

export default Layout
