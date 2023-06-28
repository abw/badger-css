import React            from 'react'
import Example          from '../../site/Example.jsx'
import Border           from '../../snippets/html/border.html?raw'
import BorderCustom     from '../../snippets/html/border-custom.html?raw'

const BorderExamples = () =>
  <div>
    <h1>Borders</h1>
    <p>
      Add the <code>border</code> CSS class to an element to give it a border.
    </p>
    <Example
      html={Border}
      caption="Border"
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
    <Example
      html={BorderCustom}
      caption="Custom Border Style"
      expand
    />
  </div>

export default BorderExamples
