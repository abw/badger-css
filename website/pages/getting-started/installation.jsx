import React      from 'react'
import CodeBlock  from '../../site/CodeBlock.jsx'
import online     from '../../snippets/install/online-css?raw'
import add        from '../../snippets/install/add?raw'
import importCSS  from '../../snippets/install/import-css?raw'
import importSCSS from '../../snippets/install/import-scss?raw'
import repoSASS   from '../../snippets/install/repo-sass?raw'
import Split from '@/site/Split.jsx'

const Installation = () =>
  <div className="prose">
    <h1>Installation</h1>

    <h2>No Installation Required!</h2>
    <Split>
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
    </Split>

    <h2>Adding to a Javascript Project</h2>
    <Split>
      <p>
        If you want to configure, modify or adapt Badger CSS then you should
        add <code>@abw/badger-css</code> to your Javascript project using your
        favourite package manager.  In most cases you should be able to add it
        as a development dependency using the <code>-D</code> option.
      </p>
      <CodeBlock
        code={add}
        caption="Installing"
        language="shell"
        className="mar-b-8"
        expand
      />
    </Split>

    <h2>Importing the CSS</h2>
    <Split>
      <div>
        <p>
          The precise details on how you import the CSS will vary depending on
          what framework and bundler you&apos;re using.  For a React app using
          Vite or running under Next.js, for example, you can add the CSS file
          to your main application script like so:
        </p>
        <p>
          For other frameworks and/or bundlers you should consult the
          documentation on how to import a CSS file from a module in your{' '}
          <code>node_modules</code> directory.
        </p>
      </div>
      <CodeBlock
        code={importCSS}
        caption="Importing CSS"
        language="js"
        className="mar-b-8"
        expand
      />
    </Split>

    <h2>Importing the SCSS</h2>
    <Split>
      <div>
        <p>
          If you&apos;re using SASS/SCSS to build your stylesheet then you can
          import the SCSS components.  This gives you the flexibility to configure
          the default options, or to pick and choose which components you want to
          include.
        </p>
        <p>
          Add the following line to your main SCSS stylesheet source.
        </p>
      </div>
      <CodeBlock
        code={importSCSS}
        caption="Importing SCSS"
        language="scss"
        className="mar-b-8"
        expand
      />
    </Split>

    <h2>Going it Alone</h2>
    <Split>
      <p>
        If you&apos;re not using Javascript but want to play with the SCSS
        source files then you can check out the project repository from
        Github and run <code>sass</code> to compile the source files into CSS.
      </p>
      <CodeBlock
        code={repoSASS}
        caption="CSS from SASS"
        language="shell"
        className="mar-b-8"
        expand
      />
    </Split>
  </div>

export default Installation