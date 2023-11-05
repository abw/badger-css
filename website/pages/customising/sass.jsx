import React      from 'react'
import BadgerSCSS from '@/styles/badger.scss?raw'
import Helpers    from '@/styles/helpers/all.scss?raw'
import Config     from '@/styles/config/all.scss?raw'
import Utils      from '@/styles/utilities/all.scss?raw'
import Forms      from '@/styles/forms/all.scss?raw'
import Comps      from '@/styles/components/all.scss?raw'
import CustomSCSS from '@/snippets/sass/badger.scss?raw'
import CodeBlock  from '@/site/CodeBlock.jsx'
import Split      from '@/site/Split.jsx'
import Link       from '@/ui/Link.jsx'
import { useState } from 'react'

const allFiles = {
  helpers:    Helpers,
  config:     Config,
  utilities:  Utils,
  forms:      Forms,
  components: Comps,
}

const Sass = () =>
  <div className="prose flow">
    <h1>Customising With Sass</h1>
    <Split>
      <div>
        <p>
          This is what the main <code>badger.scss</code> file looks like.
        </p>
      </div>
      <CodeBlock
        code={BadgerSCSS}
        caption="badger.scss"
        language='scss'
        expand
      />
    </Split>
    <h2>Custom <code>badger.scss</code></h2>
    <Split>
      <div>
        <p>
          You can create your own version of this file if you want to
          pick and choose which parts you want and don&apos;t want.
          You just need to prefix each file path with{' '}
          <code>@abw/badger-css/styles</code>.
        </p>
        <p>
          For example, instead of
          <code>@import &quot;helpers/all.scss&quot;;</code> you would write{' '}
          <code>@import &quot;@abw/badger-css/styles/helpers/all.scss&quot;;</code>.
        </p>
      </div>
      <CodeBlock
        code={CustomSCSS}
        caption="Custom badger.scss"
        language='scss'
        expand
      />
    </Split>
    <h2>Other Files</h2>
    <p>
      Each of the <code>all.scss</code> file is an index which loads the
      other files in that directory.  The first two, <code>helpers/all.scss</code>{' '}
      and <code>config/all.scss</code> are mandatory.  They don&apos;t generate
      any output, but define variables and helper functions required by the
      other files.
    </p>
    <p>
      The <code>config/palette.scss</code> is a special case.  It&apos;s generated
      automatically from a palette configuration file.  You can create your
      own palette to replace the builtin palette if you want to.  You can
      read more about it on the <Link to="/colors/palette">Custom Palette</Link> page.
    </p>
    <p>
      The remaining files are up for grabs.  For example, you can omit the{' '}
      <code>forms/all.scss</code> if you&apos;re not interesting in the form
      styles, or the <code>components/all.scss</code> if you don&apos;t want
      any of the components.  The <code>utilities/all.scss</code> is also
      optional, although you might find that some of the components depend
      on utility classes contained therein.
    </p>
    <p>
      Or you can create your own versions of those file to pick and choose
      which parts you want.
    </p>
    <All/>
  </div>

const All = () => {
  const [file, setFile] = useState('helpers')
  return (
    <Split>
      <div>
        <p>
          This is what the <code>{file}/all.scss</code> file looks like.
        </p>
        <div className="buttons mar-b-4">
          { Object.keys(allFiles).map(
            f =>
              <button
                key={f} onClick={() => setFile(f)}
                className={f === file ? 'brand' : 'grey outline'}
              >
                {f}
              </button>
          )
          }
        </div>
        <p>
          You can browse the source code for these files{' '}
          <a href="https://github.com/abw/badger-css/tree/master/styles">on Github</a>.
        </p>
      </div>
      <CodeBlock
        code={allFiles[file]}
        caption={`${file}/all.scss`}
        language='scss'
        expand
      />
    </Split>
  )
}

export default Sass