import React            from 'react'
import Example          from '../../site/Example.jsx'
import Border           from '../../examples/styles/Border.jsx'
import BorderSrc        from '../../examples/styles/Border.jsx?raw'
import BorderCustom     from '../../examples/styles/BorderCustom.jsx'
import BorderCustomSrc  from '../../examples/styles/BorderCustom.jsx?raw'
import BorderStyle      from '../../examples/styles/BorderStyle.jsx'
import BorderStyleSrc   from '../../examples/styles/BorderStyle.jsx?raw'

const BorderExamples = () =>
  <div>
    <h1>Borders</h1>
    <p>
      Add the <code>border</code> CSS class to an element to give it a border.
    </p>
    <Example
      Component={Border}
      code={BorderSrc}
      caption=".border"
      expand
    />
    <p>
      The default border width is <code>1px</code>, the border style is{' '}
      <code>solid</code> and the border radius is <code>0</code>. The border
      color has an opacity of 25% and the color is set to black for a light
      theme (i.e. <code>rgba(0, 0, 0, .25)</code>) and white for a dark theme,
      (i.e. <code>rgba(255, 255, 255, 0.25)</code>).  You can change the
      opacity using the <code>$border-opacity</code> SASS variable, or define
      your own custom border colors for the light theme and dark theme using
      the <code>$border-color-light</code> and <code>$border-color-dark</code>{' '}
      SASS variables.
    </p>
    <p>
      You can set the <code>--border-width</code>, <code>--border-style</code>,{' '}
      <code>--border-color</code> and <code>--border-radius</code> CSS custom
      properties to change any of the values, either on a global scope or
      using a more specific CSS selector.
    </p>
    <p>
      If you only want to set the border properties for a single element then
      there&apos;s not much advantage over setting the <code>style</code>{' '}
      properties directly on that element.  However the benefit of using CSS
      custom properties is that they follow the usual rules of CSS scoping.
      In this example the properties are set using the <code>style</code> attribute
      on the container element on line 10 and the child elements only need to
      add the <code>border</code> CSS class on lines 11, 14, and 17.  They
      inherit the custom properties from the parent element.
    </p>
    <Example
      Component={BorderCustom}
      code={BorderCustomSrc}
      caption="Custom Border Style"
      expand
    />
    <p>
      Or you can use CSS selectors to define border styles for different
      scopes.  In this example we define a <code>.border-style-example</code>{' '}
      scope which sets the <code>--border-width</code> and{' '}
      <code>--border-radius</code> properties.  Then we have additional scopes
      for <code>.danger</code> and <code>.success</code> that set the{' '}
      <code>--border-color</code>. We&apos;re inlining the styles inside a
      <code>style</code> element in this example (on line 18) to keep it
      self-contained, but the principle works equally well when using a
      separate CSS stylesheet or CSS module.
    </p>
    <Example
      Component={BorderStyle}
      code={BorderStyleSrc}
      caption="Border Style"
      expand
    />
  </div>

export default BorderExamples
