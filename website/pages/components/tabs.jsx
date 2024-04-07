import React   from 'react'
import Example from '@/site/Example.jsx'
import Tabs    from '@/snippets/tabs/tabs.html?raw'
import Lined   from '@/snippets/tabs/lined.html?raw'
import Solid   from '@/snippets/tabs/solid.html?raw'
import Center  from '@/snippets/tabs/center.html?raw'
import Right   from '@/snippets/tabs/right.html?raw'
import Scroll  from '@/snippets/tabs/scroll.html?raw'

const TabsExamples = () =>
  <div className="prose flow">
    <h1>Tabs</h1>
    <p>
      Add the <code>tabset</code> class to a container and then define a
      set of elements with the <code>tab</code> class.  The{' '}
      <code>disabled</code> class can be added to a tab to disable it.
    </p>
    <Example
      html={Tabs}
      language="html"
      caption="Tabs"
    />

    <h2>Lined</h2>
    <p>
      Add the <code>lined</code> class to the <code>tabset</code> to add a
      line under the tabs.
    </p>
    <Example
      html={Lined}
      language="html"
      caption="Lined Tabs"
    />

    <h2>Solid</h2>
    <p>
      Add the <code>solid</code> class to the <code>tabset</code> for solid
      tabs.
    </p>
    <Example
      html={Solid}
      language="html"
      caption="Solid Tabs"
    />

    <h2>Center</h2>
    <p>
      Add the <code>center</code> class to the <code>tabset</code> to align
      the tabs in the center.
    </p>
    <Example
      html={Center}
      language="html"
      caption="Center Tabs"
    />

    <h2>Right</h2>
    <p>
      Add the <code>right</code> class to the <code>tabset</code> to align
      the tabs to the right.
    </p>
    <Example
      html={Right}
      language="html"
      caption="Right Tabs"
    />

    <h2>Scroll</h2>
    <p>
      If there are too many tabs to be displayed then they will appear in
      a horizontally scrolling element.
    </p>
    <Example
      html={Scroll}
      language="html"
      caption="Scrolling Tabs"
    />
  </div>

export default TabsExamples