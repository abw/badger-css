import React   from 'react'
// import Example from '@/site/Example.jsx'
import Dialog  from '@/examples/components/Dialog.jsx'
import DialogTall  from '@/examples/components/DialogTall.jsx'
import DialogWide  from '@/examples/components/DialogWide.jsx'
import DialogSrc  from '@/snippets/dialog/dialog.html?raw'
import CodeBlock from '@/site/CodeBlock.jsx'
import Split from '@/site/Split.jsx'

const DialogExamples = () =>
  <div className="prose">
    <h1>Dialog</h1>
    <p>
      Some default styling is provided for the <code>dialog</code> element
      which can be used to display modals.
    </p>
    <p>
      A immediate child element with the <code>close</code> CSS class can
      be used to create a close button.
    </p>
    <Split>
      <CodeBlock
        code={DialogSrc}
        caption="Dialog"
        language="html"
        className="mar-b-8"
        expand
      />
      <Dialog/>
    </Split>
    <p>
      The <code>$dialog-max-width</code> SASS variable defaults to{' '}
      <code>80vw</code> and is set as the <code>--max-width</code> CSS
      variable in the scope of a <code>dialog</code> element.
      Similarly the <code>$dialog-max-height</code> SASS variable defaults to{' '}
      <code>90vh</code> and is set as the <code>--max-height</code> CSS
      variable.
    </p>
    <p>
      In general, you can constrain the width of the content and the
      dialog which size appropriately.
    </p>
    <Split>
      <DialogWide/>
      <DialogTall/>
    </Split>
  </div>

export default DialogExamples