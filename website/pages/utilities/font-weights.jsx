import React   from 'react'
import Names   from '@/snippets/weights/names.html?raw'
import Numbers from '@/snippets/weights/numbers.html?raw'
import Aliases from '@/snippets/weights/aliases.html?raw'
import Split   from '@/site/Split.jsx'
import { Snippet, Example } from '@abw/badger-website'

const WeightExamples = () =>
  <div className="prose flow">
    <h1>Font Weights</h1>
    <h2>Weight Names</h2>
    <Split>
      <p>
        The <code>weight-&lt;name&gt;</code> classes can be used to set the font weight.
      </p>
      <p>
        The values for <code>&lt;name&gt;</code> can be
        <code>thin</code>, <code>extra-light</code>, <code>light</code>,{' '}
        <code>regular</code>, <code>medium</code>, <code>semi-bold</code>,{' '}
        <code>bold</code>, <code>extra-bold</code> or <code>black</code>.
      </p>
    </Split>

    <Example
      html={Names}
      caption="Weight Names"
      expand
    />

    <h2>Weight Numbers</h2>

    <Split>
      <p>
        Alternately you can use the corresponding weight numbers.
      </p>
      <p>
        Those numbers can be{' '}
        <code>100</code>, <code>200</code>, <code>300</code>,{' '}
        <code>400</code>, <code>500</code>, <code>600</code>,{' '}
        <code>700</code>, <code>800</code> or <code>900</code>.
      </p>
    </Split>

    <Example
      html={Numbers}
      caption="Weight Numbers"
      expand
    />

    <h2>Weight Aliases</h2>
    <p>
      There are some short-cut aliases for the common cases.  Note that we
      use <code>thick</code> rather than <code>black</code> to avoid any
      confusion with the color black.
    </p>

    <Example
      html={Aliases}
      caption="Weight Aliases"
      expand
    />

    <h2>Custom Weights</h2>
    <Split>
      <p>
        You can set the <code>$font-weights</code> SASS variable if you want
        to define a different set of font weights.
      </p>
      <Snippet
        file="sass/weights.scss"
        caption="Font Weights"
        expand
      />
    </Split>

  </div>


export default WeightExamples