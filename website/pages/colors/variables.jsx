import React from 'react'
import { range as numberRange } from '@abw/badger-utils'
import Link from '../../ui/Link.jsx'

const Variables = () =>
  <div className="prose">
    <h1>Color Variables</h1>
    <h2>SASS Color Variables</h2>
    <p>
      Each stop in a color range has a SASS variable defined, e.g.
      <code>$red-0</code>, <code>$red-5</code>,{' '}
      <code>$red-10</code> and so on.  You can use these in your SASS
      components as necessary.
    </p>

    <h2>CSS Custom Properties</h2>
    <p>
      Each of the colour stops also has a corresponding CSS custom property
      (a.k.a. CSS variable) defined, e.g.
      <code>--red-0</code>, <code>--red-5</code>,{' '}
      <code>--red-10</code> and so on.  You can use these in your CSS
      files, e.g. as <code>color: var(--red-10)</code>.
    </p>
    <p>
      Each of your brand colors will also have CSS custom properties defined.
      If you&apos;re using the default <code>brand</code> name then they
      will be <code>--brand-0</code>, <code>--brand-5</code>,{' '}
      <code>--brand-10</code> and so on.
    </p>
    <p>
      If you have defined a different set of names via{' '}
      <code>$brand-colors</code> then they will have
      corresponding names.  For example, if you defined the names in
      your <code>$brand-colors</code> to be <code>primary</code>,{' '}
      <code>secondary</code> and <code>tertiary</code> then the custom
      properties will be <code>--primary-0</code>,{' '}
      <code>--secondary-0</code>, <code>--tertiary-0</code>, and so on.
    </p>

    <h2>Color Switching</h2>
    <p>
      CSS custom properties are defined for a generic color, appropriately
      named <code>color</code>.  By default they are mapped to grey.
      e.g. <code>--color-0</code> is initially
      set to <code>--grey-0</code>, <code>--color-5</code> to{' '}
      <code>--grey-5</code>, and so on.
    </p>
    <ScopeVars
      scope='grey'
      to='grey'
    />

    <p>
      CSS scopes will be generated for each color range which map the generic
      colors to the colors from that range.  For example, the{' '}
      <code>.red</code> class selector scope will map{' '}
      <code>--color-0</code> to <code>--red-0</code>,{' '}
      <code>--color-5</code> to <code>--red-5</code>, and so on.
    </p>
    <h3 className="font-mono mar-b-2">.red {'{'} ... {'}'}</h3>
    <ScopeVars
      scope='red'
      to='red'
    />
    <p>
      Scopes will also be generated for your brand colors, either using the
      default <code>brand</code> name or the custom names you have defined
      using <code>$brand-colors</code>.
    </p>
    <p>
      For example, in the <code>.brand</code> scope, <code>--color-0</code> will
      be mapped to <code>--brand-0</code>, <code>--color-5</code> to{' '}
      <code>--brand-5</code> and so on.
    </p>
    <h3 className="font-mono mar-b-2">.brand {'{'} ... {'}'}</h3>
    <ScopeVars
      scope='brand'
      to='brand'
    />
    <p>
      The benefit of this approach is that it allows you to define UI
      components using the generic colors <code>--color-N</code>.  By
      default they will appear in grey, but adding a CSS class matching
      the color name will switch in the appropriate color range.
    </p>

    <h2>CSS Scope Aliases</h2>
    <p>
      A number of additional CSS scopes are defined for some of the colors.
      For example, the CSS scope created for the <code>red</code> color range
      is actually <code>.red, .error, .invalid</code>.  This allows you to
      add the <code>red</code>, <code>error</code> or <code>invalid</code> CSS
      class to an element to have the red color range selected.
    </p>
    <p>
      This is used by <Link to="/forms" text="forms"/> and {' '}
      <Link to="/components/alerts" text="alerts"/>, for example, to provide
      semantic names for the colors.
    </p>

    <h2>TODO</h2>
    <ul>
      <li>Editing or updating a palette using Badger Color</li>
      <li>Expanding the palette into SCSS files</li>
      <li>Adding/editing CSS scopes</li>
    </ul>
  </div>

const ScopeVars = ({scope, to, from='color'}) =>
  <table className={`${scope} celled smallish striped properties mar-b-4`}>
    <thead>
      <tr>
        <th>Variable</th>
        <th>Mapped To</th>
      </tr>
    </thead>
    <tbody>
      { numberRange(0, 100, 5).map(
        n =>
          <tr key={n}>
            <td className="font-mono">--{from}-{n}</td>
            <td className="font-mono">--{to}-{n}</td>
          </tr>
      )}
    </tbody>
  </table>

export default Variables
