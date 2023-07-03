import React    from 'react'
import Example  from '../../site/Example.jsx'
import Default  from '../../snippets/buttons/default.html?raw'
import Outline  from '../../snippets/buttons/outline.html?raw'
import Shaded   from '../../snippets/buttons/shaded.html?raw'
import Class    from '../../snippets/buttons/class.html?raw'
import Icons    from '../../snippets/buttons/icons.html?raw'
import Padding  from '../../snippets/buttons/padding.html?raw'
import Link     from '../../ui/Link.jsx'

const Buttons = () =>
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
      The default button color is grey. Any one of the color classes
      (e.g. <code>red</code>, <code>green</code>, etc) can be added to
      get different colors.
    </p>
    <p>
      Button color stops automatically adapt between light and dark modes.
    </p>
    <h2>Default Style</h2>
    <p>
      The default button style is solid.
    </p>
    <Example
      html={Default}
      language="html"
      caption="Buttons"
    />

    <h2>Outline Style</h2>
    <p>
      Add the <code>outline</code> class for outline buttons.
    </p>
    <Example
      html={Outline}
      caption="Outline Buttons"
    />

    <h2>Shaded Style</h2>
    <p>
      Add the <code>shade</code> class for subtly shaded buttons.  It&apos;s
      only a matter of time until flat design is out and shaded is back in.
      Be ahead of the curve!
    </p>
    <Example
      html={Shaded}
      caption="Shaded Buttons"
    />

    <h2>Button Class</h2>
    <p>
      Add the <code>button</code> class to any non-button element to give
      it the button styling.  You can also add the <code>outline</code> and/or{' '}
      <code>shaded</code> classes.
    </p>
    <Example
      html={Class}
      caption=".button class"
    />

    <h2>Button Icons</h2>
    <p>
      You can add <Link to="/components/icons" text="SVG Icons"/> to buttons.
      You can set the margins for icons manually using the <code>mar-N</code>{' '}
      classes described on the <Link to="/utilities/spacing" text="spacing"/> page.
      The <code>on-left</code> and <code>on-right</code> classes are provided
      as shortcuts and are equivalent to <code>mar-r-2</code> and <code>mar-l-2</code>,
      respectively.
    </p>
    <Example
      html={Icons}
      caption="Button icons"
    />

    <h2>Button Padding</h2>
    <p>
      The default padding for buttons is larger in the horizontal direction
      (4 units = 1em) than it is in the vertical direction (1 unit = 0.25em).
      This isn&apos;t as unbalanced as it initially seems when you factor in
      the line-height (1.5), which effectively results in  the vertical
      padding being equivalent to 2 units (0.5em).
    </p>
    <p>
      If you have a button that only contains an icon
      then it can look a bit strange, as shown in the first button
      here.  Adding the <code>pad-h-2</code> class to the button will reduce
      the horizontal padding to 2 units (0.5em) which will even things out,
      as shown in the second button.  Or you can add the <code>icon</code> class
      to the button which will have the same effect and doesn&apos;t require
      you to remember how many units of padding you need to set.
    </p>
    <Example
      html={Padding}
      caption="Button padding"
    />
  </div>

export default Buttons
