import React      from 'react'
import CodeBlock  from '../../site/CodeBlock.jsx'
import importSCSS  from '../../snippets/install/import-scss?raw'
import { Link } from 'react-router-dom'

const ImportSCSS = () =>
  <div className="prose">
    <h1>Importing Local SCSS</h1>
    <p>
      If you&apos;re using SASS/SCSS to build your stylesheet then you can
      import the SCSS components.  This gives you the flexibility to configure
      the default options, or to pick and choose which components you want to
      include.
    </p>
    <p>
      You should first{' '}
      <Link to="/getting-started/installation">install</Link> the module to add it to
      your project.  Then add the following line to your main SCSS stylesheet
      source.
    </p>
    <CodeBlock
      code={importSCSS}
      caption="Importing SCSS"
      language="scss"
      className="mar-b-8"
      expand
    />
  </div>

export default ImportSCSS