import React     from 'react'
import Example   from '../../site/Example.jsx'
import Tooltips  from '../../snippets/html/tooltips.html?raw'
import Custom    from '../../snippets/html/tooltips-custom.html?raw'

const TooltipsPage = () =>
  <div className="prose">
    <h1>Tooltips</h1>
    <p>
      The <a href="https://www.npmjs.com/package/@zkreations/tooltips">Tooltip.css</a>{' '}
      library by <a href="https://github.com/zkreations">zkreations</a> is
      included for displaying tooltips.
    </p>
    <p>
      The only changes to the default settings are to provide different colors
      for light and dark modes.  This is done by providing values for the{' '}
      <code>--tts-background</code> and <code>--tts-color</code> variables.
    </p>
    <Example
      html={Tooltips}
      language="html"
      caption="Tooltips"
    />

    <p>
      You can set any of the supported{' '}
      <a href="https://www.npmjs.com/package/@zkreations/tooltips#customize">CSS variables</a>{' '}
      to customise the tooltips further.
    </p>
    <Example
      html={Custom}
      language="html"
      caption="Custom Tooltips"
    />
  </div>

export default TooltipsPage