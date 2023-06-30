import React      from 'react'
import CodeBlock  from '../../site/CodeBlock.jsx'
import add        from '../../snippets/install/add?raw'

const Installation = () =>
  <div>
    <h1>Installation</h1>
    <p>
      If you want to configure, modify or adapt Badger CSS then you should
      add <code>@abw/badger-css</code> module to your project using your
      favourite package manager.
    </p>
    <CodeBlock
      code={add}
      caption="Installing"
      language="shell"
      className="mar-b-8"
      expand
    />
  </div>

export default Installation