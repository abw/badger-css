import React from 'react'
import { ReactComponent as Badger } from '../svg/badger-css.svg'
import Link from '../ui/Link.jsx'

const Index = () =>
  <div>
    <div className="mobile block-center pad-t-8">
      <Badger className="badger-css"/>
      <h1 className="intro mar-t-8">
        Modern, minimal CSS presets
      </h1>
      <p>
        You&apos;ve probably heard of CSS <b>reset</b> stylesheets that
        provide sensible defaults for HTML elements to smooth out some of
        the inconsistencies between browsers.  And no doubt you&apos;re
        aware of the plethora of fully-featured CSS <b>toolkits</b> that
        implement all manner of styles for UI components.
      </p>
      <p>
        Badger CSS sits somewhere between the two.  It provides some sensible{' '}
        <b>presets</b> for HTML elements that you can use out of the box and
        expect to get reasonable results.  It&apos;s highly configurable and
        is really designed to be a starting point for building your own CSS
        stylesheets, design systems and UI toolkits.
      </p>
      <div className="grid-3 gap-4">
        <Link
          to="getting-started/installation"
          text="Getting Started"
          className="solid brand button"
        />
        <Link
          to="getting-started/good"
          text="What's Good?"
          className="solid brand button"
        />
        <Link
          to="getting-started/bad"
          text="What's Bad?"
          className="solid brand button"
        />
      </div>
    </div>
  </div>

export default Index
