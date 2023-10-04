import React    from 'react'
import Example  from '../../site/Example.jsx'
import Display  from '../../snippets/display/display.html?raw'
import Link     from '../../ui/Link.jsx'

const Layout = () =>
  <div className="prose">
    <h1>Display</h1>

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

  </div>

export default Layout
