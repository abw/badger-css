import React    from 'react'
import Example  from '../../site/Example.jsx'
import Fieldset from '../../snippets/form/fieldset.html?raw'

const Fieldsets = () =>
  <div className="prose">
    <h1>Form Field Sets</h1>
    <p>
      You can group related fields together in a <code>fieldset</code>.
    </p>
    <h2>Fieldset Container</h2>
    <Example
      html={Fieldset}
      language="html"
      caption="Form Fieldset"
    />
  </div>

export default Fieldsets