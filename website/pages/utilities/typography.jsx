import React    from 'react'
import Headings from '@/snippets/typography/headings.html?raw'
import Flow     from '@/snippets/typography/flow.html?raw'
import Paras    from '@/snippets/typography/paragraphs.html?raw'
// import Prose    from '@/snippets/typography/prose.html?raw'
import Example  from '@/site/Example.jsx'
import Link from '@/ui/Link.jsx'

const Typography = () =>
  <div className="prose flow">
    <h1>Typography</h1>
    <h2>Headings</h2>
    <p>
      Headings have <code>text-wrap: balance</code> set to balance the length
      of long lines.  The <code>line-height</code> is reduced to <code>1.3</code>.
    </p>
    <p>
      Margins and padding are removed by default.  You can add them in yourself,
      either using the <Link to="/utilities/spacing" text="spacing utiltiy classes"/>{' '}
      or globally to match your site style. Or use something like the
      <code>flow</code> class (see below) to add margins between elements
      where appropriate.
    </p>
    <Example
      html={Headings}
      caption="Headings"
    />
    <h2>Paragraphs</h2>
    <p>
      Paragraphs also have the default margins removed, but a margin is added
      between successive paragraphs.
    </p>
    <Example
      html={Paras}
      caption="Paragraphs"
    />
    <h2>Flow</h2>
    <p>
      Use the <code>flow</code> class on a container to add spacing between
      block elements.  Thanks to{' '}
      <a href="https://andy-bell.co.uk/my-favourite-3-lines-of-css/">Andy Bell</a>{' '}
      for this one.
    </p>
    <Example
      html={Flow}
      caption="Flow"
    />

    {/*
    // Rats!  This gets messed up by the .prose rule I have in this website!
    <h2>Prose</h2>
    <p>
      Use the <code>prose</code> class on a container to limit the width of
      lines to <code>40em</code>.
    </p>
    <div className="wide">
      <Example
        html={Prose}
        caption="Prose"
      />
    </div>
    */}
  </div>

export default Typography
