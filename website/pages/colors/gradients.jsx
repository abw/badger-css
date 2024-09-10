import React    from 'react'
import Grad1    from '@/snippets/gradient/default.html?raw'
import Colors   from '@/snippets/gradient/colors.html?raw'
import Angle    from '@/snippets/gradient/angle.html?raw'
import Custom   from '@/snippets/gradient/custom.html?raw'
import { Example } from '@abw/badger-website'

const GradientExamples = () =>
  <div className="prose flow">
    <h1>Color Gradients</h1>
    <p>
      The <code>gradient</code> class can be added to an element to add
      a linear gradient background.  The default colors are{' '}
      <code>color-40</code> and <code>color-60</code>, both of which default
      to the corresponding shades of grey.  The default angle is 0&deg;
      (i.e. bottom to top).
    </p>
    <Example
      html={Grad1}
      caption="Default Gradient"
      expand
    />
    <h2>Color Ranges</h2>
    <p>
      Add one of the standard color classes to set the color range.
    </p>
    <Example
      html={Colors}
      caption="Gradient Colors"
      expand
    />

    <h2>Gradient Angle</h2>
    <p>
      The gradient angle can be set using one of the <code>angle-NNN</code> classes
      where <code>NNN</code> is a multiple of 30 (degrees).
    </p>
    <Example
      html={Angle}
      caption="Gradient Angle"
      expand
    />

    <h2>Custom Gradients</h2>
    <p>
      The <code>--gradient-from</code> and <code>--gradient-to</code> CSS
      custom properties define the start and end colors for the gradient.
      The <code>--gradient-angle</code> property sets the gradient angle.
    </p>
    <Example
      html={Custom}
      caption="Custom Gradients"
      expand
    />

  </div>

export default GradientExamples