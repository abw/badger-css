import React    from 'react'
import WrapText from '@/snippets/wrap/wrap.html?raw'
import Example  from '@/site/Example.jsx'

const Wrap = () =>
  <div className="prose flow">
    <h1>Wrap</h1>
    <p>
      The <code>wrap</code> CSS class sets the <code>text-wrap</code> to{' '}
      <code>wrap</code> (which is the default).The <code>nowrap</code> class
      unsurprisingly sets it to <code>nowrap</code>.  The <code>wrap-balance</code>,{' '}
      <code>wrap-pretty</code> and <code>wrap-stable</code> classes set it
      to <code>balance</code>, <code>pretty</code> and <code>stable</code> respectively.
    </p>
    <p>
      You may not see much difference between them.  Try resizing your browser
      window to see how they flow differently.
    </p>
    <Example
      html={WrapText}
      caption="wrap"
    />
  </div>

export default Wrap
