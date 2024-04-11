import React from 'react'
import { ReactComponent as Badger } from '../svg/badger-css.svg'
import Link from '../ui/Link.jsx'
import { BrandLink, PaletteLink, RangesLink } from '@/site/Links.jsx'

const Index = () =>
  <div>
    <div className="mobile block-center pad-t-8 flow">
      <Badger className="badger-css"/>
      <h1 className="mar-t-8">
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
      <div className="grid-2 gap-2">
        <Link
          to="/colors/demo"
          text="Color Demo"
          className="brand button"
        />
        <Link
          to="/getting-started/installation"
          text="Getting Started"
          className="brand button"
        />
        <Link
          to="/getting-started/good"
          text="What's Good?"
          className="brand button"
        />
        <Link
          to="/getting-started/bad"
          text="What's Bad?"
          className="brand button"
        />
      </div>

      <h2>TL;DR:</h2>
      <h3>Cool Colors</h3>
      <ul>
        <li>
          Hand-crafted palette with <RangesLink text="13 color ranges"/>{' '}
          and 3 greyscales, each containing 21 color stops from none more black
          to a whiter shade of pale.
        </li>
        <li>
          Easily adapt the palette to match your <BrandLink/>.
        </li>
        <li>
          Create and your own custom palette
          using <a href="https://abw.github.io/badger-color/">Badger Color</a> and{' '}
          <PaletteLink text="import it"/> into Badger CSS.
        </li>
      </ul>
      <h3>Useful Utilities</h3>
      <ul>
        <li>
          Utility classes for the things you need to do most often.
        </li>
        <li>
          Useful for prototyping or ad-hoc styling.
        </li>
        <li>
          CSS custom properties for applying them into your own custom styles.
        </li>
        <li>
          All configurable by SASS variables.
        </li>
      </ul>
      <h3>Fantastic Forms</h3>
      <ul>
        <li>
          <i>Mostly Classless</i> styling providing sensible and modern
          defaults for HTML forms.
        </li>
        <li>
          Minimal additional markup required.
        </li>
        <li>
          Easily modified using CSS properties and/or SASS variables.
        </li>
      </ul>
      <h3>Components</h3>
      <ul>
        <li>
          A basic set of components that you just can&apos;t live without.
        </li>
        <li>
          Different variations of the basic styles.
        </li>
        <li>
          Automatically adapt to any color range or brand colors.
        </li>
        <li>
          Configurable and customisable, using CSS properties and/or SASS
          variables.
        </li>
      </ul>
    </div>
  </div>

export default Index
