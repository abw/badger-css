import React    from 'react'
import Example  from '../../site/Example.jsx'
import Input    from '../../snippets/form/input.html?raw'

const FakeInputs = () =>
  <div className="prose">
    <h1>Fake Input</h1>
    <p>
      If you want something that isn&apos;t an input to look like an input then
      you can add the <code>input</code> CSS class.
    </p>
    <p>
      Add the <code>disabled</code> class if you want it to look disabled.
    </p>
    <Example
      html={Input}
      language="html"
      caption="Not an Input"
    />
  </div>

export default FakeInputs