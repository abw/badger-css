import React        from 'react'
import Example      from '../../site/Example.jsx'
import Buttons      from '../../snippets/html/buttons.html?raw'
import SolidButtons from '../../snippets/html/buttons-solid.html?raw'
import ButtonsClass from '../../snippets/html/buttons-class.html?raw'

const ButtonsExamples = () =>
  <div>
    <h1>Buttons</h1>
    <p>
      The default button color is the site brand color
      which you can set using the <code>$brand-color</code> SCSS variable.
      In this web site the brand color is <code>violet</code>.
      Add one of the color classes (e.g. <code>red</code>, <code>green</code>,
      etc) for different colors.
    </p>
    <p>
      Button colors automatically adapt between light and dark modes.
    </p>
    <h2>Default Outline Style</h2>
    <p>
      The default button style is outlined.
    </p>
    <Example
      html={Buttons}
      language="html"
      caption="Buttons"
    />

    <h2>Solid Style</h2>
    <p>
      Add the <code>solid</code> class for solid buttons.
    </p>
    <Example
      html={SolidButtons}
      caption="Solid Buttons"
    />

    <h2>Button Class</h2>
    <p>
      Add the <code>button</code> class to any non-button element to give
      it the button styling.
    </p>
    <Example
      html={ButtonsClass}
      caption=".button class"
    />
  </div>

export default ButtonsExamples
