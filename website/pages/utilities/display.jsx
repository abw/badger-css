import React    from 'react'
import Display  from '@/snippets/display/display.html?raw'
import Example  from '@/site/Example.jsx'
import Split    from '@/site/Split.jsx'
import { FlexLink, GridLink } from '@/site/Links.jsx'

const Layout = () =>
  <div className="prose flow">
    <h1>Display</h1>

    <h2>Display Modes</h2>
    <Split>
      <p>
        The <code>inline</code>, <code>block</code> and{' '}
        <code>inline-block</code> CSS classes can be used to set the{' '}
        <code>display</code> mode.   These are useful when you have an element
        that would normally have one display type that you want displayed in
        a different way.
      </p>
      <p>
        See the <FlexLink/> and <GridLink/> pages for information about
        using flex and grid display modes.
      </p>
    </Split>

    <Example
      html={Display}
      caption="Display Modes"
      expand
    />

  </div>

export default Layout
