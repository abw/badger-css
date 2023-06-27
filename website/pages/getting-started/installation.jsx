import React      from 'react'
import CodeBlock  from '../../site/CodeBlock.jsx'
import add        from '../../snippets/install/add?raw'

const Installation = () =>
  <div>
    <h1>Installation</h1>
    <p>
      Add the <code className="code">@abw/badger-css</code> module to
      your project using your favourite package manager.
    </p>
    <CodeBlock
      code={add}
      caption="Installing"
      language="shell"
      className="mar-b-8"
      expand
    />
    <h2>TODO</h2>
    <ul>
      <li>Using the out-of-the-box CSS, e.g. via unpkg</li>
      <li>Copy and pasting CSS components</li>
      <li>Adding as a devDependency</li>
      <li>Using the utility scripts to build your own toolkit</li>
    </ul>
  </div>

export default Installation