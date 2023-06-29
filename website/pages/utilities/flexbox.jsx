import React            from 'react'
import Example          from '../../site/Example.jsx'
import Flex             from '../../snippets/html/flex.html?raw'
import FlexStart        from '../../snippets/html/flex-start.html?raw'
import FlexCenter       from '../../snippets/html/flex-center.html?raw'
import FlexEnd          from '../../snippets/html/flex-end.html?raw'
import FlexBaseline     from '../../snippets/html/flex-baseline.html?raw'
import FlexGap          from '../../snippets/html/flex-gap.html?raw'
import FlexSpace        from '../../snippets/html/flex-space.html?raw'
import FlexEvenly       from '../../snippets/html/flex-evenly.html?raw'

const FlexboxExamples = () =>
  <div>
    <h1>Flexbox</h1>
    <h2>Flexbox Classes</h2>
    <p>
      Use the <code>flex</code> CSS class to set the <code>display</code>{' '}
      mode to <code>flex</code>.  The default alignment mode{' '}
      (i.e. the <code>align-items</code> CSS property) is <code>stretch</code>.
    </p>
    <Example
      html={Flex}
      caption=".flex"
      expand
    />
    <h2>Flexbox Alignment</h2>
    <p>
      Add the <code>start</code> class to align the items to the start.
    </p>
    <Example
      html={FlexStart}
      caption=".flex.start"
      expand
    />
    <p>
      Add the <code>center</code> class to align the items to the center.
    </p>
    <Example
      html={FlexCenter}
      caption=".flex.center"
      expand
    />
    <p>
      Add the <code>baseline</code> class to align the items to the text
      baseline.
    </p>
    <Example
      html={FlexBaseline}
      caption=".flex.baseline"
      expand
    />
    <p>
      Add the <code>end</code> class to align the items to the end.
    </p>
    <Example
      html={FlexEnd}
      caption=".flex.end"
      expand
    />
    <h2>Flexbox Spacing</h2>
    <p>
      The <code>gap-N</code> classes can be used to add a gap between
      successive elements.  Here <code>N</code> is a number from 1 to 16
      representing multiples of the default spacing unit
      (<code>0.25rem</code> by default).
    </p>
    <Example
      html={FlexGap}
      caption=".flex.gap-4"
      expand
    />
    <p>
      Add the <code>space</code> class to space the items as much as possible.
      This is equivalent to setting the <code>justify-content</code> CSS
      property to <code>space-between</code>.
    </p>
    <Example
      html={FlexSpace}
      caption=".flex.space"
      expand
    />
    <p>
      Add the <code>evenly</code> class to divide the space evenly between
      and around the items.  This is equivalent to setting the{' '}
      <code>justify-content</code> CSS property to <code>space-evenly</code>.
    </p>
    <Example
      html={FlexEvenly}
      caption=".flex.evenly"
      expand
    />
  </div>

export default FlexboxExamples
