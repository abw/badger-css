import React          from 'react'
import Example        from '../../site/Example.jsx'
import Details        from '../../snippets/html/details.html?raw'
import DetailsBorder  from '../../snippets/html/details-border.html?raw'
import DetailsLined   from '../../snippets/html/details-lined.html?raw'
import DetailsShaded  from '../../snippets/html/details-shaded.html?raw'
import DetailsStyle   from '../../snippets/html/details-style.html?raw'
import Demo           from '../../examples/components/Details.jsx'
// import Link        from '../../ui/Link.jsx'

const DetailsPage = () =>
  <div className="prose">
    <h1>Details</h1>
    <p>
      The <code>details</code> HTML element can be used to create a
      disclosure widget.
    </p>

    <h2>Demo</h2>
    <p>
      Select the options to determine how the details widget is displayed.
    </p>
    <Demo/>

    <h2>Default Style</h2>
    <p>
      The default style will be applied without the need for any special
      CSS classes.  You can add any of the utility classes (e.g. the
      size classes like <code>small</code>, <code>large</code>, etc.) to
      change the basic appearance of either the whole widget, the summary,
      or any of the content elements.
    </p>
    <Example
      html={Details}
      language="html"
      caption="Default Style"
    />

    <h2>Border Style</h2>
    <p>
      Add the <code>border</code> class to add a border.  The usual{' '}
      <code>bdr-N</code> classes can be added to set the border radius{' '}
      and <code>bdw-N</code> to set the border width.
    </p>
    <p>
      The <code>bdc-N</code> classes can be used to set the border color stop,
      and <code>bdd-N</code> classes for the border color stop in dark mode.
    </p>
    <Example
      html={DetailsBorder}
      language="html"
      caption="Details With Borders"
    />

    <h2>Lined Style</h2>
    <p>
      The <code>lined</code> class can be added to put an additional border
      line between the summary header and body content.
    </p>
    <Example
      html={DetailsLined}
      language="html"
      caption="Details With Borders"
    />

    <h2>Shaded Style</h2>
    <p>
      Add the <code>shaded</code> class to shade the background colors.
      You can add any of the color classes to change the color palette.
    </p>
    <Example
      html={DetailsShaded}
      language="html"
      caption="Shaded Details"
    />

    <h2>Custom Styling</h2>
    <p>
      There are a number of CSS variables that you can set to change the
      styling.
    </p>
    <Example
      html={DetailsStyle}
      language="html"
      caption="Custom Styling"
    />

  </div>

export default DetailsPage