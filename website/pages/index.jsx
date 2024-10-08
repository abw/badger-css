import React from 'react'
import Badger from '@/svg/badger-css.svg?react'
import { Hero, Link } from '@abw/badger-website'
import { BrandLink, PaletteLink, RangesLink } from '@/site/Links.jsx'

const Index = () =>
  <div>
    <Hero
      logo={<Badger className="badger-css"/>}
      title="Modern, minimal CSS presets"
      tagline="Built by Badgers"
      overview="Badger CSS is my personal collection of CSS utilities and styling for forms and other commonly used components."
      underview={
        <>
          It can be used by itself as a good starting point for any web
          site.  It also provides the basic styles used by {' '}
          <Link
            href="https://badgerpower.com/badger-form/"
            targetBlank
            text="Badger Form"
          />
          {' '}and{' '}
          <Link
            href="https://badgerpower.com/badger-react-ui/"
            targetBlank
            text="Badger React UI"
          />
        </>
      }
    />
    <p className="large">
      You&apos;ve probably heard of CSS <b>reset</b> stylesheets that
      provide sensible defaults for HTML elements to smooth out some of
      the inconsistencies between browsers.  And no doubt you&apos;re
      aware of the plethora of fully-featured CSS <b>toolkits</b> that
      implement all manner of styles for UI components.
    </p>
    <p className="large">
      Badger CSS sits somewhere between the two.  It provides some sensible{' '}
      <b>presets</b> for HTML elements that you can use out of the box and
      expect to get reasonable results.  It&apos;s highly configurable and
      is really designed to be a starting point for building your own CSS
      stylesheets, design systems and UI toolkits.
    </p>
    <h2>Features</h2>
    <div className="grid-2 gap-4 stack-laptop mar-t-4">
      <div className="surface-5 pad-a-4 border bdr-1">
        <h3>Cool Colors</h3>
        <ul className="pad-l-4">
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
            using <a href="https://badgerpower.com/badger-color/">Badger Color</a> and{' '}
            <PaletteLink text="import it"/> into Badger CSS.
          </li>
        </ul>
      </div>
      <div className="surface-5 pad-a-4 border bdr-1">
        <h3>Useful Utilities</h3>
        <ul className="pad-l-4">
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
      </div>
      <div className="surface-5 pad-a-4 border bdr-1">
        <h3>Fantastic Forms</h3>
        <ul className="pad-l-4">
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
      </div>
      <div className="surface-5 pad-a-4 border bdr-1">
        <h3>Cunning Components</h3>
        <ul className="pad-l-4">
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
    <div className="grid-2 gap-4 mar-t-4">
      <Link
        to="/getting-started/installation"
        text="Getting Started"
        className="brand button"
      />
      <Link
        to="/colors/demo"
        text="Color Demo"
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
  </div>

export default Index
