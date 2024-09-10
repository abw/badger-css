import React    from 'react'
import ScrollX  from '@/snippets/scrolling/scroll-x.html?raw'
import ScrollY  from '@/snippets/scrolling/scroll-y.html?raw'
import Hidden   from '@/snippets/scrolling/overflow-hidden.html?raw'
import Hack     from '@/snippets/scrolling/overflow-hack.html?raw'
import { Example } from '@abw/badger-website'

const ScrollPage = () =>
  <div className="prose flow">
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
    <h2>Overflow Hack</h2>
    <p>
      One problem with explicit scrolling classes is that it can prevent
      overflow from being visible.  When <code>overflow-x</code> is set
      to <code>scroll</code>, <code>overflow-y</code> is implicitly set to{' '}
      <code>auto</code> which equates to the same thing as <code>hidden</code>.
      To the best of my knowledge there&apos;s no way to override this built-in
      behaviour (please correct me if I&apos;m wrong).  The problem here is
      that any overflowing content in a scrolling container will be hidden.
    </p>
    <p>
      For example, try hovering over the words in the text below to trigger
      some tooltips.  You&apos;ll see that the tooltips are
      hidden because it can&apos;t overflow outside the container.
    </p>
    <Example
      html={Hidden}
      caption="Overflow Hidden"
      expand
    />
    <p>
      There&apos;s a partial work-around this this, which is at best a dirty,
      dirty hack.  Add the <code>overflow-hack</code> class to your container and
      it will add <code>100vh</code> of padding to the bottom, and{' '}
      <code>-100vh</code> of margin.  That will at least allow content to
      overflow the bottom of the container.  It&apos;s not possible to safely add
      padding and margins to all four sides because the element will then
      overlay and interfere with other elements.
    </p>
    <Example
      html={Hack}
      caption="overflow-hack"
      expand
    />

  </div>

export default ScrollPage
