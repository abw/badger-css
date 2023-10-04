import React     from 'react'
import Example   from '../../site/Example.jsx'
import ScrollX    from '../../snippets/scrolling/scroll-x.html?raw'
import ScrollY    from '../../snippets/scrolling/scroll-y.html?raw'

const ScrollPage = () =>
  <div className="prose">
    <h1>Scolling</h1>

    <h2>Scroll Classes</h2>
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
      html={ScrollX}
      caption="scroll-x"
      expand
    />
    <Example
      html={ScrollY}
      caption="scroll-y"
      expand
    />

  </div>

export default ScrollPage
