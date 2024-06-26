import React     from 'react'
import Example   from '@/site/Example.jsx'
import Margin    from '@/snippets/margin/margin.html?raw'
import MarginN   from '@/snippets/margin/n.html?raw'
import MarginDir from '@/snippets/margin/dir.html?raw'
import Padding   from '@/snippets/padding/padding.html?raw'
import PadSize   from '@/snippets/padding/size.html?raw'
import Adaptive  from '@/snippets/padding/adaptive.html?raw'

const SpacingExamples = () =>
  <div className="prose flow">
    <h1>Spacing</h1>
    <p>
      The <code>mar</code> and <code>pad</code> CSS utility classes can be
      used to set the margins and padding for and element.
    </p>

    <h2>Margins</h2>
    <p>
      The <code>mar</code> class by itself will add 1 unit of margin
      to all four sides of an element.  The default unit size
      is <code>0.25rem</code>.
    </p>
    <Example
      html={Margin}
      caption="Margins"
      expand
    />
    <p>
      The <code>mar-N</code> classes will add
      multiples of the unit, where <code>N</code> is one of the values:{' '}
      <code>0</code>, <code>1</code>, <code>2</code>, <code>3</code>,{' '}
      <code>4</code>, <code>6</code>, <code>8</code>, <code>10</code>,{' '}
      <code>12</code>, <code>16</code>, <code>20</code>,{' '}
      <code>24</code>, <code>28</code> or <code>32</code>.  The{' '}
      <code>mar-1</code> class is effectively the same as just <code>mar</code>{' '}
      but is included for completeness.  Also note that <code>mar-0</code> can
      be used to remove any margin that would otherwise be present on an element.
    </p>
    <Example
      html={MarginN}
      caption="Margin Multiple"
      expand
    />
    <h2>Margin Directions</h2>
    <p>
      You can also specify the direction for the margin using the{' '}
      <code>mar-t</code> (top), <code>mar-r</code> (right),{' '}
      <code>mar-b</code> (bottom), <code>mar-l</code> (left),{' '}
      <code>mar-v</code> (vertical: top and bottom) and{' '}
      <code>mar-h</code> (horizontal: left and right) classes.
      The default is 1 unit of margin or a <code>-N</code> suffix can be
      added as a multiplier.  For example <code>mar-t-4</code> to add 4 units
      of margin to the top of an element.
    </p>
    <Example
      html={MarginDir}
      caption="Margin Direction"
      expand
    />

    <h2>Padding</h2>
    <p>
      The <code>pad</code> and related utility classes work in the same
      way but add padding inside the element.
    </p>
    <Example
      html={Padding}
      caption="Padding"
      expand
    />
    <p>
      One important thing to note is that padding is applied in multiples
      of 0.25<b>em</b> whereas margins use 0.25<b>rem</b>.  This is because
      you usually want spacing around elements to be consistent (which rem
      provides) but padding inside an element should be based on the text
      size (which em provides).
    </p>
    <Example
      html={PadSize}
      caption="Pad Sizes"
      expand
    />

    <h2>Adaptive</h2>
    <p>
      The <code>pad-a-N</code> utility classes apply adaptive padding.  In
      the horizontal direction N units of padding will be added.  In the
      vertical direction N-1 units will be added.
    </p>
    <p>
      Consider the example below.  The buttons in the left column have equal
      padding in both directions, whereas those in the right column have
      adaptive padding.  Counterintuitively, the padding in the right buttons
      looks more balanced, particularly at low values.  This is because the
      line height of the text is typically around 1.5 (or slightly less)
      resulting in around 0.25em of implicit vertical padding in the text
      before the additional padding is added.  By adding one unit less of
      padding in the vertical direction the adaptive padding classes cancel
      out this imbalance.
    </p>
    <Example
      html={Adaptive}
      caption="Adaptive Padding"
      expand
    />
  </div>

export default SpacingExamples
