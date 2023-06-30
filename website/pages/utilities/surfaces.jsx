import React             from 'react'
import Example           from '../../site/Example.jsx'
import Surfaces          from '../../snippets/html/surfaces.html?raw'
import SurfacesBorder    from '../../snippets/html/surfaces-border.html?raw'
import SurfacesColor     from '../../snippets/html/surfaces-color.html?raw'

const SurfacesExamples = () =>
  <div className="prose">
    <h1>Surfaces</h1>
    <p>
      When building UI components it can be useful to think in terms of
      &quot;surfaces&quot;, with each surface getting progressively
      &quot;closer&quot; to the user and demanding their closer attention.
      You may want to combine these with the <code>shadow-N</code> classes
      to further emphasise the effect.
      As a general rule surfaces that are in the foreground
      should be lighter than those in the background.  Note that this applies
      to dark themes as well as light themes.
    </p>
    <h2>Surface Classes</h2>
    <p>
      Use the <code>surface-1</code>, <code>surface-2</code>,{' '}
      <code>surface-3</code>, <code>surface-4</code> and{' '}
      <code>surface-5</code> CSS classes to define elements with appropriate
      background and text colors to achieve this effect.  The lower numbers
      are meant to be further in the background with higher numbers being
      closer to the foreground.
    </p>
    <Example
      html={Surfaces}
      caption="Surfaces"
      expand
    />
    <p>
      The <code>surface-0</code> class is a special case being used here to apply
      a background color for the examples.  When using a light theme this{' '}
      is <code>white</code> and for a dark theme it is <code>black</code>.
    </p>
    <p>
      The styles are defined using CSS variables for the text and background
      colors, e.g. <code>--surface-4-text</code> and <code>--surface-4-back</code>.
      In turn these are defined using the <code>grey</code> color range depending
      on the color theme. For example, <code>--surface-4-back</code> is defined
      to be <code>--grey-100</code> by default, and <code>--grey-30</code> when
      the dark theme is in effect.
    </p>
    <h2>Surfaces With Borders</h2>
    <p>
      Add the <code>border</code> CSS class to add a border around a surface.
      Each surface level sets the <code>--border-color</code> CSS custom
      property which overrides the default border color used by the{' '}
      <code>border</code> rule.  The border colors used are still black for
      the light theme and white for the dark theme but the opacity is set at
      15% to give a more subtle effect.  You can change this by setting the
      <code>$surface-border-opacity</code> SASS variable or you can define
      your own custom colors for light and dark themes by setting{' '}
      <code>$surface-border-color-light</code> and{' '}
      <code>$surface-border-color-dark</code>
    </p>
    <Example
      html={SurfacesBorder}
      caption="Surface Borders"
      expand
    />

    <h2>Colored Surfaces</h2>
    <p>
      Add any of the color classes to get different colored surfaces.
    </p>
    <Example
      html={SurfacesColor}
      caption="Color Surfaces"
    />
  </div>

export default SurfacesExamples
