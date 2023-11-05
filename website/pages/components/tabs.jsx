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
    </p>
    <Example
      html={Tabs}
      language="html"
      caption="Tabs"
    />

    <h2>Lined</h2>
    <p>
    </p>
    <Example
      html={Lined}
      language="html"
      caption="Lined Tabs"
    />

    <h2>Solid</h2>
    <p>
    </p>
    <Example
      html={Solid}
      language="html"
      caption="Solid Tabs"
    />

    <h2>Center</h2>
    <p>
    </p>
    <Example
      html={Center}
      language="html"
      caption="Center Tabs"
    />

    <h2>Right</h2>
    <p>
    </p>
    <Example
      html={Right}
      language="html"
      caption="Right Tabs"
    />

    <h2>Scroll</h2>
    <p>
    </p>
    <Example
      html={Scroll}
      language="html"
      caption="Scrolling Tabs"
    />
  </div>

export default TabsExamples