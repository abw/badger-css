import React            from 'react'
import Example          from '../../site/Example.jsx'
import Flex             from '../../examples/styles/Flex.jsx'
import FlexSrc          from '../../examples/styles/Flex.jsx?raw'
import FlexStart        from '../../examples/styles/FlexStart.jsx'
import FlexStartSrc     from '../../examples/styles/FlexStart.jsx?raw'
import FlexCenter       from '../../examples/styles/FlexCenter.jsx'
import FlexCenterSrc    from '../../examples/styles/FlexCenter.jsx?raw'
import FlexEnd          from '../../examples/styles/FlexEnd.jsx'
import FlexEndSrc       from '../../examples/styles/FlexEnd.jsx?raw'
import FlexBaseline     from '../../examples/styles/FlexBaseline.jsx'
import FlexBaselineSrc  from '../../examples/styles/FlexBaseline.jsx?raw'
import FlexGap          from '../../examples/styles/FlexGap.jsx'
import FlexGapSrc       from '../../examples/styles/FlexGap.jsx?raw'
import FlexSpace        from '../../examples/styles/FlexSpace.jsx'
import FlexSpaceSrc     from '../../examples/styles/FlexSpace.jsx?raw'
import FlexEvenly       from '../../examples/styles/FlexEvenly.jsx'
import FlexEvenlySrc    from '../../examples/styles/FlexEvenly.jsx?raw'

const FlexboxExamples = () =>
  <div>
    <h1>Flexbox</h1>
    <p>
      Use the <code>flex</code> CSS class to set the <code>display</code>{' '}
      mode to <code>flex</code>.  The default alignment mode{' '}
      (i.e. the <code>align-items</code> CSS property) is <code>stretch</code>.
    </p>
    <Example
      Component={Flex}
      code={FlexSrc}
      caption=".flex"
      expand
    />
    <p>
      Add the <code>start</code> class to align the items to the start.
    </p>
    <Example
      Component={FlexStart}
      code={FlexStartSrc}
      caption=".flex.start"
      expand
    />
    <p>
      Add the <code>center</code> class to align the items to the center.
    </p>
    <Example
      Component={FlexCenter}
      code={FlexCenterSrc}
      caption=".flex.center"
      expand
    />
    <p>
      Add the <code>baseline</code> class to align the items to the text
      baseline.
    </p>
    <Example
      Component={FlexBaseline}
      code={FlexBaselineSrc}
      caption=".flex.baseline"
      expand
    />
    <p>
      Add the <code>end</code> class to align the items to the end.
    </p>
    <Example
      Component={FlexEnd}
      code={FlexEndSrc}
      caption=".flex.end"
      expand
    />
    <p>
      The <code>gap-N</code> classes can be used to add a gap between
      successive elements.  Here <code>N</code> is a number from 1 to 16
      representing multiples of the default spacing unit
      (<code>0.25rem</code> by default).
    </p>
    <Example
      Component={FlexGap}
      code={FlexGapSrc}
      caption=".flex.gap-4"
      expand
    />
    <p>
      Add the <code>space</code> class to space the items as much as possible.
      This is equivalent to setting the <code>justify-content</code> CSS
      property to <code>space-between</code>.
    </p>
    <Example
      Component={FlexSpace}
      code={FlexSpaceSrc}
      caption=".flex.space"
      expand
    />
    <p>
      Add the <code>evenly</code> class to divide the space evenly between
      and around the items.  This is equivalent to setting the{' '}
      <code>justify-content</code> CSS property to <code>space-evenly</code>.
    </p>
    <Example
      Component={FlexEvenly}
      code={FlexEvenlySrc}
      caption=".flex.evenly"
      expand
    />
  </div>

export default FlexboxExamples
