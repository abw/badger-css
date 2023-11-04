import React     from 'react'
import Example   from '@/site/Example.jsx'
import Flex      from '@/snippets/flex/flex.html?raw'
import Top       from '@/snippets/flex/top.html?raw'
import Middle    from '@/snippets/flex/middle.html?raw'
import Bottom    from '@/snippets/flex/bottom.html?raw'
import Baseline  from '@/snippets/flex/baseline.html?raw'
import Gap       from '@/snippets/flex/gap.html?raw'
import Left      from '@/snippets/flex/left.html?raw'
import Center    from '@/snippets/flex/center.html?raw'
import Right     from '@/snippets/flex/right.html?raw'
import Space     from '@/snippets/flex/space.html?raw'
import Evenly    from '@/snippets/flex/evenly.html?raw'
import Wrap      from '@/snippets/flex/wrap.html?raw'

const FlexboxExamples = () =>
  <div className="prose flow">
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

    <h2>Gaps</h2>
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

    <h2>Flex Top</h2>
    <p>
      Add the <code>top</code> (or <code>start</code>) class to align the items
      to the stop.
    </p>
    <Example
      html={Top}
      caption=".flex.top"
      expand
    />
    <h2>Flex Middle</h2>
    <p>
      Add the <code>middle</code> class to align the items to the middle.
    </p>
    <Example
      html={Middle}
      caption=".flex.middle"
      expand
    />
    <h2>Flex Baseline</h2>
    <p>
      Add the <code>baseline</code> class to align the items to the text
      baseline.
    </p>
    <Example
      html={Baseline}
      caption=".flex.baseline"
      expand
    />
    <h2>Flex Bottom</h2>
    <p>
      Add the <code>bottom</code> class to align the items to the bottom.
    </p>
    <Example
      html={Bottom}
      caption=".flex.bottom"
      expand
    />

    <h2>Flex Left</h2>
    <p>
      Items are align to the left (technically, <code>flex-start</code>) by
      default but you can add the <code>left</code> class if you want to make
      it explicit.
    </p>
    <Example
      html={Left}
      caption=".flex.left"
      expand
    />

    <h2>Flex Center</h2>
    <p>
      Add the <code>center</code> class to align the items to the center.
    </p>
    <Example
      html={Center}
      caption=".flex.center"
      expand
    />

    <h2>Flex Right</h2>
    <p>
      Add the <code>right</code> class to align the items to the right.
    </p>
    <Example
      html={Right}
      caption=".flex.right"
      expand
    />

    <h2>Flex Space</h2>
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

    <h2>Flex Evenly</h2>
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

    <h2>Flex Wrap</h2>
    <p>
      Add the <code>wrap</code> class to set the <code>flex-wrap</code> property
      to <code>wrap</code>.
    </p>
    <Example
      html={Wrap}
      caption=".flex.wrap"
      expand
    />
  </div>

export default FlexboxExamples
