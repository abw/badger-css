import React        from 'react'
import Example      from '../../site/Example.jsx'
import Buttons      from '../../snippets/form/buttons.html?raw'
import SolidButtons from '../../snippets/form/buttons-solid.html?raw'
import ShadeButtons from '../../snippets/form/buttons-shade.html?raw'
import ButtonsClass from '../../snippets/form/buttons-class.html?raw'

const ButtonsExamples = () =>
  <div className="prose">
    <h1>Buttons</h1>
    <p>
      For the sake of accessibility, buttons should usually be rendered
      using the <code>button</code> element.  I mean, that&apos;s what
      it&apos;s there for, right?  For those cases when you really need to
      make a link or something else look like a button you can add the{' '}
      <code>button</code> class.
    </p>
    <p>
      The default button color is grey. Add one of the color classes
      (e.g. <code>red</code>, <code>green</code>, etc) can be added to
      get different colors.
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

    <h2>Shaded Style</h2>
    <p>
      Add the <code>shade</code> class for subtly shaded buttons.  It&apos;s
      only a matter of time until flat design is out and shaded is back in.
      Be ahead of the curve!
    </p>
    <Example
      html={ShadeButtons}
      caption="Shaded Buttons"
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
