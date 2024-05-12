import React   from 'react'
import Stack   from '@/snippets/test/flex-stack.html?raw'
import Example from '@/site/Example.jsx'

const FlexStack = () =>
  <div className="flow">
    <h1>Flexbox Stacking</h1>
    <p>
      I &quot;optimised&quot; the flex stacking rules and broke the case
      where the child elements have an explicit width, e.g. when using{' '}
      <code>split-N</code> classes.  These should stack when the screen width
      is less than 960px.  With my optimisation in place they didn&apos;t but
      they should now.
    </p>
    <Example
      html={Stack}
      caption="Even Splits"
    />
  </div>

export default FlexStack