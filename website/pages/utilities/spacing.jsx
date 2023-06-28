import React     from 'react'
import Example   from '../../site/Example.jsx'
import Margin    from '../../snippets/html/margin.html?raw'
import MarginN   from '../../snippets/html/margin-n.html?raw'
import MarginDir from '../../snippets/html/margin-dir.html?raw'
import Padding   from '../../snippets/html/padding.html?raw'

const SpacingExamples = () =>
  <div>
    <h1>Spacing</h1>
    <p>
      The <code>mar</code> and <code>pad</code> CSS utility class can be used
      to set the margins and padding for and element.
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
      The <code>pad</code> and related utility classes work exactly the same
      way but add padding inside the element.
    </p>
    <Example
      html={Padding}
      caption="Padding"
      expand
    />
  </div>

export default SpacingExamples
