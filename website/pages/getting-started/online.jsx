import React      from 'react'
import CodeBlock  from '../../site/CodeBlock.jsx'
import online     from '../../snippets/install/online-css?raw'

const Online = () =>
  <div className="prose">
    <h1>Online</h1>
    <p>
      You don&apos;t need to install anything to get starting using Badger
      CSS in a website.  Simply add the following tag to the{' '}
      <code>&lt;head&gt;</code> section of your web page.
    </p>
    <CodeBlock
      code={online}
      caption="Unpkg Link"
      language="html"
      className="mar-b-8"
      expand
    />
  </div>

export default Online