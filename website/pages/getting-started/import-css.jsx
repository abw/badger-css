import React      from 'react'
import CodeBlock  from '../../site/CodeBlock.jsx'
import importCSS  from '../../snippets/install/import-css?raw'
import { Link } from 'react-router-dom'

const ImportCSS = () =>
  <div className="prose">
    <h1>Importing Local CSS</h1>
    <p>
      You can import the CSS into your own project.  You should first{' '}
      <Link to="/getting-started/installation">install</Link> the module to add it to
      your project.
    </p>
    <p>
      The precise details on how you import the CSS will vary depending on
      what framework and bundler you&apos;re using.  For a React app using
      Vite, or running under Next.js, you can add the CSS file to your main
      application script like so:
    </p>
    <CodeBlock
      code={importCSS}
      caption="Importing CSS"
      language="js"
      className="mar-b-8"
      expand
    />
  </div>

export default ImportCSS