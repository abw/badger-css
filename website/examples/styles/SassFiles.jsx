import React      from 'react'
import Helpers    from '@/styles/helpers/all.scss?raw'
import Config     from '@/styles/config/all.scss?raw'
import Utils      from '@/styles/utilities/all.scss?raw'
import Forms      from '@/styles/forms/all.scss?raw'
import Comps      from '@/styles/components/all.scss?raw'
import { Source, Split } from '@abw/badger-website'
import { useState } from 'react'

const allFiles = {
  helpers:    Helpers,
  config:     Config,
  utilities:  Utils,
  forms:      Forms,
  components: Comps,
}

const SassFiles = () => {
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
      <Source
        code={allFiles[file]}
        caption={`${file}/all.scss`}
        language='scss'
        expand
      />
    </Split>
  )
}

export default SassFiles