import React from 'react'
import root  from 'react-shadow'
import FormExample from '@/snippets/form/example.html?raw'

const FormStyle = () =>
  <div className="grid-2 gap-8 mar-t-10 stack-desktop">
    <div className="output">
      <h3 className="mar-v">Default HTML Form Styles</h3>
      <h4 className="mar-t mar-b-8">Would you been seen holding this?</h4>
      <root.div>
        <div dangerouslySetInnerHTML={{__html:FormExample}}></div>
      </root.div>
    </div>
    <div className="output">
      <h3 className="mar-v">Badger CSS Form Styles</h3>
      <h4 className="mar-t mar-b-8">Beautiful plumage!</h4>
      <div dangerouslySetInnerHTML={{__html:FormExample}}></div>
    </div>
  </div>

export default FormStyle