import React    from 'react'
import Example  from '@/site/Example.jsx'
import Styling  from '@/snippets/form/styling.html?raw'

const FormStyling = () =>
  <div className="prose flow">
    <h1>Form Styling</h1>
    <p>
      There are numerous CSS properties that you can set to change the
      styling.
    </p>
    <Example
      html={Styling}
      language="html"
      caption="Form Styling"
      expand
    />
  </div>

export default FormStyling
