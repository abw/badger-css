import React from 'react'
import Fonts from '@/snippets/html/fonts.html?raw'
import Split from '@/site/Split.jsx'
import { Snippet, Example } from '@abw/badger-website'

const FontsExamples = () =>
  <div className="prose flow">
    <h1>Fonts</h1>
    <h2>Font Classes</h2>
    <p>
      The <code>font-sans</code> CSS class can be used to select a sans-serif
      font, <code>font-serif</code> for a serif font or <code>font-mono</code>{' '}
      for a monospaced font.
    </p>
    <Example
      html={Fonts}
      caption="Fonts"
      expand
    />
    <h2>Font Stacks</h2>
    <p>
      The default font stacks are designed to provide a consistent appearance
      across different browsers and platforms.  They should usually match the
      operating system default UI font and should be available in all font
      weights.  There are also backup fonts included to render emojis.
    </p>
    <table className="small brand celled shaded wide font-mono">
      <tbody>
        <tr>
          <th className="nowrap">
            $font-sans
          </th>
          <td>
            ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;
          </td>
        </tr>
        <tr>
          <th className="nowrap">
            $font-serif
          </th>
          <td>
            ui-serif, Georgia, Cambria, &quot;Times New Roman&quot;, Times, serif
          </td>
        </tr>
        <tr>
          <th className="nowrap">
            $font-mono
          </th>
          <td>
            ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, &quot;Liberation Mono&quot;, &quot;Courier New&quot;, monospace
          </td>
        </tr>
      </tbody>
    </table>

    <h2>Font Variables</h2>
    <p>
      Each of the above fonts is defined by a SASS variable which you can
      override to define your own font stacks.
    </p>
    <Snippet
      file="sass/font-faces.scss"
      caption="Customising Fonts"
      expand
    />
    <p>
      These variables are exposed as the corresponding CSS custom properties:{' '}
      <code>--font-sans</code>, <code>--font-serif</code>,{' '}
      and <code>--font-mono</code>.
    </p>


    <div className="grid-2 gap-4 stack-laptop mar-b-8">
      <Snippet
        file="sass/font-vars.scss"
        caption="Font Variables in SCSS"
        expand
      />
      <Snippet
        file="sass/font-vars.css"
        caption="Font Variables in CSS"
        expand
      />
    </div>

    <h2>Custom Fonts</h2>
    <Split>
      <div>
        <p>
          You can define your own names for fonts.
        </p>
        <p>
          In this case the CSS classes created will be <code>font-body</code>,{' '}
          <code>font-head</code> and <code>font-code</code>.  The fonts will also
          be defined as the <code>--font-body</code>, <code>--font-head</code>,{' '}
          and <code>--font-code</code> CSS custom properties.
        </p>
      </div>
      <Snippet
        file="sass/fonts.scss"
        caption="Font Aliases"
        language="scss"
        className="mar-b-8"
        expand
      />
    </Split>
  </div>

export default FontsExamples
