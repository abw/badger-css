import React     from 'react'
import Example   from '../../site/Example.jsx'
import Flex      from '../../snippets/flex/flex.html?raw'
import Start     from '../../snippets/flex/start.html?raw'
import Center    from '../../snippets/flex/center.html?raw'
import End       from '../../snippets/flex/end.html?raw'
import Baseline  from '../../snippets/flex/baseline.html?raw'
import Gap       from '../../snippets/flex/gap.html?raw'
import Space     from '../../snippets/flex/space.html?raw'
import Evenly    from '../../snippets/flex/evenly.html?raw'

const FlexboxExamples = () =>
  <div className="prose">
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
      html={Start}
      caption=".flex.start"
      expand
    />
    <p>
      Add the <code>center</code> class to align the items to the center.
    </p>
    <Example
      html={Center}
      caption=".flex.center"
      expand
    />
    <p>
      Add the <code>baseline</code> class to align the items to the text
      baseline.
    </p>
    <Example
      html={Baseline}
      caption=".flex.baseline"
      expand
    />
    <p>
      Add the <code>end</code> class to align the items to the end.
    </p>
    <Example
      html={End}
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
      html={Gap}
      caption=".flex.gap-4"
      expand
    />
    <p>
      Add the <code>space</code> class to space the items as much as possible.
      This is equivalent to setting the <code>justify-content</code> CSS
      property to <code>space-between</code>.
    </p>
    <Example
      html={Space}
      caption=".flex.space"
      expand
    />
    <p>
      Add the <code>evenly</code> class to divide the space evenly between
      and around the items.  This is equivalent to setting the{' '}
      <code>justify-content</code> CSS property to <code>space-evenly</code>.
    </p>
    <Example
      html={Evenly}
      caption=".flex.evenly"
      expand
    />
  </div>

export default FlexboxExamples
